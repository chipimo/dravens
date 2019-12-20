import React from "react";
import { Platform, Dimensions } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
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
import ToolBar from "../components/ToolBar";
import Events from "../screens/Events";
import FeedViewer from "../screens/FeedViewer";
import EventViewer from "../screens/EventViewer";
import ServicesView from "../screens/ServicesView";
import SideMenu from "../screens/SideMenu";

/////Tab navigation

const EventStack = createStackNavigator({
  Main: Events,
  EventModal: EventViewer
});

EventStack.navigationOptions = {
  mode: "modal",
  header: null
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Events: EventStack,
  EventViewer: EventViewer,
  ServicesView: ServicesView,
  FeedViewer: FeedViewer
});

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon focused={focused} color={tintColor} name={"ios-home"} />
  ),
  tabBarOptions: {
    activeTintColor: "#503088"
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
    activeTintColor: "#503088"
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
  ),
  tabBarOptions: {
    activeTintColor: "#503088"
  }
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
  ),
  tabBarOptions: {
    activeTintColor: "#503088"
  }
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
  ),
  tabBarOptions: {
    activeTintColor: "#503088"
  }
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
      <TabBarComponent {...props} style={{ borderTopColor: "#CFCFCF" }} />
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
      header: props => <ToolBar {...props} />
    }
  }
);

const ManStacks = createDrawerNavigator(
  {
    MainUi: {
      screen: Stacks
    }
  },
  {
    contentComponent: props => <SideMenu {...props} />,
    drawerWidth: Dimensions.get("window").width - 50,
    drawerPosition: "left",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    drawerOpenRoute: "LeftSideMenu",
    drawerCloseRoute: "LeftSideMenuClose",
    drawerToggleRoute: "LeftSideMenuToggle"
  }
);

////SCREEN SWICHER NAVIGATION//////
const DravensApp = createAnimatedSwitchNavigator(
  {
    Auth: AuthMonitor,
    Main: ManStacks
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
