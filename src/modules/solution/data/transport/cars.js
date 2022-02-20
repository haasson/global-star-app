const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 8.5, top: 37, text: 'Трекер (модуль слежения Смарт )'},
      {left: 24.5, top: 65, text: 'CAN-log'},
      {left: 28.5, top: 17, text: 'Датчик блокировки двигателя'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Учет и контроль расхода топлива через CAN-шину',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: -2, left: -5}},
      text: 'Контроль мест и времени стоянок',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Выбор оптимального маршрута следования',
   },
   {
      icon: {name: 'document', shift: {top: 2, left: -11}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'wheel', shift: {top: 2, left: 1}},
      text: 'Принудительная блокировка двигателя',
   },
   {
      icon: {name: 'speedometer', shift: {top: -7, left: -12}},
      text: 'Автоматическое формирование путевых листов',
   },
]

const soft = ['wialon', 'logistics', 'fleetrun', 'eco-driving']

export {imageWithPoints, features, soft}
