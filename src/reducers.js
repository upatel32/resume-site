import { combineReducers } from "redux";
import { TEST_ACTION } from "./actions";

function information(state = {}, action) {
  switch (action.type) {
    default:
    case TEST_ACTION:
      return Object.assign({}, { text: action.randomInput });
  }
}

const resumeApp = combineReducers({
  information,
});

export default resumeApp;
