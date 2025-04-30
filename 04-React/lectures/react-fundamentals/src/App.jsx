import Counter from './components/Counter';
import Card from './components/Card';
import { useState, useEffect } from 'react';

function App() {
  // const name = "John Doe";
  // const age = 30;
  // const isLoggedIn = false;
  // const randomNumber = Math.floor(Math.random() * 100) + 1;

  // states first
  const [person, setPerson] = useState({
    name: 'John Doe',
    age: 30,
    isLoggedIn: false,
  });
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({}); // Random user
  const [id, setId] = useState(1);

  // useEffects second
  useEffect(() => {
    console.log('I am running every time');
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchUser = async (id) => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}` // Random user
        );
        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser(counter);
  }, [counter]);

  console.log(counter);
  console.log(user);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl'>Hello {person.name}</h1>
      <h2>You are {person.age} years old.</h2>
      <h3>{person.isLoggedIn ? 'Welcome back!' : 'Please log in.'}</h3>
      <Counter setCounter={setCounter} counter={counter} />
      <Counter counter={counter2} setCounter={setCounter2} />
      <Counter counter={counter3} setCounter={setCounter3} />

      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
