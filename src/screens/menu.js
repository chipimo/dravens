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
  ActivityIndicator
} from "react-native";
import { WebView } from "react-native-webview";
import LottieView from "lottie-react-native";
import { ListItem, Avatar, Divider } from "react-native-elements";
import { connect } from "react-redux";

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    loading: false
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
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Avatar
            rounded
            size="large"
            source={{
              uri:
                "https://findithomes.com/wp-content/uploads/2019/09/DSC_1535-150x150.jpg"
            }}
            containerStyle={{ margin: 20, marginTop: 40 }}
            showEditButton
            onPress={() => {
              this.props.navigation.navigate("LinksScreen", {
                title: "Profile",
                link: "https://findithomes.com/profile/"
              });
            }}
          />
          <Text style={styles.NotificationText}>Joseph</Text>
        </View>

        <ListItem
          title="Dashboard"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "apps" }}
          onPress={() => { 
            props.dispatchEvent({
              type: "NAVTO",
              routeName: "Dashboard",
              payload: { naviget: this.props.navigation, isModal: false }
            });
            this.props.navigation.navigate("LinksScreen", {
              title: "Dashboard",
              link: "https://dravens.co.uk/request-our-service/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Reservations"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "date-range" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Reservations",
              link: "https://findithomes.com/reservations/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Favorites"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "loyalty", color: "#9c0043" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Favorites",
              link: "https://findithomes.com/favorites/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Security"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "lock-open", color: "#759c00" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Security",
              link: "https://findithomes.com/profile/?page=password-reset"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Invoice"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "assignment", color: "#eb6600" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Invoice",
              link: "https://findithomes.com/invoices/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Help"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "help", color: "#6600bf" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Help",
              link: "https://help.findithomes.com/"
            });
          }}
          bottomDivider
          chevron
        />
        <ListItem
          title="live Chat"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "help", color: "#6600bf" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "live Chat",
              link:
                "https://tawk.to/chat/5d5ce6dc77aa790be32ff654/default?$_tawk_sk=5db855fb529fac636bd17265&$_tawk_tk=1e2e584eb9b3131cd2cb296a1d730925&v=680"
            });
          }}
          bottomDivider
          chevron
        />
        <Divider style={{ marginTop: 40 }} />

        <ListItem
          title="About Us"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "info", color: "#bf007c" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "About Us",
              link: "https://findithomes.com/about-findithomes/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="How it Works"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "description", color: "#00bf8f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "How it Works",
              link: "https://findithomes.com/how-it-works-mobile-app"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Become a Landlord"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "supervisor-account", color: "#000" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Become a Landlord",
              link: "https://findithomes.com/become-a-landlord"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Privacy Policy"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "subject", color: "#0079bf" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Privacy Policy",
              link: "https://findithomes.com/privacy-policy/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Terms and Conditions"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "subject", color: "#1000bf" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Terms and Conditions",
              link: "https://findithomes.com/terms-and-conditions/"
            });
          }}
          bottomDivider
          chevron
        />
        <Divider style={{ marginTop: 40 }} />
        <ListItem
          title="LogOut"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "input", color: "#1000bf" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Terms and Conditions",
              link: "https://findithomes.com/terms-and-conditions/"
            });
          }}
          bottomDivider
          chevron
        />
        <Divider style={{ marginTop: 40, backgroundColor: "rgba(0,0,0,0)" }} />
      </ScrollView>
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
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff"
  },
  subtitleView: {
    paddingLeft: 0,
    paddingTop: 5
  },
  ratingText: {
    paddingLeft: 3,
    color: "grey"
  },
  ratingSubText: {
    paddingLeft: 3,
    color: "#d8dce1"
  },
  NotificationText: {
    color: "#000",
    fontFamily: "Segoe-UI-Bold",
    fontSize: 22,
    paddingLeft: 0,
    paddingTop: 55,
    padding: 20
  }
});
