import React from "react";
import "../index.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";

function CallbackPage() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const goToProfileRoute = () => {
    navigate("/profile");
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
      {isAuthenticated ? (
        <h2>Thanks for logging in!</h2>
      ) : (
        <h2>Please Log In!</h2>
      )}
      <p style={{ fontSize: "11px", width: "500px" }}>
        This button takes you to the "/profile" route. If you are authenticated,
        you will be redirected to your profile page. This route is protected by
        the withAuthenticationRequried(). If you are not authenticated, you will
        be redirected to the login page.
      </p>
      <button onClick={goToProfileRoute}>Go to Profile Page</button>
    </div>
  );
}

export default CallbackPage;
