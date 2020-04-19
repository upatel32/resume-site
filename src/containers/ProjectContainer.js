import { connect } from "react-redux";
import {} from "../actions";
import Project from "../components/Project";

const mapStateToProps = (state, ownProps) => {
  console.log("Project container");
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);

export default ProjectContainer;
