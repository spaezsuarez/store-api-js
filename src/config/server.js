const { Router } = require('express');
const { productRouter } = require('../routes/products.router');
const { categoriesRouter } = require('../routes/categories.router');
const { usersRouter } = require('../routes/users.router');

const initAPI = (app) => {
   const router = Router();
   router.use('/products',productRouter);
   router.use('/categories',categoriesRouter);
   router.use('/users',usersRouter);
   app.use(`/api/v1`,router);
}

module.exports =  initAPI;
