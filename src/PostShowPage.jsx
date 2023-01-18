import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export function PostShowPage () {
  const [post, setPost] = useState({});
  const params = useParams();
  const getPost = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then(response => {
      console.log(response.data);
      setPost(response.data);
    });
  };

  useEffect(getPost, []);
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <p>{post.image}</p>
    </div>
  );
}