import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./src/redux/store";

const persistor = persistStore(configureStore);

export default function App() {
  return (
    <Provider store={configureStore}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
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
