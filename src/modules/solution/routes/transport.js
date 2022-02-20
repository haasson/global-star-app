export default [
   {
      path: '/solution/transport',
      component: () => import("../pages/Transport.vue")
   },

   {
      path: '/solution/transport/trucks',
      component: () => import("../pages/Transport/Trucks.vue")
   },

   {
      path: '/solution/transport/refueller',
      component: () => import("../pages/Transport/Refueller.vue")
   },

   {
      path: '/solution/transport/cars',
      component: () => import("../pages/Transport/Cars.vue")
   },
]
