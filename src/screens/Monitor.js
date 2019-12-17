import React from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";

const Monitor = () => {
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
      {list.map((l, i) => (
        <ListItem
          key={i}
          //   leftAvatar={{ source: { uri: l.avatar_url } }}
          leftIcon={{ name: l.icon }}
          title={l.name}
          subtitle={l.subtitle}
          bottomDivider
        />
      ))}
    </View>
  );
};

Monitor.navigationOptions = {
  header: null
};

export default Monitor;
