const { Router } = require('express');
const categoriesRouter = Router();

categoriesRouter.get('/:categoryId/products/:productId',(request,response) => {
   const { categoryId,productId } = request.params;
   response.status(200).json({
      categoryId,
      productId,
      price:5000
   })
});

module.exports = { categoriesRouter };
