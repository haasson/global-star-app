const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 28.5, top: 17, text: 'Фото-видео камера в кузов автомобиля'},
      {left: 24.5, top: 65, text: 'Датчик уровня топлива Италон'},
      {left: 8.5, top: 37, text: 'Трекер (модуль слежения Смарт)'},
      {left: 37.5, top: 44, text: 'Датчик температуры в рефрижераторе'},
      {left: 76, top: 60, text: 'Датчики давления в шинах'},
      {left: 94.5, top: 31, text: 'Датчик открытия дверей'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Контроль мест и времени стоянок',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: -2, left: -5}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Учет и контроль расхода топлива',
   },
   {
      icon: {name: 'document', shift: {top: 2, left: -11}},
      text: 'Выбор оптимального маршрута следования',
   },
   {
      icon: {name: 'wheel', shift: {top: 2, left: 1}},
      text: 'Контроль давления в шинах',
   },
   {
      icon: {name: 'temperature', shift: {top: 4, left: -9}},
      text: 'Температурный контроль груза',
   },
   {
      icon: {name: 'speedometer', shift: {top: -7, left: -12}},
      text: 'Весовой контроль',
   },
]

const soft = ['wialon', 'logistics', 'fleetrun', 'eco-driving']

export {imageWithPoints, features, soft}
