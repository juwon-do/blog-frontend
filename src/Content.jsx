import { useState, useEffect } from 'react';
import axios from "axios";
import { PostNew } from './PostNew';
import { PostIndex } from './PostIndex';
import { PostShow } from './PostShow';
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login"; 
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const [currentPost, setCurrentPost] = useState({});
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleShowPost = (post) => {
    console.log(post);
    setCurrentPost(post);

    setIsPostsShowVisible(true);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleUpdatePost = (params, postId) => {
    console.log(postId);
    axios.patch(`http://localhost:3000/posts/${postId}.json`, params).then(response => {
      console.log(response.data);
      // window.location.href = '/';
    });
  };

  const handleDeletePost = (post) => {
    console.log(post.id);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then (response => {
      console.log('deleted');
    });
    setPosts(post.filter(p => p.id !== post.id));
    handleHidePost();
  };
  
  return (
    <div>
      <hr />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup /> } />
        <Route path="/login" element={<Login /> } />
        <Route path="/posts/new" element={<PostNew /> } />
        <Route path="/" element={<PostIndex posts={posts} onSelectPost={handleShowPost}/> } />
        <Route path="/posts" element={<PostIndex posts={posts} onSelectPost={handleShowPost}/> } />
        
      </Routes>

      <LogoutLink />

      {/* <button onClick={handleIndexPosts}>Get the data</button> */}
      

      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostShow onDeletePost ={handleDeletePost} onUpdatePost={handleUpdatePost} post = {currentPost}/>
      </Modal>
    </div>
  );
}
