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

class MenuScreen extends React.Component {
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
       <Text style={styles.NotificationText}>Menu</Text>
        <ListItem
          title="Book us Now"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "today", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Book us Now",
              link: "https://dravens.co.uk/book/"  
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Training"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "chrome-reader-mode", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Traning",
              link: "https://dravens.co.uk/training/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Online Training"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "chrome-reader-mode", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Online Traning",
              link: "https://videotilehost.com/dravenshealthcare/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Vacancies"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "work" , color: "#4b205f"}}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Vacancies",
              link: "https://dravens.co.uk/job-application-mobile/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="International Recruitment"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "contacts", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "International Recruitment",
              link: "https://dravens.co.uk/international-recruitment/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Staff Registration"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }} 
          leftIcon={{ name: "perm-identity", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Staff Registration",
              link: "https://dravens.co.uk/staff-registration/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Franchise Opportunity"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }} 
          leftIcon={{ name: "store", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Franchise Opportunity",
              link: "https://dravens.co.uk/franchise-opportunity/"
            });
          }}
          bottomDivider
          chevron
        />


        <ListItem
          title="Submit a Complaint"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "assignment" , color: "#4b205f"}} 
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Submit a Complaint",
              link: "https://dravens.co.uk/feedback-mobile/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Request Our Service"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "assignment" , color: "#4b205f"}} 
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Request Our Service",
              link: "https://dravens.co.uk/request-a-service-mobile/"
            });
          }}
          bottomDivider
          chevron
        />


        <ListItem
          title="Testimonials"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "face", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Testimonials",
              link: "https://dravens.co.uk/testimonials/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="live Chat"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "chat", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "live Chat",
              link:
                "https://tawk.to/chat/5d55359a77aa790be32f04f5/default?$_tawk_sk=5dfde91c8e83d72ac8786b83&$_tawk_tk=066321a3c64d4d2d74734337f05292a8&v=680"
            });
          }}
          bottomDivider
          chevron
        />
        <Divider style={{ marginTop: 40 }} />

        <ListItem
          title="About Us"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "info", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "About Us",
              link: "https://dravens.co.uk/about-us-mobile/"
            });
          }}
          bottomDivider
          chevron
        />

        <ListItem
          title="Blog"
          titleStyle={{ fontFamily: "Segoe-UI-Bold" }}
          leftIcon={{ name: "description", color: "#4b205f" }}
          onPress={() => {
            this.props.navigation.navigate("LinksScreen", {
              title: "Blog",
              link: "https://dravens.co.uk/blog/"
            });
          }}
          bottomDivider
          chevron
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    navData: state.navData
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchEvent: data => dispatch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);

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
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 45,
    padding: 20
  }
});
