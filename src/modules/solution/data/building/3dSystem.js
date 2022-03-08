const imageWithPoints = {
   imagePath: 'solution/pages/3d-system/excavator.png',
   points: [
      // {left: 8, top: 31, text: 'Sensor1'},
      // {left: 25, top: 81.5, text: 'Sensor2'},
      {left: 48, top: 28, text: 'Датчик положения стрелы'},
      {left: 63, top: 62.5, text: 'WiFi камера в&nbsp;кабину'},
      {left: 64.5, top: 48, text: 'Навигационный контролер'},
      {left: 70, top: 68, text: 'Считыватель карточек водителя'},
      {left: 90.5, top: 59, text: 'Датчик уровня топлива Италон'},
   ]
}

const features = [
   {
      icon: {name: 'ruler', shift: {top: -12, left: -6}},
      text: 'Работа с фиксированным уклоном',
   },
   {
      icon: {name: 'monitor', shift: {top: -5, left: 4}},
      text: 'Обмен информации между оборудованием и офисом',
   },
   {
      icon: {name: 'controller', shift: {top: -12, left: 5}},
      text: 'Контроль глубины выемки грунта',
   },
   {
      icon: {name: 'rulerandpen', width:78, shift: {top: -8, left: -8}},
      text: 'Точность работы до 1 см',
   },
   {
      icon: {name: 'level', width:78, shift: {top: -1, left: -11}},
      text: 'Выравнивание местности',
   },
   {
      icon: {name: 'map', shift: {top: 2, left: -13}},
      text: 'Загрузка 3d карт из сторонних приложений (AutoCAD)',
   },
]

const slides = [
   '../../assets/images/solution/pages/3d-system/1.jpg',
   '../../assets/images/solution/pages/3d-system/2.jpg',
   '../../assets/images/solution/pages/3d-system/3.jpg',
   '../../assets/images/solution/pages/3d-system/2.jpg',
   '../../assets/images/solution/pages/3d-system/3.jpg',
]

const soft = ['fleetrun', 'wialon']

export {imageWithPoints, features, soft, slides}
