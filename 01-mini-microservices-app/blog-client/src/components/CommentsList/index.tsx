import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';

interface Props {
  postId: string;
}
interface Comment {
  content: string;
  id: string;
}

export default function CommentsList({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  async function fetchComments() {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`,
    );

    setComments(res.data);
  }

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <ul>
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
      })}
    </ul>
  );
}
