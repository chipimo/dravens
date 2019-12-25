import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import { AsyncStorage } from "react-native";
// reducers
import NetInfo from "./netInfo";
import UserInfo from "./userInfo";
import CardItem from "./CardItem";
import EventCard from "./EventCard";
import NavData from "./NavData";
import Welcome from "./welcome";

const config = {
  key: "root",
  storage,
  blacklist: ["NetInfo", "CardItem", "EventCard", "NavData"]
};

const createReducer = () => {
  return persistCombineReducers(config, {
    NetInfo: NetInfo,
    user: UserInfo,
    CardItem: CardItem,
    EventCard: EventCard,
    NavData: NavData,
    Welcome: Welcome
  });
};

export default createReducer;
