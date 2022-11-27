import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BrandFactory from "Database/factories/BrandFactory";

export default class extends BaseSeeder {
  public async run () {
    await BrandFactory.createMany(10)
  }
}
