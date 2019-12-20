import { NAVTO, NAVREST } from "./types";

const NavData = (
  state = {
    routeName: "sidebar",
    naviget: null,
    isModal: false
  },
  action
) => {
  switch (action.type) {
    case NAVTO:
      state = {
        ...state,
        routeName: action.routeName,
        naviget: action.payload.naviget,
        isModal: action.payload.isModal
      };
      break;
    case NAVREST:
      state = {
        ...state,
        routeName: "sidebar",
        naviget: null,
        isModal: false
      };
      break;
    default:
      break;
  }

  return state;
};

export default NavData;
