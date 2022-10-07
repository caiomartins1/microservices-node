import express from 'express';
import cors from 'cors';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

const app = express();
app.use(express.json());
app.use(cors());

const posts = [];

app.get('/posts', (request, response) => {
  response.send(posts);
});
app.post('/posts', async (request, response) => {
  const id = uuid();
  const { title } = request.body;

  posts.push({
    id,
    title,
  });

  try {
    await axios.post('http://localhost:4005/events', {
      type: 'PostCreated',
      data: {
        id,
        title,
      },
    });
  } catch (e) {}

  response.status(201).send({ id, title });
});

app.listen(4000, () => {
  console.log('Posts Service at 4000');
});
