import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const posts = [];

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;
    posts.push({ id, title, comments: [] });
  }
  if (type === 'CommentCreated') {
    const { id, content, postId } = data;
    const post = posts.filter((post) => {
      return post.id === postId;
    });

    post[0].comments.push({ id, content });
  }

  res.send({});
});

app.listen(4002, () => {
  console.log('Query Service at 4002');
});
