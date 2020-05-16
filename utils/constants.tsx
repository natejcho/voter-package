export const INTRODUCED_BILLS_URL =
  "https://api.propublica.org/congress/v1/115/house/bills/introduced.json";
export const get_SPECIFIC_BILL = (congress, billId) =>
  `https://api.propublica.org/congress/v1/${congress}/bills/${billId}.json`;
export const ELECTION_QUERY_API =
  "https://www.googleapis.com/civicinfo/v2/elections?key=AIzaSyBi5Zh_0yWZX_pgidJLcdglJsRUAdPQJzc";
export const FORWARD_GEOCODING_API =
  "https://us1.locationiq.com/v1/search.php?key=pk.2d900000100f92993ea25805616c3885&q=4142%2024t%20st%20long%20island%20city,%20NY%2011101&format=json";
// export const FORWARD_GEOCODING_API = 'https://us1.locationiq.com/v1/search.php?key=12f032eea614e6&q=4142%2024th%20st%20long%20island%20city&format=json';
// export const FORWARD_GEOCODING_API = new URL('https://us1.locationiq.com/v1/search.php');
// const params = { key: 'pk.2d900000100f92993ea25805616c3885', q: '4142 24t st long island city, NY 11101', format: 'json' };
// FORWARD_GEOCODING_API.search = new URLSearchParams(params).toString();
export const UPVOTE_ENDPOINT = "/api/upvote";

export enum VOTE_TYPE {
  LEFT = "LEFT",
  UPVOTE = "UPVOTE",
  RIGHT = "RIGHT",
}
