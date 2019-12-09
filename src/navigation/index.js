import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import HomeScreen from "../screens/HomeScreen";
// import WalkthroughScreen from "../screens/WalkthroughScreen";
import LoginScreen from "../screens/auth/Login";
import SignupScreen from "../screens/auth/SginUp";
import TabBarIcon from "../components/TabBarIcon";
import Monitor from "../screens/Monitor";
import BookingScreen from "../screens/Booking";
import UserProfile from "../screens/UserProfile";
import CustomerCare from "../screens/CustomerCare";
import AuthMonitor from "../screens/auth/AuthMonitor";

const AuthStack = createStackNavigator({
  AuthMonitor: AuthMonitor,
  Login: LoginScreen,
  Signup: SignupScreen
});

/////Tab navigation
const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon focused={focused} color={tintColor} name={"ios-home"} />
  ),
  tabBarOptions: {
    activeTintColor: "#7f9293"
  }
};

const MonitorStack = createStackNavigator({
  Monitor: Monitor
});

MonitorStack.navigationOptions = {
  tabBarLabel: "Monitor",
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-stats" : "md-stats"}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#7f9293"
  }
};

const Booking = createStackNavigator({
  Booking: BookingScreen
});

Booking.navigationOptions = {
  tabBarLabel: "Booking",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-calendar" : "md-calendar"}
    />
  )
};

const User = createStackNavigator({
  Booking: UserProfile
});

User.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

const Customer = createStackNavigator({
  Booking: CustomerCare
});

Customer.navigationOptions = {
  tabBarLabel: "Talk to us",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-text" : "md-text"}
    />
  )
};

const TabBarComponent = props => <BottomTabBar {...props} />;

////SCREEN TAB NAVIGATION//////
const MainStack = createBottomTabNavigator(
  {
    HomeStack,
    MonitorStack,
    Booking,
    Customer,
    User
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{ borderTopColor: "#605F60" }} />
    )
  }
);

////SCREEN STACK NAVIGATION/////
const Stacks = createStackNavigator(
  {
    Tabs: MainStack
  },
  {
    /* Other configuration remains unchanged */
    defaultNavigationOptions: {
      header: null
    }
  }
);

////SCREEN SWICHER NAVIGATION//////
const DravensApp = createAnimatedSwitchNavigator(
  {
    Auth: AuthStack,
    Main: Stacks
  },
  {
    initialRouteName: "Auth",
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
