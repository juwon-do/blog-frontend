import { useState } from 'react'
import axios from "axios"
import reactLogo from './assets/react.svg'
import './App.css'

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <h2>Title: Pizza</h2>
      <p>Pizza is from Italy</p>
    </div>
  );
}

function PostIndex(props) {
  console.log(props['posts'][1]);

  return (
    <div id="posts-index">
      <h1>All posts</h1> 
      {props['posts'].map(post =>(
        <div className="posts" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
        </div>
      ))}
    </div>
  );
}

function Content() {
  const [posts, setPosts] = useState([]);
  
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);      
      setPosts(response.data);
    })
  }

  return (
    <div>
      <PostNew />
      <button onClick={handleIndexPosts}>Get the data</button>
      <PostIndex posts={posts}/>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;


