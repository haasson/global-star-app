export default [
   {
      path: '/solution/agriculture',
      component: () => import("../pages/Agriculture.vue")
   },

   {
      path: '/solution/agriculture/navigation',
      component: () => import("../pages/Agriculture/Navigation/Navigation.vue")
   },

   {
      path: '/solution/agriculture/auto-drive',
      component: () => import("../pages/Agriculture/AutoDrive/AutoDrive.vue")
   },

   {path: '/solution/agriculture/auto-drive/steering-device', name: 'SteeringDevice', component: () => import("../pages/Agriculture/AutoDrive/SteeringDevice.vue")},
   {path: '/solution/agriculture/auto-drive/hydraulic-autopilot', name: 'HydraulicAutopilot', component: () => import("../pages/Agriculture/AutoDrive/HydraulicAutopilot.vue")},
   {
      path: '/solution/agriculture/auto-drive/electric-autopilot',
      name: 'ElectricAutopilot',
      component: () => import("../pages/Agriculture/AutoDrive/ElectricAutopilot.vue"),
      meta: {
         title: 'Лучшее решение Автопилота для сельхозтехники / FJDynamics'
      }
   },


   {
      path: '/solution/agriculture/accurate-planter',
      component: () => import("../pages/Agriculture/AccuratePlanter/AccuratePlanter.vue")
   },

   {path: '/solution/agriculture/accurate-planter/sure-drive', name: 'SureDrive', component: () => import("../pages/Agriculture/AccuratePlanter/SureDrive.vue")},
   {path: '/solution/agriculture/accurate-planter/sure-speed', name: 'SureSpeed', component: () => import("../pages/Agriculture/AccuratePlanter/SureSpeed.vue")},
   {path: '/solution/agriculture/accurate-planter/sure-force', name: 'SureForce', component: () => import("../pages/Agriculture/AccuratePlanter/SureForce.vue")},


   {
      path: '/solution/agriculture/flow-management',
      component: () => import("../pages/Agriculture/FlowManagement/FlowManagement.vue"),
      children: [
         {path: 'dry', name: 'dryMaterials', component: () => import("../pages/Agriculture/FlowManagement/DryMaterials.vue"), meta: {scrollBehavior: 'hold'}},
         {path: 'wet', name: 'wetMaterials', component: () => import("../pages/Agriculture/FlowManagement/WetMaterials.vue"), meta: {scrollBehavior: 'hold'}}
      ]
   },

   {
      path: '/solution/agriculture/machines-monitoring',
      component: () => import("../pages/Agriculture/MachinesMonitoring/MachinesMonitoring.vue"),
      children: [
         {
            path: 'combine',
            name: 'combineMonitoring',
            component: () => import("../pages/Agriculture/MachinesMonitoring/CombineMonitoring.vue"),
            meta: {
               scrollBehavior: 'hold',
               title: 'Мониторинг сельхозтехники / Агронавигация / Global Star'
            }
         },
         {path: 'tractor', name: 'tractorMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/TractorMonitoring.vue"), meta: {scrollBehavior: 'hold'}},
         {path: 'refueller', name: 'refuellerMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/RefuellerMonitoring.vue"), meta: {scrollBehavior: 'hold'}},
         {path: 'truck', name: 'truckMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/TruckMonitoring.vue"), meta: {scrollBehavior: 'hold'}},
         {path: 'sprayer', name: 'sprayerMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/SprayerMonitoring.vue"), meta: {scrollBehavior: 'hold'}}
      ]
   },

   {
      path: '/solution/agriculture/harvest',
      component: () => import("../pages/Agriculture/Harvest/Harvest.vue"),
      children: [
         {path: 'agleader', name: 'agLeaderHarvest', component: () => import("../pages/Agriculture/Harvest/AgLeader.vue"), meta: {scrollBehavior: 'hold'}},
         {path: 'dinamica', name: 'dinamicaGenerateHarvest', component: () => import("../pages/Agriculture/Harvest/DinamicaGenerate.vue"), meta: {scrollBehavior: 'hold'}},
         {path: 'bunkers', name: 'bunkersReloaderHarvest', component: () => import("../pages/Agriculture/Harvest/BunkersReloader.vue"), meta: {scrollBehavior: 'hold'}}
      ]
   },

   {
      path: '/solution/agriculture/feed-control',
      component: () => import("../pages/Agriculture/FeedControl.vue"),
      meta: {
         title: 'Система контроля кормления / Умная Ферма Global Star'
      }
   },

   {
      path: '/solution/agriculture/feed-analyzer',
      component: () => import("../pages/Agriculture/FeedAnalyzer.vue"),
      meta: {
         title: 'ИК Анализаторы кормов / Global Star'
      }
   },
]
