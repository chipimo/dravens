import React from "react";
import { View, Text } from "react-native";
import Animation from "lottie-react-native";
import anim from "../../assets/lottie/pulse.json";
import AuthScreen from "../../containers/AuthScreen";

const AuthMonitor = () => {
  const [isLoggedIn, setisLoggedIn] = React.useState(false);
  const [isLoading, setisLoading] = React.useState(false);
  const [isAppReady, setisAppReady] = React.useState(false);

  const _simulateLogin = (username, password) => {
    setisLoading(true);
    setTimeout(() => {
      setisLoggedIn(true);
      setisLoading(false);
    }, 1000);
  };

  const _simulateSignup = (username, password, fullName) => {
    setisLoading(true);
    setTimeout(() => {
      setisLoggedIn(true);
      setisLoading(false);
    }, 1000);
  };
  return (
    <View style={{ flex: 1 }}>
      <AuthScreen
        login={_simulateLogin}
        signup={_simulateSignup}
        isLoggedIn={isLoggedIn}
        isLoading={isLoading}
        onLoginAnimationCompleted={() => setisAppReady(true)}
      />
      {/* <Animation
        source={anim}
        autoPlay
        width={350}
        loop
        style={{ flex: 1, marginTop: -50 }}
      /> */}
    </View>
  );
};
AuthMonitor.navigationOptions = {
  header: null
};
export default AuthMonitor;
