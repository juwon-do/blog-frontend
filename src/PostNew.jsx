export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <label htmlFor="title">Title: <input type="text" id="post" /></label>
      <br />
      <label htmlFor="body">Body: <input type="text" id="postBody" /></label>
      <br />
      <label htmlFor="image">Image: <input type="text" id="postImage" /></label>
    </div>
  );
}
