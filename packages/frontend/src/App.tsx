import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { User } from '@fantastic/shared';
// import {User} from '@fantastic/shared'

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/user')
      .then((res) => res.json())
      .then((data) => setUser(data as User))
      .catch(console.log);
  });

  return (
    <div className="App">
      {user && `Hi ${user.firstName} ${user.lastName}`}
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo w-48 h-48" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react w-48 h-48" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>count is {count}</button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
