const title = 'Wialon'

const about = {
   title: 'Wialon — система мониторинга транспорта и стационарных объектов',
   text: 'Поддерживает более 2 600 типов модулей слежения и датчиков. Контролируйте автомобили, спецтехнику, стационарные объекты, людей – для каждого проекта найдется подходящие оборудование. А дополнительные датчики покажут температуру, вес, наклон, положение механизмов и десятки других параметров мониторинга.',
   img: 'program-solution/laptop-wialon.png'
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -13}},
      title: '',
      text: 'Онлайн GPS/ГЛОНАСС мониторинг',
   },
   {
      icon: {name: 'cardsAndPen', shift: {top: -10, left: 7}},
      title: '',
      text: 'Маршрутизация',
   },
   {
      icon: {name: 'identify', shift: {top: -7, left: -5}},
      title: '',
      text: 'Мониторинг активности сотрудников',
   },
   {
      icon: {name: 'monitoring', shift: {top: 3, left: 7}},
      title: '',
      text: 'Видеомониторинг',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 4}},
      title: '',
      text: 'Контроль территорий',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -17, left: -7}},
      title: '',
      text: 'Контроль топлива',
   },
]

const systemItems = [
   {
      title: 'Wialon Hosting',
      listTitle: 'Преимущества системы',
      description: {
         subtitle: 'Облачное решение',
         text: 'Позволяет избежать затрат, связанных с приобретением, установкой и администрированием сервера и серверного ПО.'
      },
      items: [
         {name: 'program-solution/gear.svg', text: '<b>Бесплатные серверы</b><br>Решения администрируются в дата-центрах Wialon. Безопасное хранение данных обеспечивается на серверах в России и Нидерландах.'},
         {name: 'program-solution/gear.svg', text: '<b>Скорость</b><br>Запуск сервиса и добавление расширений в течение часа.'},
         {name: 'program-solution/gear.svg', text: '<b>Регулярные обновления</b><br>Ежемесячное добавление новых функции и сотрудничество с партнерами в разработке.'},
         {name: 'program-solution/gear.svg', text: '<b>Стабильность работы</b><br>Гарантия стабильности облачных решений не менее 99,5% и прописывание этого в SLA.'},
      ]
   },
   {
      title: 'Wialon Local',
      listTitle: 'Преимущества системы',
      description: {
         subtitle: 'Серверное решение',
         text: 'Подходит для операторов, имеющих от ста до нескольких тысяч объектов, и может устанавливаться на серверах средних мощностей.'
      },
      items: [
         {name: 'program-solution/gear.svg', text: '<b>Доступ к серверам</b><br>Данные, бэкапы и настройки сервера всегда под рукой. Умеренная нагрузка — до 20 000 объектов размещаются на сервере средней мощности.'},
         {name: 'program-solution/gear.svg', text: '<b>Встроенные метрики</b><br>Не требуется использовать сторонние системы для мониторинга работы сервера. Простое администрирование.'},
         {name: 'program-solution/gear.svg', text: '<b>Автоматизация</b><br>Обновления, анализ проблем и перезапуск Wialon могут проводиться без участия интегратора.'},
         {name: 'program-solution/gear.svg', text: '<b>Безопасность данных</b><br>Двухфакторная авторизация и защита от взлома методом полного перебора.'},
      ]
   },
]

const featuresBreakPoints = {992: 3, 768: 2, default: 1}


export default {title, about, features, featuresBreakPoints, systemItems}
