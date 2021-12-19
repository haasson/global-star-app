const productsRoutes = [
   {
      path: '/products',
      name: 'products',
      component: () => import("../pages/Products.vue"),
   },

   {
      path: '/products/agriculture',
      name: 'productsAgriculture',
      component: () => import("../pages/Agriculture.vue"),
   },

   {
      path: '/products/transport',
      name: 'productsTransport',
      component: () => import("../pages/Transport.vue")
   },

   {
      path: '/products/catalog',
      name: 'productsCatalog',
      component: () => import("../pages/Catalog.vue"),
      children: [
         {path: ':id', name: 'catalogList', component: () => import("../pages/CatalogList.vue")}
      ]
   },

   // {
   //    path: '/products/agriculture/navigation',
   //    name: 'productsNavigation',
   //    component: () => import("../pages/Agriculture/Navigation.vue")
   // },
   //
   // {
   //    path: '/products/agriculture/auto-drive',
   //    name: 'productsAutoDrive',
   //    component: () => import("../pages/Agriculture/AutoDrive.vue")
   // },
   //
   // {
   //    path: '/products/agriculture/correction',
   //    name: 'productsCorrection',
   //    component: () => import("../pages/Agriculture/Correction.vue")
   // },
   //
   // {
   //    path: '/products/agriculture/flow-management',
   //    name: 'productsFlowManagement',
   //    component: () => import("../pages/Agriculture/FlowManagement.vue")
   // },
   //
   // {
   //    path: '/products/agriculture/feed-control',
   //    name: 'productsFeedControl',
   //    component: () => import("../pages/Agriculture/FeedControl.vue")
   // },
   //
   // {
   //    path: '/products/agriculture/feed-analyzer',
   //    name: 'productsFeedAnalyzer',
   //    component: () => import("../pages/Agriculture/FeedAnalyzer.vue")
   // },


   // {
   //    path: '/products/transport',
   //    name: 'productsTransport',
   //    component: () => import("../pages/Transport.vue")
   // },

   // {
   //    path: '/products/transport/tracker',
   //    name: 'productsTracker',
   //    component: () => import("../pages/Transport/Tracker.vue")
   // },
   //
   // {
   //    path: '/products/transport/fuel-sensor',
   //    name: 'productsFuelSensor',
   //    component: () => import("../pages/Transport/FuelSensor.vue")
   // },
   //
   // {
   //    path: '/products/transport/additional',
   //    name: 'productsAdditional',
   //    component: () => import("../pages/Transport/Additional.vue")
   // },
   //
   // {
   //    path: '/products/transport/personal-tracker',
   //    name: 'productsPersonalTracker',
   //    component: () => import("../pages/Transport/PersonalTracker.vue")
   // },
]

export default productsRoutes
