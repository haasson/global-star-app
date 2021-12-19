const solutionRoutes = [
   {
      path: '/solution',
      name: 'solution',
      component: () => import("../pages/Solution.vue"),

   },

   // Agriculture pages
   {
      path: '/solution/agriculture',
      component: () => import("../pages/Agriculture.vue")
   },

   {
      path: '/solution/agriculture/navigation',
      component: () => import("../pages/Agriculture/Navigation.vue")
   },
   {
      path: '/solution/agriculture/auto-drive',
      component: () => import("../pages/Agriculture/AutoDrive.vue")
   },
   {
      path: '/solution/agriculture/accurate-planter',
      component: () => import("../pages/Agriculture/AccuratePlanter.vue")
   },
   {
      path: '/solution/agriculture/flow-management',
      component: () => import("../pages/Agriculture/FlowManagement.vue")
   },
   {
      path: '/solution/agriculture/machines-monitoring',
      component: () => import("../pages/Agriculture/MachinesMonitoring.vue")
   },
   {
      path: '/solution/agriculture/harvest',
      component: () => import("../pages/Agriculture/Harvest.vue")
   },
   {
      path: '/solution/agriculture/feed-control',
      component: () => import("../pages/Agriculture/FeedControl.vue")
   },
   {
      path: '/solution/agriculture/feed-analyzer',
      component: () => import("../pages/Agriculture/FeedAnalyzer.vue")
   },


   // Transport pages
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


   // Building pages
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

export default solutionRoutes
