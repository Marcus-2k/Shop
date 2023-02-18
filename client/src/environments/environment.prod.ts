const PROTOCOL: "http" | "https" = "http";

const HOST = "localhost";
const PORT = ":5000";

export const environment = {
  production: true,

  URL_SERVER_API: `${PROTOCOL}://${HOST}${PORT}/api`,
  URL_SERVER_FOLDER: `${PROTOCOL}://${HOST}${PORT}/`,

  PROTOCOL: PROTOCOL,

  HOST: HOST,
  PORT: PORT,

  API_KEY_NOVA_POSHTA: "daa6b3bebb0efaba456840c60cef8380",
};
