const imageWithPoints = {
   imagePath: 'solution/pages/3d-system/excavator.png',
   points: [
      {left: 26, top: 84, text: 'Сенсорный модуль'},
      {left: 4, top: 31, text: 'Сенсорный модуль'},
      {left: 44, top: 26, text: 'Сенсорный модуль'},
      {left: 71, top: 69, text: 'Сенсорный модуль'},
      {left: 62, top: 60, text: 'Дисплей'},
      {left: 69, top: 45, text: '4G антенна'},
      {left: 92, top: 56, text: 'GNSS антенна'},
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
      icon: {name: 'rulerAndPen', width:78, shift: {top: -8, left: -8}},
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
   'solution/pages/3d-system/1.jpg',
   'solution/pages/3d-system/2.jpg',
   'solution/pages/3d-system/3.jpg',
]

const soft = ['fleetrun', 'wialon']

export {imageWithPoints, features, soft, slides}
