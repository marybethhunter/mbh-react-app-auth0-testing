import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getConfig } from "../config";

const config = getConfig();

const providerConfig = {
  domain: config.domain,
};

const Metadata = () => {
  const { user, isAuthenticated, getAccessTokenSilently, getIdTokenClaims } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [userAccessToken, setUserAccessToken] = useState(null);
  const [userIdToken, setUserIdToken] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = providerConfig.domain;

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: "read:current_user",
          },
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();


        const claims = await getIdTokenClaims();
        const id_token = claims.__raw;

        setUserMetadata(user_metadata);
        setUserAccessToken(accessToken);
        setUserIdToken(id_token);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ fontSize: "11px", width: "500px" }}>
        User metadata will appear below if exists. This is a call to the Auth0
        Management API in a useEffect() in the Metadata.js component using
        getAccessTokenSilently().
      </p>
      <div
        style={{
          border: "1px solid white",
          padding: "12px",
          backgroundColor: "#00A36C",
        }}
      >
        {isAuthenticated && userMetadata ? (
          <div>User Metadata: {JSON.stringify(userMetadata, null, 2)}</div>
        ) : (
          <p style={{ fontSize: "13px" }}>No user metadata defined</p>
        )}
      </div>
      <div style={{ width: "550px", overflowX: "scroll" }}>
        <div
          style={{
            border: "1px solid white",
            padding: "12px",
            marginTop: 22,
            width: "fit-content",
            backgroundColor: "#00A36C",
          }}
        >
          {userAccessToken ? (
            <pre style={{ fontSize: "13px" }}>
              Access Token: <code>{userAccessToken}</code>
            </pre>
          ) : (
            <p style={{ fontSize: "13px" }}>No user access token defined</p>
          )}
        </div>
      </div>
      <div style={{ width: "550px", overflowX: "scroll" }}>
        <div
          style={{
            border: "1px solid white",
            padding: "12px",
            marginTop: 22,
            width: "fit-content",
            backgroundColor: "#00A36C",
          }}
        >
          {userIdToken ? (
            <pre style={{ fontSize: "13px" }}>
              ID Token: <code>{userIdToken}</code>
            </pre>
          ) : (
            <p style={{ fontSize: "13px" }}>No user ID token defined</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Metadata;
