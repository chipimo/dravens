import React, { useEffect } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
const HomeScreen = () => {
  const [hour, sethour] = React.useState(null);
  const [username, setusername] = React.useState("Melvin");

  useEffect(() => {
    this.getHour();
  }, []);

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    sethour(hour);
  };

  return (
    <View>
      <View
        style={{
          width: "100%",
          padding: 5,
          paddingLeft: 10,
          paddingRight: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            padding: 9,
            backgroundColor: "#BDB1DB",
            width: "100%",
            borderRadius: 5,
            overflow: "hidden",
            borderColor: "transparent",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftColor: "#6B52AE",
            borderLeftWidth: 7
          }}
        >
          <Text h4>
            {hour < 12
              ? `Good Morning ${username} welcome back`
              : hour < 17
              ? `Good afternoon ${username} welcome back`
              : `Good evening ${username} welcome back`}
          </Text>
        </View>
      </View>
    </View>
  );
};
HomeScreen.navigationOptions = {
  header: null
};
export default HomeScreen;
