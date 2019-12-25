import React from "react";
import { StyleSheet, Text, View,Dimensions,Platform,StatusBar } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./src/redux/store";
import AppContainer from "./src/navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";


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

const persistor = persistStore(configureStore);

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "Righteous-Regular": require("./src/assets/fonts/Righteous-Regular.ttf"),
      "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
      "Segoe-UI-Bold-Italic": require("./src/assets/fonts/Segoe-UI-Bold-Italic.ttf"),
      "Segoe-UI-Italic": require("./src/assets/fonts/Segoe-UI-Italic.ttf"),
      "Segoe-UI": require("./src/assets/fonts/Segoe-UI.ttf"),
      "Segoe-UI-Bold": require("./src/assets/fonts/Segoe-UI-Bold.ttf")
    });
  };

  if (!isLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsLoaded(true)}
        onError={() => console.warn}
      />
    );
  }

  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
       <View style={{ height: StatusBarHeight, backgroundColor: "#4C0D6B" }} />
        <AppContainer />
      </PersistGate>
    </Provider>
  );
}
