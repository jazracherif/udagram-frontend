// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// var apiHost = "http://localhost:8080/api/v0"

// const API_HOST = process.env.API_HOST
// if (API_HOST) {
//     apiHost = API_HOST+"/api/v0"
// }
const apiHost = "http://a55dc60dae1b54698b6942a6ef3c434c-464784487.us-east-1.elb.amazonaws.com:8080/api/v0"

export const environment = {
  production: false,
  appName: 'Udagram',
  apiHost: apiHost
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
