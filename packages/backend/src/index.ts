import { User } from '@fantastic/shared';
import express from 'express';
import cors from 'cors';

import { getName } from '@backend/test';

getName();

const app = express();
app.use(cors());
const port = 3000;

const getUser = (): User => {
  return {
    id: '1',
    firstName: 'Mateusz',
    age: 23,
  };
};

app.get('/', (req, res) => {
  res.send('Server works ;)');
});

app.get('/user', (req, res) => {
  const user = getUser();
  res.json(user);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
