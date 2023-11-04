import { useLoaderData } from "react-router-dom";
import Friend from "./Friend";

function Friends() {
  const friends = useLoaderData();
  return (
    <>
      <div>Friends: {friends.length}</div>
      <div className="">
        {friends.map(friend => <Friend key={friend.id} friend={friend}/>)}
      </div>
    </>
  );
}

export default Friends;
