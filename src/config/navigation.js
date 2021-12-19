const navigation = {
   solution: {
      position: 1,
      name: 'Решения',
      children: {
         agriculture: {
            name: 'Для с/х техники',
            position: 1,
            children: {
               'navigation': {
                  name: 'Навигация',
                  position: 1,
               },
               'auto-drive': {
                  name: 'Автоматическое вождение',
                  position: 2,
               },
               'accurate-planter': {
                  name: 'Точный высев',
                  position: 3,
               },
               'flow-management': {
                  name: 'Управление расходом и внесением',
                  position: 4,
               },
               'machines-monitoring': {
                  name: 'Мониторинг с/х техники',
                  position: 5,
               },
               'harvest': {
                  name: 'Уборка урожая',
                  position: 6,
               },
               'feed-control': {
                  name: 'Контроль кормления КРС',
                  position: 7,
               },
               'feed-analyzer': {
                  name: 'БИК анализаторы кормов',
                  position: 8,
               },
            }
         },

         transport: {
            position: 2,
            name: 'Для транспорта',
            children: {
               'trucks': {
                  position: 1,
                  name: 'Транспортные перевозки'
               },
               'refueller': {
                  position: 2,
                  name: 'Топливозаправщики'
               },
               'cars': {
                  position: 3,
                  name: 'Легковые автомобили'
               }
            }
         },

         building: {
            position: 3,
            name: 'Для строительства',
            children: {
               'weighting-system': {
                  position: 1,
                  name: 'Бортовая система взвешивания Pegasus'
               },
               '3d-system': {
                  position: 2,
                  name: '3D система для экскаватора'
               },
               'monitoring': {
                  position: 3,
                  name: 'Мониторинг спец техники'
               }
            }
         }
      }
   },

   products: {
      position: 2,
      name: 'Продукты',
      children: {
         agriculture: {
            position: 1,
            name: 'Для сельского хозяйства',
            path: 'catalog',
            children: {
               'navigation': {
                  position: 1,
                  name: 'Навигация',
               },
               'auto-drive': {
                  position: 2,
                  name: 'Автоматическое вождение',
               },
               'correction': {
                  position: 3,
                  name: 'Сервисы коррекции',
               },
               'flow-management': {
                  position: 4,
                  name: 'Управление расходом и внесением',
               },
               'feed-control': {
                  position: 5,
                  name: 'Контроль кормления',
               },
               'feed-analyzer': {
                  position: 6,
                  name: 'Анализаторы кормов',
               }
            }

         },
         transport: {
            position: 2,
            name: 'Для транспорта',
            path: 'catalog',
            children: {
               'tracker': {
                  position: 1,
                  name: 'Модули слежения',
               },
               'fuel-sensor': {
                  position: 2,
                  name: 'Датчики уровня топлива',
               },
               'additional': {
                  position: 3,
                  name: 'Дополнительное оборудование',
               },
               'personal-tracker': {
                  position: 4,
                  name: 'Песональные трекеры',
               }
            }

         },
      }
   },

   'program-solution': {
      position: 3,
      name: 'Программные решения',
   },

   service: {
      position: 4,
      name: 'Сервис',
   },

   about: {
      position: 5,
      name: 'О компании',
   },

   contacts: {
      position: 6,
      name: 'Контакты',
   }
}

export default navigation
