const PROTOCOL: "http" | "https" = "http";

const HOST = "185.233.37.61";
const PORT = ":5000";

const HISTORY_SEARCH_START: string | undefined = "appel,asus";
const HISTORY_VIEW_START: string | undefined =
  "63ecdd411f5f608c96b20a21,63e2a3bc6f803f45040278ad,63ece04e1f5f608c96b20a2f,63ecde7f1f5f608c96b20a24";

export const environment = {
  production: true,

  URL_SERVER_API: `${PROTOCOL}://${HOST}${PORT}/api/`,
  URL_SERVER_FOLDER: `${PROTOCOL}://${HOST}${PORT}/`,

  PROTOCOL: PROTOCOL,

  HOST: HOST,
  PORT: PORT,

  API_KEY_NOVA_POSHTA: "",

  HISTORY_SEARCH_START: HISTORY_SEARCH_START,
  HISTORY_VIEW_START: HISTORY_VIEW_START,
};
