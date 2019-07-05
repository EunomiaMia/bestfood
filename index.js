require('dotenv').config();
// import express from 'express';
const express = require('express');
const routes = require('./routes');

const app = express();
const port = 3000;

// console.log(process.env.DB_NAME)
routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
