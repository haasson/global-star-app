import {shallowRef} from 'vue'

const pageContent = shallowRef([
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
]);

export {pageContent}
