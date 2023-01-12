export function Header() {
  return (
    <header>
      {/* <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> */}
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#posts-index">All posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#posts-new">New Post</a>
        </li>
      </ul>
    </header>
  );
}
