import axios from 'axios';
import { FormEvent, useState } from 'react';
import './styles.css';

interface Props {
  postId: string;
}
export default function CreateComment({ postId }: Props) {
  const [content, setContent] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="comment">New comment</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Comment</button>
      </form>
    </div>
  );
}
