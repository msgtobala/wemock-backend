import express from 'express';

const app: express.Application = express();
const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`App started at ${PORT}`);
});
