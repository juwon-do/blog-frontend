export function PostNew() {
  return (
    <div id="posts-new">
     
      <form >
        <div>
          Title: <input type="text" name="title"  />
        </div>
        <div>
          Img Url: <input type="text" name="img"  />
        </div>
        <div>
          Body: <input type="text"  name="body"  />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}
