import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Product from "App/Models/Product";
import {ProductInterface} from 'App/contracts/ProductInterface'

export default class ProductsController {
   public async index({}: HttpContextContract) {
      return Product.query()
         .preload('brand')
   }

   public async filterByName({request, response}: HttpContextContract) {
      if (request.body().name == '') throw new Error('The name cant be empty.')

      const product = await Product.query()
         .where('name', 'like', '%' + request.body().name + '%')
         .preload('brand')

      if (product.length < 1) throw new Error('Product does not exist.')

      return response.json({
         success: true,
         data: product,
         message: 'Product detailed successfully',
         status_code: 200
      })
   }

   public async store({request, response}: HttpContextContract) {
      const data: ProductInterface = {
         name: request.body().name,
         description: request.body().description,
         brand_id: request.body().brand_id,
         stock: request.body().stock,
         status: request.body().status
      }

      await Product.create(data)

      return response.json({
         success: true,
         data: [],
         message: 'Product created successfully',
         status_code: 200
      })
   }

   public async show({response, params}: HttpContextContract) {
      const product = await Product.query()
         .where('id', params.id)
         .preload('brand')
         .first()

      if (!product) throw new Error('Product does not exist.')

      return response.json({
         success: true,
         data: product,
         message: 'Product detailed successfully',
         status_code: 200
      })
   }

   public async update({request, response, params}: HttpContextContract) {
      const product = await Product.query()
         .where('id', params.id)
         .preload('brand')
         .first()

      if (!product) throw new Error('Product does not exist.')

      product.name = request.body().name
      product.description = request.body().description
      product.brand_id = request.body().brand_id
      product.stock = request.body().stock
      product.status = request.body().status

      await product.save()

      return response.json({
         success: true,
         data: [],
         message: 'Product updated successfully',
         status_code: 200
      })
   }

   public async destroy({response, params}: HttpContextContract) {
      const product = await Product.query()
         .where('id', params.id)
         .preload('brand')
         .first()

      if (!product) throw new Error('Product does not exist.')

      product.status = 2
      await product.save()

      return response.json({
         success: true,
         data: [],
         message: 'Product deleted successfully',
         status_code: 200
      })
   }
}
