export function getConfig() {
  return {
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: process.env.REACT_APP_AUTH0_CLIENTID,
    audience: process.env.REACT_APP_AUTH0_AUDIENCE,
    scope: process.env.REACT_APP_SCOPE,
    callbackURL: process.env.REACT_APP_CALLBACK_URL,
  };
}
