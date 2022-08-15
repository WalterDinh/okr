import UserModel from "models/user.model";
import React from "react";

const propTypes = {};

const User: React.FC<Pick<UserModel, "name" | "avatar" | "role">> = (props) => {
  //! State

  //! Function

  //! Render
  return (
    <div className="user wow fadeIn">
      <div className="user__image">
        <img alt="avatar-user" src={props.avatar} />
      </div>

      <p className="user__name">{props.name}</p>
      <p className="user__role">{props.role}</p>
    </div>
  );
};

User.propTypes = propTypes;
export default User;
