import React from "react";
import { View, Text, StatusBar, Dimensions, Platform } from "react-native";
import { Toolbar } from "react-native-material-ui";

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

const ToolBar = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={{ height: StatusBarHeight, backgroundColor: "#503088" }} />
      <View
        style={{
          height: 25,
          padding: 2,
          paddingLeft: 9, 
          backgroundColor: "#6B52AE"
        }}
      >
        <Text style={{ color: "#DFDFDF" }}>Dravens HelthCare</Text>
      </View>
    </View>
  );
};

export default ToolBar;
