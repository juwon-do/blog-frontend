export function Header() {
  return (
    <header>
      {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#posts-index">All posts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#posts-new">New Post</a>
        </li>
      </ul>
    </header>
  );
}
