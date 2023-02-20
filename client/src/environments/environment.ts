// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const PROTOCOL: "http" | "https" = "http";

const HOST: string = "localhost";
const PORT: string = ":5000";

const HISTORY_SEARCH_START: string | undefined = undefined;
const HISTORY_VIEW_START: string | undefined = undefined;

export const environment = {
  production: false,

  URL_SERVER_API: `${PROTOCOL}://${HOST}${PORT}/api`,
  URL_SERVER_FOLDER: `${PROTOCOL}://${HOST}${PORT}/`,

  PROTOCOL: PROTOCOL,

  HOST: HOST,
  PORT: PORT,

  API_KEY_NOVA_POSHTA: "daa6b3bebb0efaba456840c60cef8380",

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
