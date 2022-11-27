import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Product from "App/Models/Product";

export default class ProductsController {
   public async index({}: HttpContextContract) {
      return Product.query()
         .preload('brand')
   }

   public async filterByName({request, response}: HttpContextContract) {
      const product = await Product.query()
         .where('name', request.body().name)
         .preload('brand')

      return response.json({
         success: true,
         data: product,
         message: 'Product detailed correctly',
         status_code: 200
      })
   }

   public async store({}: HttpContextContract) {
   }

   public async show({}: HttpContextContract) {
   }

   public async update({}: HttpContextContract) {
   }

   public async destroy({}: HttpContextContract) {
   }
}
