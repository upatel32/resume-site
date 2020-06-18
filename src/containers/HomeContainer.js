import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state, ownProps) => {
  return { basics: state.resume.basics };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {},
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;
