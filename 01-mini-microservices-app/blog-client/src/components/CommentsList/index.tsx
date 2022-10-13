import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';

interface Props {
  comments: Comment[];
}
interface Comment {
  content: string;
  id: string;
}

export default function CommentsList({ comments }: Props) {
  return (
    <ul>
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.content}</li>;
      })}
    </ul>
  );
}
