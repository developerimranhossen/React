import { useLoaderData, useNavigate } from "react-router-dom";

function FriendDetail() {
  const detail = useLoaderData();
  // console.log(user);

  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div>
      <h4>Name: {detail.name}</h4>
      <p>Phone: {detail.phone}</p>
      <button onClick={goBackHandler}>Go Back</button>
    </div>
  );
}

export default FriendDetail;
