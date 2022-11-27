import Brand from 'App/Models/Brand'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Brand, ({ faker }) => {
  return {
    name: faker.helpers.unique(faker.commerce.department),
    description: faker.commerce.productDescription(),
    status: '1'
  }
}).build()
