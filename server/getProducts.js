const products = require('../products.json');

const getProducts = (req, res) => {
    req.query.price ? 
        res.status(200).send(products.filter(v => v.price >= +req.query.price))
    :
        res.status(200).send(products);

}

module.exports = getProducts;