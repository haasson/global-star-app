const basePath = 'solution/pages/harvest'
const imageWithPoints = {
   imagePath: `${basePath}/tractor.png`,
   points: [
      {left: 23, top: 25, text: 'Облачный сервис Field Scale'},
      {left: 26, top: 21, text: 'Коммутационный контролер KALI'},
      {left: 26.5, top: 31, text: 'Сенсорный дисплей'},
      {left: 30, top: 31, text: 'Чековый принтер'},
      {left: 76, top: 55, text: 'Терминал DG 400'},
   ]
}
const systemItems1 = [
   {name: `${basePath}/bunkers-reloader/system-item1.png`, text: 'Терминал DG 400'},
   {name: `${basePath}/bunkers-reloader/system-item2.png`, text: 'Чековый принтер'},
]

const features1 = [
   {
      icon: {name: 'screw', shift: {top: 4, left: 5}},
      text: 'Фиксирование загрузки, выгрузки и общий вес в прицепе',
   },
   {
      icon: {name: 'computerSmall', shift: {top: 9, left: 3}},
      text: 'Вывод информации о загрузках и выгрузках на чековый принтер',
   },
]

const systemItems2 = [
   {name: `${basePath}/bunkers-reloader/system-item3.png`, text: 'Облачный сервис Field Trace'},
   {name: `${basePath}/bunkers-reloader/system-item4.png`, text: 'Коммутационный контролер KALI'},
   {name: `${basePath}/bunkers-reloader/system-item5.png`, text: 'Сенсорный дисплей'},
]

const features2 = [
   {
      icon: {name: 'identify', shift: {top: 4, left: -14}},
      text: 'Сбор данных о параметрах зерновой массы в реальном времени ',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 3}},
      text: 'Детализированные отчеты о намолоте',
   },
   {
      icon: {name: 'tractor', shift: {top: -6, left: 0}},
      text: 'Принятие решений о сортировке товарных партий зерна по влажности на ходу ',
   },
   {
      icon: {name: 'apple', shift: {top: -1, left: -11}},
      text: 'Документирование ошибок управления посевом',
   },
   {
      icon: {name: 'identify', shift: {top: -14, left: 3}},
      text: 'Оптимизация производительности и логистики уборочного процесса',
   },
   {
      icon: {name: 'computerSmall', shift: {top: 5, left: 3}},
      text: 'Информация о переполнении и выгрузке бункера',
   },
]

const soft = ['field-trace']

export {imageWithPoints, systemItems1, systemItems2, features1, features2, soft}
