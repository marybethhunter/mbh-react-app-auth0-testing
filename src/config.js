import configJson from "./auth_config.json";

export function getConfig() {
  return {
    domain: configJson.domain || process.env.REACT_APP_AUTH0_DOMAIN,
    clientId: configJson.clientId || process.env.CLIENTID,
    audience: configJson.audience || process.env.AUDIENCE,
    scope: configJson.scope || process.env.SCOPE,
    callbackURL: configJson.callbackURL || process.env._URL,
  };
}
