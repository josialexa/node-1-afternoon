const express = require('express');
const getProducts = require('./getProducts')
const app = express();
const port = 3000;

app.get('/api/products', getProducts);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});