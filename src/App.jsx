import { useState } from 'react'
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

function PostIndex() {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
    </div>
  );
}

function Content() {
  return (
    <div>
      <PostNew />
      <PostIndex />
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


