const imageWithPoints = {
   imagePath: 'solution/pages/transport/truck.png',
   points: [
      {left: 8.5, top: 37, text: 'Трекер (модуль слежения Галилео)'},
      {left: 24.5, top: 65, text: 'Датчик уровня топлива Италон'},
      {left: 28.5, top: 17, text: 'Датчики открытия люков'},
      {left: 37.5, top: 44, text: 'Датчик оборотов счетчика ППО'},
      {left: 76, top: 60, text: 'Считыватель карт водителей'},
      {left: 94.5, top: 31, text: 'Отсечной клапан'},
      {left: 79, top: 31, text: 'Блок управления выливом'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Учет и контроль расхода топлива',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: -2, left: -5}},
      text: 'Контроль мест и времени стоянок',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'document', shift: {top: 2, left: -11}},
      text: 'Контроль времени, объема и места выдачи топлива',
   },
   {
      icon: {name: 'wheel', shift: {top: 2, left: 1}},
      text: 'Привязка выданного объема топлива к водителю или технике',
   },
]

const soft = ['wialon', 'fleetrun']

export {imageWithPoints, features, soft}
