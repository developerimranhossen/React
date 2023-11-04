import { useLoaderData } from "react-router-dom";

function FriendDetail() {
  const detail = useLoaderData();
  // console.log(user);
  return <div>
    <h4>Name: {detail.name}</h4>
    <p>Phone: {detail.phone}</p>
  </div>;
}

export default FriendDetail;
