const PROTOCOL: "http" | "https" = "http";

const HOST = "31.42.188.29";
const PORT = ":5000";

const HISTORY_SEARCH_START: string | undefined = "appel,asus";
const HISTORY_VIEW_START: string | undefined =
  "63ecd8fd1f5f608c96b209ec,63ece04e1f5f608c96b20a2f,63ecdd411f5f608c96b20a21,63e2a1266f803f4504027893";

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
