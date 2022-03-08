const imageWithPoints = {
   imagePath: 'solution/pages/machines-monitoring/truck.png',
   points: [
      {left: 54, top: 65, text: 'Датчик уровня топлива Италон'},
      {left: 64, top: 46, text: 'Считыватель меток'},
      {left: 7, top: 23, text: 'Считыватель карт водителей'},
      {left: 3, top: 34, text: 'Трекер'},
      {left: 78, top: 48, text: 'Датчик поднятия кузова'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
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
      icon: {name: 'speedometer', shift: {top: -5, left: -5}},
      text: 'Весовой контроль',
   },
   {
      icon: {name: 'wheel', shift: {top: 3, left: 2}},
      text: 'Контроль давления в шинах',
   },

]

const soft = ['hecterra', 'wialon']

export {imageWithPoints, features, soft}
