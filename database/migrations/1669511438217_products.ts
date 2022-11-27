import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
   protected tableName = 'products'

   public async up() {
      this.schema.createTable(this.tableName, (table) => {
         table.increments('id')
         table.string('name', 100).notNullable()
         table.string('description').nullable()
         table.integer('brand_id').unsigned().references('id').inTable('brands').onDelete('NO' +
            ' ACTION').onUpdate('NO ACTION')
         table.integer('stock').notNullable()
         table.integer('status').notNullable().defaultTo(1)

         table.timestamp('created_at', {useTz: true})
         table.timestamp('updated_at', {useTz: true})
      })
   }

   public async down() {
      this.schema.dropTable(this.tableName)
   }
}
