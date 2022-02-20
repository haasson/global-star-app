export default [
   {
      path: '/program-solution',
      name: 'programSolution',
      component: () => import("../pages/ProductSolutions.vue"),
   },
   {
      path: '/program-solution/:name',
      name: 'productSolutionPage',
      component: () => import("../pages/ProductSolutionPage.vue")
   }

]
