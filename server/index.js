const express = require('express');
const app = express();
const port = 3000;

let products = require('../products.json');

app.get('/api/products', (req, res) => {
    res.status(200).send(products);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});