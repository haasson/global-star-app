const imageWithPoints = {
   imagePath: 'solution/pages/transport/car.png',
   points: [
      {left: 27, top: 42, text: 'Трекер (модуль слежения Смарт )'},
      {left: 31, top: 49, text: 'CAN-log'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -2, left: 6}},
      text: 'Контроль мест и времени стоянок',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: 0, left: -6}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Учет и контроль расхода топлива',
   },
   {
      icon: {name: 'cardsAndPen', width:78, shift: {top: -2, left: -9}},
      text: 'Выбор оптимального маршрута следования',
   },
]

const soft = ['wialon', 'logistics', 'fleetrun', 'eco-driving']

export {imageWithPoints, features, soft}
