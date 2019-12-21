/** @format */

import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Constants, Config } from '@common'
import { WooWorker } from 'api-ecommerce'
import Api from './Api'
import WPUserAPI from './WPUserAPI'
import firebaseApp from '@services/Firebase'
import * as firebase from 'firebase'
import { remove, findIndex } from 'lodash'

function UserModal() {
  if (!(this instanceof UserModal)) {
    return new UserModal()
  }
}

/**
 * Check the user login data is existing on the app
 * @returns {boolean}
 */
UserModal.prototype.isLogedIn = async function() {
  try {
    var value = await AsyncStorage.getItem(Constants.Key.user)

    // can also use this
    // AsyncStorage.getItem(Constants.Key.user).then((user_data_json) => {
    // 	let user_data = JSON.parse(user_data_json);
    // }
    return value !== null
  } catch (error) {
    // console.log('error isLogin', error);
  }
}

/**
 * create account with firebase
 * @param email
 * @param password
 * @param callBackFunc
 * @param onError
 */
UserModal.prototype.createWithFirebase = async function(
  email,
  password,
  callBackFunc,
  onError
) {
  try {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (userData) => {
        if (userData) {
          const wordpressLoggined = await Api.getJWTToken(email, password)
          const userInfo = await WPUserAPI.login(email, password)
          const userExtraInfo = await WooWorker.getCustomerById(
            userInfo.user.id
          )
          var user = {
            userId: userInfo.user.id,
            jwtToken: wordpressLoggined.token,
            cookie: userInfo.cookie,
            displayName: wordpressLoggined.user_display_name,
            email: wordpressLoggined.user_email,
            photoURL: '',
            ...userExtraInfo,
          }

          this.saveUser(user, email)
        }
        if (typeof callBackFunc === 'function') {
          callBackFunc(user)
        }
      })
      .catch((error) => {
        if (typeof onError === 'function') {
          onError(error)
        }
      })
  } catch (error) {
    console.error(['err', error])
  }
}

/**
 * Create the user login
 * @param email
 * @param password
 * @param callBackFunc
 */

//#1
UserModal.prototype.create = async function(
  email,
  password,
  name,
  callBackFunc,
  onError,
  isExisted
) {
  try {
    // existed on wordpress create with firebase
    if (isExisted) {
      this.createWithFirebase(email, password, callBackFunc, onError)
    }
    // register on Wordpress site
    const wordpressRegisterd = await Api.register(email, password, name)
    if (
      typeof wordpressRegisterd.status !== 'undefined' &&
      wordpressRegisterd.status === 'ok'
    ) {
      if (Constants.firebaseEnable) {
        this.createWithFirebase(email, password, callBackFunc, onError)
      } else {
        this.saveUser(null, email)
        if (typeof callBackFunc === 'function') {
          callBackFunc()
        }
      }
    } else {
      onError(wordpressRegisterd)
    }
  } catch (error) {
    console.log(error)
  }
}

/**
 * login on both Wordpress and Firebase
 * @param email
 * @param password
 * @param callBackFunc
 */

//#2
UserModal.prototype.login = async function(
  email,
  password,
  callBackFunc,
  onError
) {
  try {
    const wordpressLoggined = await Api.getJWTToken(email, password)
    // console.log(['wplogined', wordpressLoggined])
    if (wordpressLoggined.token != undefined) {
      // const userInfo = await Api.getUserInfoByToken(wordpressLoggined.token)
      const userInfo = await WPUserAPI.login(email, password)
      const userExtraInfo = await WooWorker.getCustomerById(userInfo.user.id)
      // console.warn([userInfo, userExtraInfo])
      var user = {
        userId: userInfo.user.id,
        jwtToken: wordpressLoggined.token,
        cookie: userInfo.cookie,
        displayName: wordpressLoggined.user_display_name,
        email: wordpressLoggined.user_email,
        photoURL: '',
        ...userExtraInfo,
      }
      // console.log(user)
      var self = this
      // if enable user also save to Firebase
      if (Constants.firebaseEnable) {
        firebaseApp
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
            user.uid = response.user.uid
            self.saveUser(
              user,
              email,
              password,
              userExtraInfo.billing,
              userExtraInfo.shipping
            )
            if (typeof callBackFunc == 'function') {
              callBackFunc()
            }
          })
          .catch((error) => {
            // if use not found on firebase, just create it for saving app data
            if (error.code === 'auth/user-not-found') {
              return this.create(
                email,
                password,
                null,
                callBackFunc,
                onError,
                true
              )
            }
            if (typeof onError === 'function') {
              onError(error)
            }
          })
      } else if (typeof callBackFunc === 'function') {
        this.saveUser(user, email)
        callBackFunc()
      }
    } else {
      if (typeof onError == 'function') {
        onError(wordpressLoggined)
      }
    }
  } catch (err) {
    onError(err)
  }
}

UserModal.prototype.loginFacebook = async function(accessToken) {
  return new Promise(async (resolve, reject) => {
    const auth = firebaseApp.auth()
    const credential = firebase.auth.FacebookAuthProvider.credential(
      accessToken
    )

    auth
      .signInAndRetrieveDataWithCredential(credential)
      .then(async (data) => {
        const json = await WPUserAPI.loginFacebook(accessToken)
        if (json === undefined || json.error) {
          reject(json.error)
        } else {
          let userInfo = await WooWorker.getCustomerById(json.wp_user_id)
          let userData = { ...userInfo, data, isLoginFB: true }
          let userEmail = data.user.email
          if (userEmail == null) {
            userEmail = `${data.user.uid}@facebook.com`
          }
          this.saveUser(userData, userEmail)
          resolve(userData)
        }
      })
      .catch((err) => reject(err))
  })
}

UserModal.prototype.loginGoogle = async function(input) {
  let auth = firebaseApp.auth()
  let credential = firebase.auth.GoogleAuthProvider.credential(input.idToken)
  let data = await auth
    .signInWithCredential(credential)
    .catch((err) => console.log(err))
  return this.saveUser(data, input.user.email)
}

/**
 * Save user data to offline
 * @param userData
 * @param email
 */
UserModal.prototype.saveUser = async function(
  userData,
  email,
  password = null,
  billing = null,
  shipping = null
) {
  try {
    await AsyncStorage.setItem(Constants.Key.email, email)
    if (typeof password != null) {
      userData.password = password
    }
    if (typeof billing != null) {
      userData.billing = billing
    }
    if (typeof shipping != null) {
      userData.shipping = shipping
    }
    await AsyncStorage.setItem(Constants.Key.user, JSON.stringify(userData))
  } catch (error) {
    console.error(['errSaveUser', error])
  }
}

/**
 * get read later user
 */
UserModal.prototype.getUser = async function() {
  try {
    let userData = await AsyncStorage.getItem(Constants.Key.user)
    if (userData != null) {
      return JSON.parse(userData)
    }
  } catch (error) {}
}

UserModal.prototype.getPosts = async function() {
  const userPosts = await AsyncStorage.getItem(Constants.Key.posts)

  var postData = []
  if (userPosts != null) {
    postData = JSON.parse(userPosts)
  }

  // if the offline data is null let check the online and sync back to the app
  if (postData.length == 0) {
    postData = await this.getFirebasePost()
    AsyncStorage.setItem(Constants.Key.posts, JSON.stringify(postData))
  }

  return postData
}

/**
 * Get the data from firebase
 * @returns {*|string|string}
 */
UserModal.prototype.getFirebasePost = async function() {
  const userData = await this.getUser()
  var postData = []

  if (typeof userData != 'undefined' && typeof userData.uid != 'undefined') {
    const data = await firebaseApp
      .database()
      .ref(
        '/' + Config.Local.general.Firebase.readlaterTable + '/' + userData.uid
      )
      .once('value')

    if (data.val() != null) {
      postData = data.val().post
    }
  } else {
    // console.log('can not get user data');
  }

  return postData
}

/**
 * Add the post to firebase
 * @param post
 */
UserModal.prototype.firebaseSync = async function(postData) {
  const userData = await this.getUser()

  if (typeof userData != 'undefined' && typeof userData.uid != 'undefined') {
    firebaseApp
      .database()
      .ref(Config.Local.general.Firebase.readlaterTable)
      .child(userData.uid + '/post')
      .set(postData)
  }
}

/**
 * Save read later post and sync to firebase
 * @param post
 */
UserModal.prototype.savePost = async function(post, fnc) {
  if (typeof post == 'undefined' || post == null) {
    return
  }

  const userPosts = await AsyncStorage.getItem(Constants.Key.posts)
  var postData = []
  if (userPosts != null) {
    postData = JSON.parse(userPosts)
  }

  const indexPost = findIndex(postData, (data) => {
    return data.id == post.id
  })

  // not in the read later array yet
  if (indexPost == -1) {
    postData.push(post)

    // save to storage local
    await AsyncStorage.setItem(Constants.Key.posts, JSON.stringify(postData))

    if (typeof fnc == 'function') {
      fnc()
    }

    // sync to firebase
    this.firebaseSync(postData)
  }
  // console.log('save post', indexPost, post);
}

/**
 * remove read later post
 * @param post
 */
UserModal.prototype.removePost = async function(post, fnc) {
  const userPosts = await AsyncStorage.getItem(Constants.Key.posts)
  var postData = []
  if (userPosts != null) {
    postData = JSON.parse(userPosts)
  }
  var newPostData = remove(postData, (data) => {
    return data.id != post.id
  })

  AsyncStorage.setItem(Constants.Key.posts, JSON.stringify(newPostData))

  if (typeof fnc == 'function') {
    fnc()
  }
  // sync to firebase
  this.firebaseSync(newPostData)
}

/**
 * Remove all read later post
 */
UserModal.prototype.clearPosts = function(isSync) {
  // should remove online also
  if (typeof isSync != 'undefined') {
    this.firebaseSync(null)
  }
  // console.log(AsyncStorage.getItem(Constants.Key.posts));
  AsyncStorage.getItem(Constants.Key.posts).then((data) => {
    // console.log('data asyncStorage: ', data)
    if (data != null) {
      return AsyncStorage.multiRemove([Constants.Key.posts], (err) => {})
    }
  })
}

/**
 * Logout and delete all offline data
 */
UserModal.prototype.logOut = function() {
  AsyncStorage.getItem(Constants.Key.user).then((data) => {
    // console.log('data asyncStorage: ', data)
    if (data != null) {
      return AsyncStorage.multiRemove([Constants.Key.user], (err) => {})
    }
  })
}

export default UserModal
