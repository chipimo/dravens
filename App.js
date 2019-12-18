import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./src/redux/store";
import AppContainer from "./src/navigation";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const persistor = persistStore(configureStore);

export default function App() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  loadAssets = async () => {
    await Font.loadAsync({
      fontawesome: require("./src/assets/fonts/fontawesome.ttf"),
      icomoon: require("./src/assets/fonts/icomoon.ttf"),
      "Righteous-Regular": require("./src/assets/fonts/Righteous-Regular.ttf"),
      "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf")
    });

    setIsLoaded(true);
  };

  renderLoading = () => <AppLoading />;

  RenderApp = () => {
    return <AppContainer />;
  };

  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
        {isLoaded ? <RenderApp /> : renderLoading()}
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
