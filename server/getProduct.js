const products = require('../products.json');

let getProduct = (req, res) => {
    let result = products.filter(v => v.id == req.params.id)

    result.length ? res.status(200).send(result) : res.status(500).send('Item not in list');
}

module.exports = getProduct;