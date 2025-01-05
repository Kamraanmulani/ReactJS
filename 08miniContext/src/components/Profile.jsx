import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div>Not Logged in</div>;
  }
  return <div>Welcome {user.username}</div>;
}

export default Profile;
