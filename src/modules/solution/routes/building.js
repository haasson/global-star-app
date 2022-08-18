export default [
   {
      path: '/solution/building',
      component: () => import("../pages/Building.vue"),
      meta: {
         title: 'Системы мониторинга строительной техники / Global Star'
      }
   },

   {
      path: '/solution/building/weighting-system',
      component: () => import("../pages/Building/WeightingSystem.vue"),
      meta: {
         title: 'Лучшая система бортового взвешивания / Весы на погрузчик Pegasus2 / Global Star'
      }
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
