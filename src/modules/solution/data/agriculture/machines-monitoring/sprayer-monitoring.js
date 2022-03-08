const imageWithPoints = {
   imagePath: 'solution/pages/machines-monitoring/sprayer.png',
   points: [
      {left: 74, top: 45, text: 'Датчик уровня топлива Италон'},
      {left: 52, top: 27, text: 'Трекер Сигнал 2651'},
      {left: 47, top: 24, text: 'Считыватель карт водителей'},
   ]
}

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -14}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'steeringWheel', shift: {top: 2, left: 5}},
      text: 'Автовождение',
   },
   {
      icon: {name: 'identify', shift: {top: 0, left: -12}},
      text: 'Идентификация водителей/учет рабочего времени',
   },
   {
      icon: {name: 'document', shift: {top: -5, left: 0}},
      text: 'Контроль расхода топлива',
   },
   {
      icon: {name: 'monitor', shift: {top: -8, left: 4}},
      text: 'Контроль скоростного режима',
   },
   {
      icon: {name: 'ruler', shift: {top: -8, left: 4}},
      text: 'Управление высотой стрелы',
   },
   {
      icon: {name: 'water', shift: {top: 4, left: 5}},
      text: 'Управление форсунками: норма выдачи, форма капли',
   },
   {
      icon: {name: 'gearAndTool', shift: {top: -8, left: 4}},
      text: 'Автоматическое отключение секций при перекрытии',
   },
]

const soft = ['hecterra', 'wialon']

export {imageWithPoints, features, soft}
