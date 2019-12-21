import React from "react";
import { View, Text } from "react-native";
import { IconToggle, Toolbar } from "react-native-material-ui";

const BookingScreen = () => {
  return (
    <View>
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            fontFamily: "Segoe-UI",
            color: "#212121",
            fontSize: 25
          }}
        >
          Book appointment
        </Text>
      </View>
    </View>
  );
};

BookingScreen.navigationOptions = {
  header: null
};

export default BookingScreen;
