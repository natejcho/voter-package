export function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

// TODO: no upvote functionality till new db migration
export function useUpvote(type, id, commentType = "moderate") {
  // return async () =>
  //   await fetch(
  //     `/api/upvote?${type}_id=${id}${
  //       type === "comment" ? `&comment_type=${commentType}` : ""
  //     }`
  //   );
}
