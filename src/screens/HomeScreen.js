import React from "react";
import { View, Text } from "react-native";
import { Card } from 'react-native-material-ui';

const HomeScreen = () => {
  return (
    <View>
      <Card>
        <Text>Hello world!</Text>
      </Card>
    </View>
  );
};
HomeScreen.navigationOptions = {
  header: null
};
export default HomeScreen;
