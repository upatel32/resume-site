import { combineReducers } from "redux";
import { REQUEST_RESUME, RECEIVE_RESUME } from "./actions";

function resume(state = {}, action) {
  switch (action.type) {
    default:
    case RECEIVE_RESUME:
      return Object.assign({}, action.resume);
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    default:
    case RECEIVE_RESUME:
      return false;
    case REQUEST_RESUME:
      return true;
  }
}

const resumeApp = combineReducers({
  resume,
  isLoading,
});

export default resumeApp;
