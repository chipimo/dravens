import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {  BottomTabBar } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import HomeScreen from "../screens/HomeScreen";

import TabBarIcon from "../components/TabBarIcon";
import Monitor from "../screens/Monitor";
import BookingScreen from "../screens/Booking";
import MenuScreen from "../screens/menu";
import LinksScreen from "../screens/LinksScreen";
import CustomerCare from "../screens/CustomerCare";
import ToolBar from "../components/ToolBar";

/////Tab navigation

const MoreStackNav = createStackNavigator({
  More: MenuScreen
});

MoreStackNav.navigationOptions = {
  header: null
};


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon focused={focused} color={tintColor} name={"ios-home"} />
  ),
  tabBarOptions: {
    activeTintColor: "#5E1E7C"
  }
};

// const MonitorStack = createStackNavigator({
//   Monitor: Monitor
// });

// MonitorStack.navigationOptions = {
//   tabBarLabel: "Monitor",
//   tabBarIcon: ({ focused, tintColor }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === "ios" ? "ios-stats" : "md-stats"}
//     />
//   ),
//   tabBarOptions: {
//     activeTintColor: "#5E1E7C"
//   }
// };

const BookingStack = createStackNavigator({
  Booking: BookingScreen
});

BookingStack.navigationOptions = {
  tabBarLabel: "Booking",
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#5E1E7C"
  }
}; 

const MoreStack = createStackNavigator({
  More: MoreStackNav
});

MoreStack.navigationOptions = {
  tabBarLabel: "More",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#5E1E7C"
  }
};

const CustomerStack = createStackNavigator({
  Customer: CustomerCare
});

CustomerStack.navigationOptions = {
  tabBarLabel: "Talk to us",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-text" : "md-text"}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#5E1E7C"
  }
};

const TabBarComponent = props => <BottomTabBar {...props} />;

////SCREEN TAB NAVIGATION//////
const MainStack = createMaterialBottomTabNavigator(
  {
    HomeStack,
    BookingStack,
    CustomerStack,
    MoreStack
  },
  {
    activeColor: "#5E1E7C",
    inactiveColor: "#3e2465",
    barStyle: { backgroundColor: "#FDFDFD" }
  }
);

////SCREEN STACK NAVIGATION/////
const Stacks = createStackNavigator(
  {
    Tabs: MainStack,
    LinksScreen:LinksScreen
  },
  {
    /* Other configuration remains unchanged */
    defaultNavigationOptions: {
      header: props => <ToolBar {...props} />
    }
  }
);

////SCREEN SWICHER NAVIGATION//////
const DravensApp = createAnimatedSwitchNavigator(
  {
    Main: Stacks
  },
  {
    initialRouteName: "Main",
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    )
  }
);

export default AppContainer = createAppContainer(DravensApp);
