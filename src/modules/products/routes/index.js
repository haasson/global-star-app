const productsRoutes = [
   {
      path: '/products',
      name: 'products',
      component: () => import("../pages/Products.vue"),
   },

   {
      path: '/products/agriculture',
      exact: true,
      name: 'productsAgriculture',
      component: () => import("../pages/Agriculture.vue"),
      children: [
         {
            path: ':id', name: 'catalogList1', component: () => import("../pages/CatalogList.vue"),
         }
      ]
   },

   {
      path: '/products/transport',
      name: 'productsTransport',
      component: () => import("../pages/Transport.vue"),
      children: [
         {
            path: ':id', name: 'catalogList2', component: () => import("../pages/CatalogList.vue"),
         }
      ]
   },

   {
      path: '/products/:section/:category/:productID',
      name: 'productPage',
      component: () => import("../pages/ProductPage.vue"),
   },
]

export default productsRoutes
