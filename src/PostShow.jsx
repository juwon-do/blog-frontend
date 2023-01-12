export function PostShow(props) {
  console.log(props['postBody']);
  return (
    <div>
      <h3>{props.postBody.title}</h3>
      <p>{props.postBody.body}</p>
    </div>
  );
}