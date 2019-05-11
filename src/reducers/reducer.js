import { ADD_DATA } from "../action/AddModel";
export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
};
