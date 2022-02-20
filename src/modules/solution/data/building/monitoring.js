const imageWithPoints = {
   imagePath: 'solution/pages/3d-system/excavator.png',
   points: [
      // {left: 8, top: 31, text: 'Sensor1'},
      // {left: 25, top: 81.5, text: 'Sensor2'},
      {left: 48, top: 28, text: 'Датчик положения стрелы'},
      {left: 63, top: 62.5, text: 'WiFi камера в&nbsp;кабину'},
      {left: 64.5, top: 48, text: 'Навигационный контролер'},
      {left: 70, top: 68, text: 'Считыватель карточек водителя'},
      {left: 90.5, top: 59, text: 'Датчик уровня топлива'},
   ]
}
const features = [
   {
      icon: {name: 'ruler', shift: {top: -12, left: -6}},
      text: 'Мониторинг работы в режиме реального времени',
   },
   {
      icon: {name: 'monitor', shift: {top: -5, left: 4}},
      text: 'Учет и контроль расхода топлива',
   },
   {
      icon: {name: 'controller', shift: {top: -12, left: 5}},
      text: 'Учет рабочего времени/моточасов',
   },
   {
      icon: {name: 'rulerandpen', width:78, shift: {top: -8, left: -8}},
      text: 'Снижение амортизационного износа техники',
   },
   {
      icon: {name: 'level', width:78, shift: {top: -1, left: -11}},
      text: 'Контроль работы механизмов (стрела, ковш, вилка)',
   },
   {
      icon: {name: 'map', shift: {top: 2, left: -13}},
      text: 'Учет рабочего времени водителей',
   },
]
const soft = ['fleetrun', 'wialon']

export {imageWithPoints, features, soft}
