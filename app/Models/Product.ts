import {DateTime} from 'luxon'
import {BaseModel, column, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Brand from "App/Models/Brand";

export default class Product extends BaseModel {
   @column({isPrimary: true})
   public id: number

   @column()
   public name: string

   @column()
   public description: string

   @column()
   public brand_id: number

   @column()
   public stock: number

   @column()
   public status: number

   @column.dateTime({autoCreate: true})
   public createdAt: DateTime

   @column.dateTime({autoCreate: true, autoUpdate: true})
   public updatedAt: DateTime

   @hasOne(() => Brand, {
      foreignKey: 'id',
      localKey: 'brand_id'
   })
   public brand: HasOne<typeof Brand>
}
