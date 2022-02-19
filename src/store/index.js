import {shallowRef, ref} from 'vue'



const pages = {
   title: [{
      name: 'AppTitle',
      props: {
         position: 'right',
         text: 'Решения для сельского хозяйства'
      },
   }],
   list: [{
      name: 'AppList',
      props: {
         type: 'feature',
         itemsPerRow: 3,
         gap:5,
         items: [
            {
               icon: {
                  name: 'time',
                  shift: {top: 4, left: -14}
               },
               text: 'Мониторинг работы в режиме реального времени',
            },
            {
               icon: {
                  name: 'map',
                  shift: {top: -5, left: 7}
               },
               text: 'Мониторинг урожайности',
            },
            {
               icon: {
                  name: 'control',
                  shift: {top: -1, left: -11}
               },
               text: 'Контроль загрузки/выгрузки бункера',
            },
            {
               icon: {
                  name: 'document',
                  shift: {top: -5, left: 0}
               },
               text: 'Контроль расхода топлива',
            },
            {
               icon: {
                  name: 'identify',
                  shift: {top: 0, left: -12}
               },
               text: 'Идентификация водителей/ учет рабочего времени',
            },
            {
               icon: {
                  name: 'monitor',
                  shift: {top: -8, left: 4}
               },
               text: 'Контроль скоростного режима',
            },
         ]
      }
   }],
   all: [
      {
         name: 'AppList',
         props: {
            title: 'Наши клиенты',
            type: 'simple',
            itemsPerRow: 3,
            itemHeight: 100,
            items: [
               {
                  image: 'images/simple/1.png',
               },
               {
                  image: 'images/simple/2.png',
               },
               {
                  image: 'images/simple/3.png',
               },
               {
                  image: 'images/simple/4.png',
               },
               {
                  image: 'images/simple/5.png',
               },
               {
                  image: 'images/simple/6.png',
               },
            ]
         }
      },
      {
         name: 'AppList',
         props: {
            title: 'Услуги сервиса',
            type: 'service',
            itemsPerRow: 5,
            gap:53,
            items: [
               {
                  icon: {
                     name: 'guarantee',
                     size: {width: 91, height: 91},
                     shift: {top: -3, left: 4}
                  },
                  text: 'Гарантийное и после гарантийное обслуживание продуктов всех брендов',
               },
               {
                  icon: {
                     name: 'diagnostics',
                     size: {width: 86, height: 86},
                     shift: {top: 11, left: -14}
                  },
                  text: 'Диагностика, ремонт, модернизация, реконструкция',
               },
               {
                  icon: {
                     name: 'warehouse',
                     size: {width: 55, height: 91},
                     shift: {top: -4, left: 14}
                  },
                  text: 'Собственный склад запасных частей',
               },
               {
                  icon: {
                     name: 'staff',
                     size: {width: 100, height: 60},
                     shift: {top: 15, left: -5}
                  },
                  text: 'Высоко квалифицированный персонал ',
               },
               {
                  icon: {
                     name: 'computer',
                     size: {width: 100, height: 72},
                     shift: {top: 14, left: -16}
                  },
                  text: 'Удаленная поддержка',
               },
            ]
         }
      },
      {
         name: 'AppList',
         props: {
            title: 'Gurtam',
            type: 'soft',
            itemsPerRow: 3,
            items: [
               {
                  image: 'images/soft/1.png',
                  text: 'Wialon',
               },
               {
                  image: 'images/soft/2.png',
                  text: 'Hecterra',
               },
               {
                  image: 'images/soft/3.png',
                  text: 'Logistics',
               },
               {
                  image: 'images/soft/4.png',
                  text: 'Eco Driving',
               },
               {
                  image: 'images/soft/5.png',
                  text: 'Fleetrun',
               },
               {
                  image: 'images/soft/6.png',
                  text: 'Wia Tag',
               },
               {
                  image: 'images/soft/7.png',
               },
            ]
         }
      },
      {
         name: 'AppList',
         props: {
            type: 'feature',
            itemsPerRow: 3,
            gap:5,
            items: [
               {
                  icon: {
                     name: 'time',
                     shift: {top: 4, left: -14}
                  },
                  text: 'Мониторинг работы в режиме реального времени',
               },
               {
                  icon: {
                     name: 'map',
                     shift: {top: -5, left: 7}
                  },
                  text: 'Мониторинг урожайности',
               },
               {
                  icon: {
                     name: 'control',
                     shift: {top: -1, left: -11}
                  },
                  text: 'Контроль загрузки/выгрузки бункера',
               },
               {
                  icon: {
                     name: 'document',
                     shift: {top: -5, left: 0}
                  },
                  text: 'Контроль расхода топлива',
               },
               {
                  icon: {
                     name: 'identify',
                     shift: {top: 0, left: -12}
                  },
                  text: 'Идентификация водителей/ учет рабочего времени',
               },
               {
                  icon: {
                     name: 'monitor',
                     shift: {top: -8, left: 4}
                  },
                  text: 'Контроль скоростного режима',
               },
            ]
         }
      },
      {
         name: 'ProjectItem',
         props: {
            image: 'images/projects/1/main.jpg',
            title: 'Автопилот Ag Leader',
            text: 'Автопилот AgLeader на базе дисплея Compass 7500 установлен на трактор John Deere 6135B в Кытмановском районе Алтайского края. Для выполнения работ по севу подсолнечника, его культивации и...',
            link: ''
         }
      },
      {
         name: 'FullArticle',
         props: {
            title: 'День Сибирского поля 2021',
            date: '26.06.2021',
            text: `
         <p>22-23 июня наша компания приняла участие в Дне Сибирского Поля 2021, проходившего в  Сибирском Агропарке, расположенном на 37 километре Павловского тракта.</p>
         <p>Для наших клиентов были доступны основные продукты компании в области технологий точного земледелия, систем оптимального кормления КРС, решения для мониторинга с\\х техники.</p> 
      `,
            gallery: [
               'images/news/1/gallery/3234.jpg',
               'images/news/1/gallery/IMG-9811.jpg',
               'images/news/1/gallery/IMG-92811.jpg',
            ]
         }

      },
      {
         name: 'NewsItem',
         props: {
            image: 'images/news/1/main.jpg',
            title: 'День Сибирского поля 2021',
            date: '26.06.2021',
            text: `
            <p>22-23 июня наша компания приняла участие в Дне Сибирского Поля 2021, проходившего в Сибирском Агропарке, расположенном на 37 километре Павловского тракта.</p>         
            <p>Для наших клиентов были доступны основные продукты компании в области технологий точного земледелия, систем оптимального кормления КРС, решения для мониторинга с\х техники.</p>         
         `,
            link: ''
         }
      },
      {
         name: 'TextWithImage',
         props: {
            image: 'images/articles/equip-test.png',
            text: 'Заполните форму и мы свяжемся с Вами, чтобы подобрать оборудование для пробной установки на Вашу технику. На всем протяжении периода тестирования наш технический отдел будет сопровождать Вас. Уже на пробном периоде тестирования большинство компаний ощущают экономический эффект от внедрения наших решений.',
            button: {
               text: 'Оставить заявку',
               color: 'blue',
               link: ''
            }
         }
      },
      {
         name: 'TextBlock',
         props: {
            size: 24,
            text: 'Мы предлагаем навигационные дисплеи от начального до продвинутого уровня,  способные работать в жестких полевых условиях. Функционал дисплеев соответствует современным требованиям и закрывает все возможные потребности пользователей.'
         },
      },
      {
         name: 'AppTitle',
         props: {
            position: 'right',
            text: 'Решения для сельского хозяйства'
         },
      },
      {
         name: 'AppList',
         props: {
            type: 'solution',
            title: 'Для сельского хозяйства',
            // isSlider: true,
            // bg: {style: 'full', color: 'orange'},
            itemsPerRow: 3,
            items: [
               {
                  title: 'Навигация',
                  image: 'images/solution/cards/navigation.jpg'
               },
               {
                  title: 'Автоматическое вождение',
                  image: 'images/solution/cards/auto-drive.jpg'
               },
               {
                  title: 'Точный <br> высев',
                  image: 'images/solution/cards/accurate-planter.jpg'
               },
               {
                  title: 'Управление <br> расходом <br> и внесением',
                  image: 'images/solution/cards/flow-management.jpg'
               },
               {
                  title: 'Мониторинг <br> с/х техники',
                  image: 'images/solution/cards/machines-monitoring.jpg'
               },
               {
                  title: 'Уборка <br> урожая',
                  image: 'images/solution/cards/harvest.jpg'
               },
               {
                  title: 'Контроль <br> кормления КРС',
                  image: 'images/solution/cards/feed-control.jpg'
               },
               {
                  title: 'БИК анализаторы <br> кормов',
                  image: 'images/solution/cards/feed-analyzer.jpg'
               },
            ]
         },
      },
      {
         name: 'AppList',
         props: {
            type: 'product',
            title: 'Для сельского хозяйства',
            // isSlider: true,
            // bg: {style: 'full', color: 'orange'},
            itemsPerRow: 3,
            items: [
               {
                  title: 'Навигация',
                  image: 'images/product/cards/navigation.png'
               },
               {
                  title: 'Автоматическое вождение',
                  image: 'images/product/cards/auto-drive.png'
               },
               {
                  title: 'Сервисы коррекции',
                  image: 'images/product/cards/correction.png'
               },
               {
                  title: 'Управление расходом <br> и внесением',
                  image: 'images/product/cards/flow-management.png'
               },
               {
                  title: 'Контроль кормления',
                  image: 'images/product/cards/feed-control.png'
               },
               {
                  title: 'Анализаторы кормов',
                  image: 'images/product/cards/feed-analyzer.png'
               },

            ]
         },
      },
      {
         name: 'AppList',
         props: {
            type: 'catalog',
            title: 'Модули слежения',
            // isSlider: true,
            // bg: {style: 'full', color: 'orange'},
            itemsPerRow: 4,
            items: [
               {
                  title: 'Модуль слежения <br> СМАРТ S-2421',
                  image: 'images/catalog/tracking-module/smart.png',
                  text: 'Трекер со встроенными ГЛОНАСС/GPS- и GSM-антеннами, а также встроенной АКБ. Для подключения дополнительного...',
                  button: 'Посмотреть'
               },
               {
                  title: 'Модуль слежения <br> СМАРТ S-2423',
                  image: 'images/catalog/tracking-module/smart.png',
                  text: 'Самый продаваемый ГЛОНАСС/GPS-трекер. Оптимальное сочетание функциональности и стоимости. Подходит для большинства задач.',
                  button: 'Посмотреть'
               },
               {
                  title: 'Модуль слежения <br> СМАРТ S-2425',
                  image: 'images/catalog/tracking-module/smart.png',
                  text: 'Встроенные ГЛОНАСС/GPS- и GSM-антенны и встроенный аккумулятор увеличенной емкости. Максимальный функционал...',
                  button: 'Посмотреть'
               },
               {
                  title: 'Модуль слежения <br> СИГНАЛ S-2651',
                  image: 'images/catalog/tracking-module/signal.png',
                  text: 'Новая модель ГЛОНАСС-трекера линейки СИГНАЛ, наделенная максимальным функционалом и улучшенными техническими...',
                  button: 'Посмотреть'
               },
               {
                  title: 'Модуль слежения <br> СИГНАЛ S-2652',
                  image: 'images/catalog/tracking-module/signal.png',
                  text: 'Аппаратура спутниковой навигации (АСН). Соответствует Постановлению Правительства РФ №153 (ТР ТС 018/2011). Оборудование...',
                  button: 'Посмотреть'
               },
               {
                  title: 'Модуль слежения <br> СИГНАЛ S-2653',
                  image: 'images/catalog/tracking-module/signal.png',
                  text: 'ГЛОНАСС-трекер серии СИГНАЛ с двумя интерфейсами CAN. ',
                  button: 'Посмотреть'
               },
               {
                  title: 'Модуль слежения <br> Galileosky 7x',
                  image: 'images/catalog/tracking-module/galileosky-7x.png',
                  text: 'Программируемый GPS/ГЛОНАСС терминал с гибким функционалом.',
                  button: 'Посмотреть'
               },
               {
                  title: 'Модуль слежения <br> Galileosky Base Block Iridium',
                  image: 'images/catalog/tracking-module/galileosky-iridium.png',
                  text: 'Base Block Iridium – спутниковый GPS/ГЛОНАСС терминал с возможностью передачи координат через спутниковый канал связи...',
                  link: '#',
                  button: 'Посмотреть'
               },

            ]
         },
      },

   ]
}

const pageContent = shallowRef([]);
const dbPath = ref('')

const isAdmin = ref(false)
const globalLoading = ref(false)


export {pages, pageContent, isAdmin, dbPath, globalLoading}
