export function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

/**
 * noop - saves memory by creating one instance of empty callback
 */
export const noop = () => {};

// TODO: no upvote functionality till new db migration
export function useUpvote(type, id, commentType = "moderate") {
  // return async () =>
  //   await fetch(
  //     `/api/upvote?${type}_id=${id}${
  //       type === "comment" ? `&comment_type=${commentType}` : ""
  //     }`
  //   );
}
