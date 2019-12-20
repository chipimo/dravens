import React from "react";
import { View, Text, StatusBar, Dimensions, Platform } from "react-native";
import { Toolbar } from "react-native-material-ui";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { IconToggle } from "react-native-material-ui";

const X_WIDTH = 375;
const X_HEIGHT = 812;

const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

const { height, width } = Dimensions.get("window");

export const isIPhoneX = () =>
  Platform.OS === "ios" && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT)
    : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0
});

const ToolBar = props => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={{ height: StatusBarHeight, backgroundColor: "#4C0D6B" }} />
      {props.NavData.routeName === "home" ? (
        <Toolbar
          centerElement={
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Segoe-UI-Bold",
                  color: "#D5D4D5",
                  fontSize: 17
                }}
              >
                Dravens
              </Text>
              <Text
                style={{
                  fontFamily: "Segoe-UI",
                  color: "#D5D4D5",
                  fontSize: 17,
                  marginLeft: 3
                }}
              >
                HealthCare
              </Text>
            </View>
          }
          
          style={{
            container: { backgroundColor: "#6B4180" }
          }}
        />
      ) : null}
      {/* <View
        style={{
          height: 25,
          padding: 2,
          paddingLeft: 9, 
          backgroundColor: "#6B52AE"
        }}
      >
        <Text style={{ color: "#DFDFDF" }}>Dravens HelthCare</Text>
      </View> */}
    </View>
  );
};

const mapStateToProps = state => {
  return {
    NavData: state.NavData
  };
};

const mapDispatchToprops = dispatch => {
  return {
    dispatchEvent: data => dispstch(data)
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(ToolBar);
