export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <label for="title">Title: <input type="text" id="post" /></label>
      <br />
      <label for="body">Body: <input type="text" id="postBody" /></label>
      <br />
      <label for="image">Image: <input type="text" id="postImage" /></label>
    </div>
  );
}
