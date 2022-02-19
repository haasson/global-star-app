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
   {path: '/solution/agriculture/auto-drive/electric-autopilot', name: 'ElectricAutopilot', component: () => import("../pages/Agriculture/AutoDrive/ElectricAutopilot.vue")},


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
         {path: 'dry', name: 'dryMaterials', component: () => import("../pages/Agriculture/FlowManagement/DryMaterials.vue")},
         {path: 'wet', name: 'wetMaterials', component: () => import("../pages/Agriculture/FlowManagement/WetMaterials.vue")}
      ]
   },

   {
      path: '/solution/agriculture/machines-monitoring',
      component: () => import("../pages/Agriculture/MachinesMonitoring/MachinesMonitoring.vue"),
      children: [
         {path: 'combine', name: 'combineMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/CombineMonitoring.vue")},
         {path: 'tractor', name: 'tractorMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/TractorMonitoring.vue")},
         {path: 'refueller', name: 'refuellerMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/RefuellerMonitoring.vue")},
         {path: 'truck', name: 'truckMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/TruckMonitoring.vue")},
         {path: 'sprayer', name: 'sprayerMonitoring', component: () => import("../pages/Agriculture/MachinesMonitoring/SprayerMonitoring.vue")}
      ]
   },

   {
      path: '/solution/agriculture/harvest',
      component: () => import("../pages/Agriculture/Harvest/Harvest.vue"),
      children: [
         {path: 'agleader', name: 'agLeaderHarvest', component: () => import("../pages/Agriculture/Harvest/AgLeader.vue")},
         {path: 'dinamica', name: 'dinamicaGenerateHarvest', component: () => import("../pages/Agriculture/Harvest/DinamicaGenerate.vue")},
         {path: 'bunkers', name: 'bunkersReloaderHarvest', component: () => import("../pages/Agriculture/Harvest/BunkersReloader.vue")}
      ]
   },

   {
      path: '/solution/agriculture/feed-control',
      component: () => import("../pages/Agriculture/FeedControl.vue")
   },

   {
      path: '/solution/agriculture/feed-analyzer',
      component: () => import("../pages/Agriculture/FeedAnalyzer.vue")
   },
]
