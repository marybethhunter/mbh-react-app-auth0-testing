import React from "react";
import logo from './logo.svg';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import Metadata from "./components/Metadata";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  };

  console.log(user);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MB's Custom React App :)
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 8, marginBottom: 20 }}>
          <LoginButton />
          <LogoutButton />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', gap: 4 }}>
          <p>User is Authenticated:</p>
          {isAuthenticated ? (<p>True</p>) : (<p>False</p>)}
        </div>
        {isAuthenticated && (
          <div>
            <h3>User Profile Info:</h3>
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
            <Metadata />
          </div>
        )}
      </header >
    </div >
  );
}

export default App;
