import "./Friend.css";
import { Link, useNavigate } from "react-router-dom";

function Friend({ friend }) {
  // console.log(friend);
  const { email, name, id, phone } = friend;

  const navigate = useNavigate();

  const btnHandler = () => {
    navigate(`/friend/${id}`);
  };

  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>email: {email}</p>
      <p>phone: {phone}</p>

      {/* dynamic link  */}
      <Link to={`/friend/${id}`}>Show Details using Link</Link>
      {/* dynamic link using useNavigate() hook  */}
      <button onClick={btnHandler}>Show Deatails using Button Handler</button>
    </div>
  );
}

export default Friend;
