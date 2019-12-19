import { EVENTITEM, OFFLOADITEMS } from "./types";

const EventCard = (
  state = {
    data: {
      img: "",
      title: "",
      author: "",
      summary: "",
      date: "",
      time: ""
    },

    isLoaded: false
  },
  action
) => {
  switch (action.type) {
    case EVENTITEM:
      state = {
        ...state,
        data: action.payload,
        isLoaded: true
      };
      break;
    case OFFLOADITEMS:
      state = {
        ...state,
        data: {
          img: "",
          title: "",
          author: "",
          summary: "",
          date: "",
          time: ""
        },
        isLoaded: false
      };
      break;
    default:
      return state;
  }

  return state;
};

export default EventCard;
