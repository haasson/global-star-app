const imageWithPoints = {
   imagePath: 'solution/pages/weighting-system/tractor-orange.png',
   points: [
      {left: 58, top: 46, text: 'Дисплей Pegasus&nbsp;2'},
      {left: 62, top: 49, text: 'Соединительная коробка'},
      {left: 45, top: 67, text: 'Датчики давления'},
      {left: 41, top: 50, text: 'Датчики положения стрелы'},
   ]
}

const systemItems = [
   {name: `solution/pages/weighting-system/system-item1.png`, text: 'Дисплей Pegasus&nbsp;2'},
   {name: `solution/pages/weighting-system/system-item2.png`, text: 'Соединительная коробка'},
   {name: `solution/pages/weighting-system/system-item3.png`, text: 'Датчики давления'},
   {name: `solution/pages/weighting-system/system-item4.png`, text: 'Датчики положения стрелы'},
   {name: `solution/pages/weighting-system/system-item5.png`, text: 'Чековый принтер'},
]

const features = [
   {
      icon: {name: 'speedometer', shift: {top: -5, left: -5}},
      text: 'Точное измерение веса исключает перегруз и недогруз, позволяет контролировать производительность машин, снижает затраты на эксплуатацию, позволяет избежать штрафов за перегруз',
   },
   {
      icon: {name: 'cardsAndPen', shift: {top: -5, left: -9}},
      text: 'Информация о результатах весоизмерения доступна на бумажном носителе и в электронных сервисах программах Pegasus Trace Package DIG или Wialon Hosting, что позволит улучшить анализ внутренних процессов  предприятия и вывести его на лучший уровень эффективности. ',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 3}},
      text: 'Нет необходимости в перегонах на станции взвешивания, что позволяет экономить время и деньги',
   },
   {
      icon: {name: 'identify', shift: {top: -3, left: -7}},
      text: 'Установка оборудования и обучение персонала 1&nbsp;рабочий день.',
   },
]

const slides = [
   'solution/pages/weighting-system/1.jpg',
   'solution/pages/weighting-system/2.jpg',
   'solution/pages/weighting-system/3.jpg',
   'solution/pages/weighting-system/4.jpg',
]

const soft = ['wialon']

export {imageWithPoints, systemItems, features, slides, soft}
