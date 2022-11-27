import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import Brand from 'App/Models/Brand'

export default class BrandsController {
   public async index({}: HttpContextContract) {
      return await Brand.all()
   }

   public async store({request, response}: HttpContextContract) {
      try {
         const data: object = request.body()
         await Brand.create(data)
         return response.json({
            success: true,
            data: [],
            message: 'Brand created correctly',
            status_code: 200
         })
      } catch (e) {
         throw new Error('Dont have create brand. ' + e)
      }
   }

   public async filterByName({request, response}: HttpContextContract){
      const brand = await Brand.query().where('name', request.body().name).first()
      // console.log(request.body())

      if (!brand) throw new Error('The brand does not exist.')

      return response.json({
         success: true,
         data: brand,
         message: 'Brand detailed correctly',
         status_code: 200
      })
   }

   public async show({response, params}: HttpContextContract) {
      // const brand = await Brand.query().where('id', params.id).first()
      const brand = await Brand.findBy('id', params.id)

      if (!brand) throw new Error('The brand does not exist.')

      return response.json({
         success: true,
         data: brand,
         message: 'Brand detailed correctly',
         status_code: 200
      })
   }

   public async update({request, response, params}: HttpContextContract) {
      let brand = await Brand.findBy('id', params.id)

      if (!brand) throw new Error('The brand does not exist.')

      brand.name = request.body().name
      brand.description = request.body().description
      brand.status = request.body().status

      // console.log(brand)
      await brand.save()

      return response.json({
         success: true,
         data: [],
         message: 'Brand updated correctly',
         status_code: 200
      })
   }

   public async destroy({response, params}: HttpContextContract) {
      let brand = await Brand.findBy('id', params.id)

      if (!brand) throw new Error('The brand does not exist.')

      await brand.delete()

      return response.json({
         success: true,
         data: [],
         message: 'Brand deleted correctly',
         status_code: 200
      })
   }
}
