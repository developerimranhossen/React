import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="">please login</div>;
  return <div className="">Welcome {user.username}</div>;
}

export default Profile;
