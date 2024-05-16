import { useEffect, useState } from 'react';
import './App.css';
import UserSelector from 'src/common-components/UserSelector';
import CoachPage from 'src/pages/Coach';
import StudentPage from 'src/pages/Student';
import { UserContext } from 'src/utils/UserContext';
import { User } from 'src/Types';


function App() {
  const path = window.location.pathname;
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <UserSelector currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <header className="App-header">
          {path === '/coach'
            ? <CoachPage />
            : path === '/student'
              ? <StudentPage />
              : "Whoops, wrong url!"
          }
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
