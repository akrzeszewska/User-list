import React from "react";
import { UsersListItem } from "../UsersListItem/UsersListItem";

export const UsersList = (props) => {
  const { users } = props;
  return (
    <div className="users-list__container">
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </div>
  );
};
