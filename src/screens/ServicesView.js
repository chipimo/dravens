import React from "react";
import { Text, View } from "react-native";
import { IconToggle } from "react-native-material-ui";

const ServicesView = ( props ) => (
  <View>
    <View
      style={{
        height: 45,
        width: "100%",
        backgroundColor: "#6B52AE",
        flexDirection: "row"
      }}
    >
      <IconToggle
        onPress={() => {
          props.navigation.goBack();
        }}
        color={"#DFDEE0"}
        name="keyboard-arrow-left"
      />
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            color: "#F7F7F7",
            fontSize: 19
          }}
        >
          HealthCare Services
        </Text>
      </View>
    </View>
  </View>
);

ServicesView.navigationOptions = {
  header: null
};

export default ServicesView;
