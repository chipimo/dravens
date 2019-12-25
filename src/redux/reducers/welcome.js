import { WELCOME } from "./types";

const Welcome = (
  state = {
    isLoaded: true
  },
  action
) => {
  switch (action.type) {
    case WELCOME:
      state = {
        ...state,
        isLoaded: false
      };
      break;

    default:
      break;
  }

  return state;
};

export default Welcome;
