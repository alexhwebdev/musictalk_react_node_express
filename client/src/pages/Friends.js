import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const Friends = () => {
  const user = useSelector((state) => state.auth.user);
  // console.log('FindFriends username ', username)

  // const usernames = ['addictedtomusic','MusicLover','Jazz','Beethoven']
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    axios.get(
      'http://localhost:8080/your-friends',
      { params: { user } }
    )
      .then(res => {
        let usernames = []
        // console.log(res.data)
        res.data.forEach(user => {
          usernames.push(user.username)
        })
        setUsers(usernames)
        setError(null)
      })
      .catch(err => setError(`Couldn't fetch users`))
  }, [user]);

  return (
    <div className='mx-auto border p-9 md:p-12 w-72 md:w-96 border-cyan-400 h-84'>
      <h1 className="inline text-xl font-medium text-cyan-400">
        Find Friends
      </h1>
      <Link to='/find-friends' className="float-right leading-7 text-lime-400">
        Find Friends
      </Link>
      <hr className="mb-3" />
      <ul>
        {users.map((username, i) => {
          return (
            <li
              className="text-lg text-white w-fit hover:cursor-pointer"
              key={i}
            >{username}</li>
          )
        })}
        {error ? <p className='pt-10 text-center text-red-600'>{error}</p> : null}
      </ul>
    </div>
  )
}

export default Friends;