import Product from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'
import {randomInt} from "crypto";

export default Factory.define(Product, ({faker}) => {
   return {
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      brand_id: randomInt(1,10),
      stock: randomInt(1,100),
      status: randomInt(1,2),
   }
}).build()
