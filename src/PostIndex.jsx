export function PostIndex(props) {
  console.log(props['posts'][1]);

  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props['posts'].map(post => (
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p><button onClick={()=>props.onSelectPost(post)}>More Info</button></p>
        </div>
      ))}
    </div>
  );
}
