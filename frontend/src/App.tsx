import { useState } from 'react';
import './App.css';
import UserSelector from 'src/common-components/UserSelector';
import CoachPage from 'src/pages/Coach';
import StudentPage from 'src/pages/Student';
import { UserContext } from 'src/utils/UserContext';
import { User } from 'src/utils/Types';


function App() {
  const path = window.location.pathname;
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  return (
    <div className="App">
      <UserContext.Provider value={currentUser}>
        <UserSelector userType={path} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <header className="App-header">
          {path === '/coach'
            ? <CoachPage />
            : path === '/student'
              ? <StudentPage />
              : "Whoops, wrong url!"
          }
        </header>
      </UserContext.Provider>
    </div>
  );
}

export default App;
