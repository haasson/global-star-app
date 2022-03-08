const imageWithPoints = {
   imagePath: 'solution/pages/machines-monitoring/tractor.png',
   points: [
      {left: 72, top: 27, text: 'Трекер Сигнал 2651'},
      {left: 42, top: 25, text: 'Датчик уровня топлива Италон'},
      {left: 64, top: 29, text: 'Считыватель карт водителей'},
      {left: 25, top: 48, text: 'Считыватель меток'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'control', shift: {top: -1, left: -11}},
      text: 'Идентификация прицепного оборудования',
   },
   {
      icon: {name: 'steeringWheel', shift: {top: 2, left: 5}},
      text: 'Автовождение',
   },
   {
      icon: {name: 'document', shift: {top: -5, left: 0}},
      text: 'Контроль расхода топлива',
   },
   {
      icon: {name: 'identify', shift: {top: 0, left: -12}},
      text: 'Идентификация водителей/учет рабочего времени',
   },
   {
      icon: {name: 'steeringWheel', shift: {top: 2, left: 5}},
      text: 'Параллельное вождение',
   },
]

const soft = ['hecterra', 'wialon']

export {imageWithPoints, features, soft}
