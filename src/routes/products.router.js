const { Router } = require('express');
const { products,initProducts } = require('../database/products');

const productRouter = Router();
initProducts();

productRouter.get('/',(request,response) => {
   response.status(200).json(products);
});

productRouter.get('/:productId',(request,response) => {
   const productId = parseInt(request.params.productId);
   response.status(200).json(products.filter((product) => product.id === productId)[0]);
});

module.exports = { productRouter };
