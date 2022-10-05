import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentsList from '../CommentsList';
import CreateComment from '../CreateComment';

import './styles.css';

interface Post {
  id: string;
  title: string;
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts() {
    const res = await axios.get('http://localhost:4000/posts');
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id} className="card">
            <div className="card-body">
              <h3>{post.title}</h3>
              <CommentsList postId={post.id} />
              <CreateComment postId={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
