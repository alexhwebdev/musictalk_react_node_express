import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const FindFriends = () => {
  const user = useSelector((state) => state.auth.user);
  // console.log('FindFriends username ', username)

  // const usernames = ['addictedtomusic','MusicLover','Jazz','Beethoven']
  const [users, setUsers] = useState([])
  const [added, setAdded] = useState([])
  const [error, setError] = useState(null)
  useEffect(() => {
    axios.get(
      'http://localhost:8080/find-friends',
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

  const addFriend = (username, i) => {
    axios.post(
      `http://localhost:8080/${user}/add-friend`,
      { username }
    )
      .then(res => {
        setError(null)
        if (res.data.added) {
          setAdded([...added, i])
        }
      })
      .catch(err => setError(`Couldn't add friend`))
  }

  return (
    <div className='mx-auto border p-9 md:p-12 w-72 md:w-96 border-cyan-400 h-84'>
      <h1 className="inline text-xl font-medium text-cyan-400">
        Find Friends
      </h1>
      <Link to='/friends' className="float-right leading-7 text-lime-400">
        Your Friends
      </Link>
      <hr className="mb-3" />
      <ul>
        {users.map((username, i) => {
          if (added.includes(i)) {
            return <li key={i} className="text-lime-400">Added!</li>
          } else {
            return (
              <li
                className="text-lg text-white w-fit hover:cursor-pointer"
                key={i}
                onClick={() => addFriend(username, i)}
              >{username}</li>
            )
          }
        })}
        {error ? <p className='pt-10 text-center text-red-600'>{error}</p> : null}
      </ul>
    </div>
  )
}

export default FindFriends;