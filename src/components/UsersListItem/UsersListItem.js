import React from "react";

export const UsersListItem = (props) => {
  const { user } = props;
  return (
    <div className="users-list-item__container">
      <img width={100} src={user.img} alt="avatar" />
      <div>
        <p>{user.name}</p>
        <p>{user.address.country}</p>
      </div>
    </div>
  );
};
