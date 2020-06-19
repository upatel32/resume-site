import { combineReducers } from "redux";
import {
  RECEIVE_RESUME,
  RECEIVE_PROJECTS,
  RECEIVE_ALL,
  REQUEST_ALL,
} from "./actions";

function projects(state = {}, action) {
  switch (action.type) {
    default:
      return state;
    case RECEIVE_PROJECTS:
      return Object.assign({}, action.projects);
  }
}

function resume(state = {}, action) {
  switch (action.type) {
    default:
      return state;
    case RECEIVE_RESUME:
      return Object.assign({}, action.resume);
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    default:
      return state;
    case RECEIVE_ALL:
      return false;
    case REQUEST_ALL:
      return true;
  }
}

const resumeApp = combineReducers({
  projects,
  resume,
  isLoading,
});

export default resumeApp;
