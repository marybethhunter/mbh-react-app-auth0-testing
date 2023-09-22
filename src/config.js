import configJson from "./auth_config.json";

export function getConfig() {
  return {
    domain: configJson.domain,
    clientId: configJson.clientId,
    audience: configJson.audience,
    scope: configJson.scope,
    callbackURL: configJson.callbackURL,
  };
}
