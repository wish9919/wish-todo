import React from "react";

//router
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { signOut } from "../../store/actions/AuthActions";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New TODO</NavLink>
      </li>

      <li>
        <NavLink to="/" className="btn  btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
      <li>
        <span className="btn" onClick={props.signOut}>
          Logout
        </span>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
