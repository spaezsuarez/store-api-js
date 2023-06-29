const { Router } = require('express');
const usersRouter = Router();

usersRouter.get('/',(request,response) => {
   const { limit,offset } = request.query;
   if(limit && offset) {
      response.status(200).json({limit,offset});
   }else{
      response.send('No hay parametros');
   }
});

module.exports = { usersRouter };
