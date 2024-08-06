import { useState } from 'react';
import axios from 'axios';


export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8080/signup',
      { username: username, password: password }
    ).then((data) => {
      console.log(data)
      setUsername('')
      setPassword('')
    })
  }

  return (
    <div>
      <form className='mx-auto border-2 p-9 md:p-12 w-72 md:w-96 border-cyan-400 mt-36 h-84' onSubmit={submitHandler}>
        <h3 className='pb-6 text-2xl text-center text-white'>SignUp</h3>

        <label className='block mb-1 text-xl text-cyan-400' htmlFor='username'>Username</label>
        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />

        <label className='block mb-1 text-xl text-cyan-400' htmlFor='password'>Password</label>
        <input className='w-full h-8 p-1 mb-6 focus:outline-none' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className='flex justify-between'>
          <button className='px-3 py-1 rounded-sm bg-cyan-400' type='button'>Cancel</button>
          <button className='px-3 py-1 rounded-sm bg-cyan-400' type='submit'>Submit</button>
        </div>
      </form>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <button onClick={apiCall}>Make API Call</button>
    //   </header>
    // </div>
  );
}