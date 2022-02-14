const aboutRoutes = [
   {
      path: '/about',
      name: 'about',
      component: () => import("../pages/About.vue"),
      children: [
         {
            path: 'company',
            name: 'company',
            component: () => import("../pages/Company.vue")
         },
         {
            path: 'news',
            name: 'news',
            component: () => import("../pages/News.vue"),
         },
         {
            path: 'news/:id',
            name: 'newsArticle',
            meta: {content: 'news'},
            component: () => import("../components/FullArticle.vue"),
            props: {articleType: 'news'}
         },
         {
            path: 'projects',
            name: 'projects',
            component: () => import("../pages/Projects.vue")
         },
         {
            path: 'projects/:id',
            name: 'projectsArticle',
            meta: {content: 'projects'},
            component: () => import("../components/FullArticle.vue"),
            props: {articleType: 'projects'}
         },
         {
            path: 'vacancy',
            name: 'vacancy',
            component: () => import("../pages/Vacancy.vue")
         },
      ]
   }
]

export default aboutRoutes
