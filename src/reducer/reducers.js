import * as actionType from "../actions/types";

export const getStudents = (state = [], action) => {
  switch (action.type) {
    case actionType.GET_STUDENTS:
      return action.data;
    default:
      return state;
  }
}
export default {
  getStudents
}