import axios from 'axios';
import { FormEvent, useState } from 'react';

import './styles.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', { title });

    setTitle('');
  }

  return (
    <div className="create-post-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
