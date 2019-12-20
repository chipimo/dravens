import { NAVTO, NAVREST } from "./types";

const NavData = (
  state = {
    routeName: "home",
  },
  action
) => {
  switch (action.type) {
    case NAVTO:
      console.log(action)
      state = {
        ...state,
        routeName: action.routeName,
      };
      break;
    case NAVREST:
      state = {
        ...state,
        routeName: "home",
      };
      break;
    default:
      break;
  }

  return state;
};

export default NavData;
