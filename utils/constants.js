export const INTRODUCED_BILLS_URL =
  "https://api.propublica.org/congress/v1/115/house/bills/introduced.json";
export const get_SPECIFIC_BILL = (congress, billId) =>
  `https://api.propublica.org/congress/v1/${congress}/bills/${billId}.json`;
