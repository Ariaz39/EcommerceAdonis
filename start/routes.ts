import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
   return {
      message: 'Welcome to my Ecommerce',
      author: 'Alejo Arias',
      version: 1.0
   }
})

Route.group(() => {
   Route.get('/', 'BrandsController.index').as('index')
   Route.post('/filter-by-name', 'BrandsController.filterByName').as('filterByName')
   Route.post('/store', 'BrandsController.store').as('store')
   Route.get('/show/:id', 'BrandsController.show').as('show')
   Route.put('/update/:id', 'BrandsController.update').as('update')
   Route.delete('/destroy/:id', 'BrandsController.destroy').as('destroy')
}).prefix('/brand').as('brand')

Route.group(() => {
   Route.get('/', 'ProductsController.index').as('index')
   Route.post('/filter-by-name', 'ProductsController.filterByName').as('filterByName')
   Route.post('/store', 'ProductsController.store').as('store')
   Route.get('/show/:id', 'ProductsController.show').as('show')
   Route.put('/update/:id', 'ProductsController.update').as('update')
   Route.delete('/destroy/:id', 'ProductsController.destroy').as('destroy')
}).prefix('/product').as('product')
