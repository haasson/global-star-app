const imageWithPoints = {
   imagePath: 'solution/pages/machines-monitoring/combine/combine.png',
   points: [
      {left: 39, top: 17, text: 'Трекер'},
      {left: 69, top: 28, text: 'Датчик наполнения бункера'},
      {left: 42, top: 43, text: 'Считыватель карт водителей'},
      {left: 70, top: 48, text: 'Считыватель меток'},
      {left: 84, top: 47, text: 'Датчик уровня топлива'},
      {left: 54, top: 79, text: 'Датчик положения  жатки'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 2}},
      text: 'Мониторинг урожайности',
   },
   {
      icon: {name: 'control', shift: {top: -1, left: -11}},
      text: 'Контроль загрузки/выгрузки бункера',
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
      icon: {name: 'monitor', shift: {top: -8, left: 4}},
      text: 'Контроль скоростного режима',
   },
]
const soft = ['hecterra', 'wialon']

export {imageWithPoints, features, soft}
