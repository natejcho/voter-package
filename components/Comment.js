// import fetch from "isomorphic-unfetch";
import useSWR from "swr";

function fetcher(url) {
  return fetch(url).then((r) => r.json());
}

function Comment(props) {
  let { data, error } = useSWR(
    "/api/comments?post_id=" + props.postId,
    fetcher
  );
  console.error(error);
  data = data || "";
  const [comment, setComment] = React.useState(data.value);

  const updateComment = () => {
    fetch("/api/updateComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentId: props.postId,
        value: comment,
      }),
    });
  };

  return (
    <>
      <span>Comments</span>
      <input onChange={(e) => setComment(e.target.value)} value={comment} />
      <button onClick={updateComment}>Update</button>
    </>
  );
}

export default Comment;
