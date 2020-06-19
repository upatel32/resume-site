import { connect } from "react-redux";
import {} from "../actions";
import Project from "../components/Project";

const mapStateToProps = (state, ownProps) => {
  return { projects: state.projects };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);
export default ProjectContainer;
