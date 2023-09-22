import React from "react";
import "../index.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Metadata from "../components/Metadata";
import { useNavigate } from "react-router";

function ProfilePage() {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <h1>User is Authenticated: </h1>
        {isAuthenticated ? <h1>True</h1> : <h1>False</h1>}
      </div>
      {isAuthenticated && (
        <>
          <div
            style={{
              border: "1px solid white",
              width: "500px",
              backgroundColor: "#00A36C",
            }}
          >
            <h4>User Profile Info:</h4>
            <p>User Name: {user.name}</p>
            <p>User Email: {user.email}</p>
          </div>
          <Metadata />
          <p style={{ fontSize: "11px", width: "500px" }}>
            This button takes you back to the "/" route.
          </p>
          <button onClick={goBackToHomePage}>Go Back Home</button>
        </>
      )}
    </div>
  );
}

export default withAuthenticationRequired(ProfilePage, {
  // Show a message while the user waits to be redirected to the login page.
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
