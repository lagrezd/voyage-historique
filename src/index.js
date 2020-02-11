const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const app = express();
const middlewares = require('./middlewares');

app.use(morgan('common'));
app.use(helmet());
app.use(
  cors({
    origin: 'http://locahost:3000'
  })
);

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world!'
  });
});

app.use(middlewares.notFound);

// eslint-disable-next-line no-unused-vars
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
