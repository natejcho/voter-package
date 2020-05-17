import cookie from "cookie";
import admin from "firebase-admin";
import fetch from "isomorphic-unfetch";

//let's only do this once!
if (!admin.apps.length) {
  const atob = require("atob");
  const serviceAccount =
    process.env.NODE_ENV === "development"
      ? require("firebase-secret.json")
      : JSON.parse(atob(process.env.FIREBASE_SECRET));
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const db = admin.firestore();

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

// TODO: memoize
/**
 * Obtains URI based on deployment of application
 *  SSR requests need absolute path, so when making calls to local api grab deployed uri
 *
 *
 * @param {Object} context Data fetching context parameter
 *    passed through from NextJs data fetching method
 */
export function get_URI(context) {
  const {
    req: {
      headers: {
        "x-forwarded-host": host = "",
        "x-forwarded-proto": proto = "",
      } = {},
    } = {},
  } = context;
  return proto && host ? `${proto}://${host}` : "http://localhost:3000";
}

/**
 *  handles http request and json parsing
 */
export async function http(
  request: RequestInfo,
  options?: object
): Promise<any> {
  const response = await fetch(request, options);
  const body = await response.json();
  return body;
}
