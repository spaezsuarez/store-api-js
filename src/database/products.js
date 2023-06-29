const { faker } = require('@faker-js/faker');

const products = [];

function initProducts(){
   for (let index = 0; index < 100; index++) {
      products.push({
         id:index,
         name:faker.commerce.product(),
         price: parseInt(faker.commerce.price()),
         description: faker.commerce.productDescription(),
         image: faker.image.url()
      });
   }
}

module.exports = {
   products,
   initProducts
}
