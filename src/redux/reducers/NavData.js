import { NAVTO, NAVREST } from "./types";

const NavData = (
  state = {
    routeName: "home",
    naviget: null
  },
  action
) => {
  switch (action.type) {
    case NAVTO:
      state = {
        ...state,
        routeName: action.routeName,
        naviget: action.payload.naviget
      };
      break;
    case NAVREST:
      state = {
        ...state,
        routeName: "",
        naviget: null
      };
      break;
    default:
      break;
  }

  return state;
};

export default NavData;
