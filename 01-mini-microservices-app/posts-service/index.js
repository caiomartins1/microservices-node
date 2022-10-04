import express from 'express';
import { v4 as uuid } from 'uuid';

const app = express();
app.use(express.json());

const posts = [];

app.get('/posts', (request, response) => {
  response.send(posts);
});
app.post('/posts', (request, response) => {
  const id = uuid();
  const { title } = request.body;

  posts.push({
    id,
    title,
  });

  response.status(201).send({ id, title });
});

app.listen(4000, () => {
  console.log('Posts Service at 4000');
});
