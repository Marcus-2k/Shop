// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const PROTOCOL: "http" | "https" = "http";

const HOST = "185.233.37.61";
const PORT = ":5000";

const HISTORY_SEARCH_START: string | undefined = "appel,asus";
const HISTORY_VIEW_START: string | undefined =
  "63ecdd411f5f608c96b20a21,63e2a3bc6f803f45040278ad,63ece04e1f5f608c96b20a2f,63ecde7f1f5f608c96b20a24";

export const environment = {
  production: false,

  URL_SERVER_API: `${PROTOCOL}://${HOST}${PORT}/api/`,
  URL_SERVER_FOLDER: `${PROTOCOL}://${HOST}${PORT}/`,

  PROTOCOL: PROTOCOL,

  HOST: HOST,
  PORT: PORT,

  API_KEY_NOVA_POSHTA: "",

  HISTORY_SEARCH_START: HISTORY_SEARCH_START,
  HISTORY_VIEW_START: HISTORY_VIEW_START,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
