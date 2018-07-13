import { combineReducers } from "redux";

import students from "./reducers";

export default combineReducers({
  ...students
});