import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get('/api/jokes')
      .then((response) => {
        setJokes(response.data.jokes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>FE</h1>
      <p>JOKES : {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.joke}</h3>
          <p>{joke.punchline}</p>
        </div>
      ))}
    </>
  );
}

export default App;
