const imageWithPoints = {
   imagePath: 'solution/pages/machines-monitoring/refueller.png',
   points: [
      {left: 6, top: 36, text: 'Трекер Галилео 7.0'},
      {left: 38, top: 53, text: 'Датчик уровня топлива Италон'},
      {left: 38, top: 9, text: 'Датчики открытия люков'},
      {left: 41, top: 67, text: 'Датчик оборотов счетчика ППО'},
      {left: 46, top: 65, text: 'Отсечной клапан'},
      {left: 37, top: 65, text: 'Блок управления выливом'},
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
      icon: {name: 'monitor', shift: {top: -5, left: -9}},
      text: 'Контроль времени, объема и места выдачи топлива',
   },
   {
      icon: {name: 'document', shift: {top: 2, left: -11}},
      text: 'Учет и контроль расхода топлива',
   },
   {
      icon: {name: 'diagnosticsSmall', shift: {top: -2, left: -5}},
      text: 'Снижение амортизационных расходов ТС',
   },
   {
      icon: {name: 'kanistra', width:78, shift: {top: -8, left: -7}},
      text: 'Привязка выданного объема топлива к водителю или технике',
   },
]

const soft = ['hecterra', 'wialon']

export {imageWithPoints, features, soft}
