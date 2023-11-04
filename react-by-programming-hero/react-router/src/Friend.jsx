import './Friend.css'
import { Link } from 'react-router-dom'

function Friend({friend}) {
    // console.log(friend);
    const {email, name, id, phone} = friend
  return (
    <div className="friend">
        <h3>{name}</h3>
        <p>email: {email}</p>
        <p>phone: {phone}</p>
        <Link to={`/friend/${id}`}>Details</Link>
    </div>
  )
}

export default Friend