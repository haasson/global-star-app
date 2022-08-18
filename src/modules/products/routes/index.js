const agricultureTitlesMap = {
   navigation: 'Системы навигации для сельхозтехники / Агронавигация / Курсоуказатели / Global Star',
   'auto-drive': 'Автопилоты для сельхозтехники / Лучшее решение для автоматического вождения /  Global Star',
   'flow-management': 'Лучшее решение для опрыскивания / Опрыскивание без перекрытий / Контроль вылива жидких удобрений / Global Star',
   'feed-control': 'Оборудование для контроля корпления КРС / Умная Ферма / Global Star',
   'feed-analyzer': 'Экспресс анализ кормов / ИК Анализаторы кормов / Global Star',
}


const productsRoutes = [
   {
      path: '/products',
      name: 'products',
      component: () => import("../pages/Products.vue"),
   },

   {
      path: '/products/agriculture',
      exact: true,
      name: 'productsAgriculture',
      component: () => import("../pages/Agriculture.vue"),
      meta: {
         title: 'Лучшие решения для сельского хозяйства / Global Star'
      },
      children: [
         {
            path: ':id',
            name: 'catalogList1',
            component: () => import("../pages/CatalogList.vue"),
            meta: (route) => {
               return {
                  title: agricultureTitlesMap[route.params.id]
               }
            }
         }
      ]
   },

   {
      path: '/products/transport',
      name: 'productsTransport',
      component: () => import("../pages/Transport.vue"),
      meta: {
         title: 'Системы мониторинга транспорта / Оборудование для мониторинга транспорта / GPS Глонасс / Global Star'
      },
      children: [
         {
            path: ':id', name: 'catalogList2', component: () => import("../pages/CatalogList.vue"),
         }
      ]
   },

   {
      path: '/products/:section/:category/:productID',
      name: 'productPage',
      component: () => import("../pages/ProductPage.vue"),
   },
]

export default productsRoutes
