import { connect } from "react-redux";
import Skill from "../components/Skill";

const mapStateToProps = (state, ownProps) => {
  return { skills: state.resume.skills };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {},
  };
};

const SkillContainer = connect(mapStateToProps, mapDispatchToProps)(Skill);
export default SkillContainer;
