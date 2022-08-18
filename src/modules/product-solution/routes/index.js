export default [
   {
      path: '/program-solution',
      name: 'programSolution',
      component: () => import("../pages/ProductSolutions.vue"),
      meta: {
         title: 'Современное программное обеспечение для сельского хозяйства / Global Star'
      }
   },
   {
      path: '/program-solution/:name',
      name: 'productSolutionPage',
      component: () => import("../pages/ProductSolutionPage.vue")
   }

]
