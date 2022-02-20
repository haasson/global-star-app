export default [
   {
      path: '/solution/building',
      component: () => import("../pages/Building.vue")
   },

   {
      path: '/solution/building/weighting-system',
      component: () => import("../pages/Building/WeightingSystem.vue")
   },

   {
      path: '/solution/building/3d-system',
      component: () => import("../pages/Building/3dSystem.vue")
   },

   {
      path: '/solution/building/monitoring',
      component: () => import("../pages/Building/Monitoring.vue")
   },
]
