import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  ActivityIndicator
} from "react-native";
import { WebView } from "react-native-webview";
import { Icon } from "react-native-elements";
import LottieView from "lottie-react-native";
import { IconToggle, Toolbar } from "react-native-material-ui";
import { connect } from "react-redux";

class BookingScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    loading: true
  };

  componentWillMount() {}

  _webview = () => {
    let link = "https://dravens.co.uk/book/";  
    let jsCode = `
    document.querySelector('.page-heading').style.display = 'none'; document.querySelector('.et-footers-wrapper').style.display = 'none';  
    document.querySelector('.header-wrapper').style.display = 'none ';  
  `;
    return (
      <WebView
        source={{ uri: link }} 
        style={{ flex: 9 }}
        injectedJavaScript={jsCode}
        onLoadStart={() => this.setState({ loading: true })} 
        onLoadEnd={() => this.setState({ loading: false })}
        scalesPageToFit={true}
      />
    );
  };

  _loadingScreen = () => { 
    return (
      <View style={styles.loader}>
        <LottieView
          source={require("../assets/lottie/pulse.json")}
          autoPlay
          loop
        />
      </View>
    );
  };
 

  render() {
    return (
      <View style={{ flex: 1 }}>
        
        <View style={{ flex: 10 }}>{this._webview()}</View>

        {this.state.loading ? this._loadingScreen() : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loader: {
    flex: 1,
    position: "absolute",
    top: 50,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff"
  },
  NotificationText: {
    color: "#000",
    fontFamily: "Segoe-UI-Bold",
    fontSize: 20,
    paddingLeft: 0,
    paddingTop: 21
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "rgba(0,0,0,.1)",
    borderBottomWidth: 1
  }
});

export default BookingScreen;
