import { useEffect, useState } from 'react';
import './App.css';
import UserSelector from 'src/common-components/UserSelector';


function App() {
  const path = window.location.pathname;
  // const [errors, setErrors] = useState('');



  return (
    <div className="App">
        <UserSelector />
      <header className="App-header">
        {/* {path === '/coach'
          ? <CoachPage />
          : path === '/student'
            ? <StudentPage />
            : "Whoops, wrong url!"
        }
        <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
