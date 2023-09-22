import React from "react";
import "./index.css";
import { useAuth0 } from "@auth0/auth0-react";
import Metadata from "./components/Metadata";
import Nav from "./components/Nav";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(user);

  return (
    <>
      <Nav />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
          <p>User is Authenticated:</p>
          {isAuthenticated ? <p>True</p> : <p>False</p>}
        </div>
        {isAuthenticated && (
          <div>
            <h3>User Profile Info:</h3>
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
            <Metadata />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
