import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRoutes = (props) => {
  if (props.auth.uid) {
    return <Redirect to="/" />;
  } else {
    return <Route path={props.path} component={props.component} />;
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(AuthRoutes);
