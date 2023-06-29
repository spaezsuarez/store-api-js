const express = require('express');
const app = express();
const port = process.env.PORT | 3000;
const initAPI = require('./config/server');

initAPI(app);
app.listen(port);
