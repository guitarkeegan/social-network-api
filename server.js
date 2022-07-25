const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// uncomment if neccissary 
// const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.
// const activity = cwd.includes('r_social_network')
//   ? cwd.split('/01-Activities/')[1]
//   : cwd;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server for socialDB running on port ${PORT}!`);
  });
});
