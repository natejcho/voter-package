export function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

export function useUpvote(type, id) {
  return async () => await fetch(`/api/upvote?${type}_id=${id}`);
}
