import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <a href="/">Home</a> | <Link to="/about">About</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/login">Log In</Link> |<Link to="/posts/new">New Post</Link> | 
      
    </header>
  );
}
