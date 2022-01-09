import agriculture from "./agriculture.js";
import transport from "./transport.js";
import building from "./building.js";

const solutionRoutes = [
   {
      path: '/solution',
      name: 'solution',
      component: () => import("../pages/Solution.vue"),
   },

   ...agriculture,
   ...transport,
   ...building
]

export default solutionRoutes
