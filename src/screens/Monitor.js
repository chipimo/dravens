import React from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import HeaderImageScrollView, {
  TriggeringView
} from "react-native-image-header-scroll-view";
import { IconToggle } from "react-native-material-ui";
import * as Animatable from "react-native-animatable";
import { Header } from "react-navigation-stack";

const MIN_HEIGHT = 45;
const MAX_HEIGHT = 200;

const Monitor = () => {
  let textInput = null;

  const list = [
    {
      name: "Basic information",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
      icon: "flight-takeoff"
    },
    {
      name: "Basic information",
      subtitle: "Vice President",
      icon: "flight-takeoff"
    },
    {
      name: "Health background",
      subtitle: "Vice President",
      icon: "flight-takeoff"
    },
    {
      name: "Medication",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
      icon: "av-timer"
    }
  ];
  return (
    <View>
      
    </View>
  );
};

Monitor.navigationOptions = {
  header: null
};

export default Monitor;
