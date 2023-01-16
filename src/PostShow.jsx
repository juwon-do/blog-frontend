export function PostShow(props) {
  console.log(props['postBody']);
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(params, props.post.id);
  };
  const handleDelete = () => {
    console.log('delete button');
    props.onDeletePost(props.post);
  };
  return (
    <div>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
      <p>{props.post.id}</p>

      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" defaultValue={props.post.title} />
        </div>
        <div>
          Img Url: <input type="text" name="img" defaultValue={props.post.image} />
        </div>
        <div>
          Body: <input type="text"  name="body" defaultValue={props.post.body} />
        </div>
        <button type="submit">Update Post</button>
      </form>
      <button onClick = {handleDelete}>Delete Post</button>
    </div>

  );
}