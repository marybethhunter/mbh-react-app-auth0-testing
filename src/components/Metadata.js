import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getConfig } from "../config";

const config = getConfig();

const providerConfig = {
    domain: config.domain
};

const Metadata = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [userMetadata, setUserMetadata] = useState(null);

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

                setUserMetadata(user_metadata);
            } catch (e) {
                console.log(e.message);
            }
        };

        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub]);

    return (
        <>
            <p style={{ fontSize: '13px', width: '500px' }}>User metadata will appear below if exists. This is a call to the Auth0 Management API in a useEffect() in the Metadata.js component..</p>
            <div style={{ border: '1px solid white', padding: '12px' }}>
                {
                    isAuthenticated && userMetadata ? (
                        <div>
                            {JSON.stringify(userMetadata, null, 2)}
                        </div >
                    ) : (
                        <p style={{ fontSize: '13px' }}>No user metadata defined</p>
                    )
                }
            </div>
        </>
    )
};

export default Metadata;