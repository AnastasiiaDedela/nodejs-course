import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.get('/user/:username/:id', (req, res) => {
  res.send(`user id: ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`server started: http://localhost:${PORT}`);
});
