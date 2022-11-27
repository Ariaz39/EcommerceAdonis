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
   Route.delete('/delete/:id', 'BrandsController.delete').as('delete')
}).prefix('/brand').as('brand')
