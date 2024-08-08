import { useState } from "react";

const Home = () => {
  const [post, setPost] = useState('')
  const [posts, setPosts] = useState([
    {
      id: 1,
      post: 'asdfasdf',
      username: 'testuser1'
    },
    {
      id: 2,
      post: 'asdfasdsfdsdff',
      username: 'testuser2'
    },
    {
      id: 3,
      post: 'asdfaasfasdfasfasdfsdf',
      username: 'testuser3'
    }
  ])
  const submitHandler = e => {
    e.preventDefault();
  }

  return (
    <div className="mx-auto mb-16 border border-cyan-400 w-72 md:w-96 p-9 md:p-12">
      <form onSubmit={submitHandler}>
        <textarea
          className="w-full p-4 rounded outline-none h-28"
          value={post}
          onChange={(e) => setPost(e.target.value)}
          placeholder='Write a post about music'
        />

        <button type='submit' className="w-full h-8 my-2 rounded bg-cyan-400 ">
          Post
        </button>
      </form>

      <hr className="w-2/3 mx-auto my-4 border border-white" />

      {
        posts.length > 0 && posts.map((post) => {
          return (
            <div className="w-full mt-8 border rounded border-cyan-400">
              <div className="w-full h-8 px-3 bg-cyan-400">
                <p className="leading-8">
                  {post.username}
                </p>
              </div>
              <p className="px-3 my-3 text-white">
                {post.post}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home;