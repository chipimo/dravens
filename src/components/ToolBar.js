import React from "react";
import { View, Text, StatusBar, Dimensions, Platform } from "react-native";
import { Toolbar } from "react-native-material-ui";
import { Ionicons } from "@expo/vector-icons";

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
      <Toolbar
        leftElement="menu"
        centerElement={ 
          <Text
            style={{
              fontFamily: "Roboto-Medium",
              color: "#E3E2E3",
              fontSize: 20
            }}
          >
            Home
          </Text>
        }
        rightElement={{
          menu: {
            icon: "more-vert",
            labels: ["item 1", "item 2"]
          }
        }}
        onRightElementPress={label => {
          console.log(label);
        }}
        style={{
          container: { backgroundColor: "#6B4180" }
        }}
      />
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

export default ToolBar;
