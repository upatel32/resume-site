import { combineReducers } from "redux";
import {
  REQUEST_RESUME,
  RECEIVE_RESUME,
  RECEIVE_PROJECTS,
  REQUEST_PROJECTS,
} from "./actions";

function projects(state = {}, action) {
  switch (action.type) {
    default:
    case RECEIVE_PROJECTS:
      return Object.assign({}, action.projects);
  }
}

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
  projects,
  resume,
  isLoading,
});

export default resumeApp;
