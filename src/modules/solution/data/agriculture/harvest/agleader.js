const basePath = 'solution/pages/harvest/'
const imageWithPoints = {
   imagePath: `${basePath}/combine.png`,
   points: [
      {left: 39, top: 17, text: 'Тензодатчик'},
      {left: 79, top: 26, text: 'Навигационный приемник AgLeader 7500'},
      {left: 42, top: 43, text: 'Монитор InCommand 800/1200'},
      {left: 80, top: 50, text: 'Модуль измерения влажности'},
      {left: 59, top: 58, text: 'Датчик положения жатки'},
   ]
}
const systemItems = [
   {name: `${basePath}/agleader/system-item1.png`, text: 'Дисплей InCommand 800/1200'},
   {name: `${basePath}/agleader/system-item2.png`, text: 'Навигационный приемник AgLeader 7500'},
   {name: `${basePath}/agleader/system-item3.jpg`, text: 'Тензо датчик'},
   {name: `${basePath}/agleader/system-item4.jpg`, text: 'Модуль измерения влажности'},
   {name: `${basePath}/agleader/system-item5.jpg`, text: 'Датчик положения жатки'},
]
const features = [
   {
      icon: {name: 'signedDocs', shift: {top: 4, left: -14}},
      text: 'Сбор данных о параметрах зерновой массы в реальном времени ',
   },
   {
      icon: {name: 'catalog', shift: {top: -8, left: 3}},
      text: 'Детализированные отчеты о намолоте',
   },
   {
      icon: {name: 'scheme', shift: {top: -6, left: 0}},
      text: 'Принятие решений о сортировке товарных партий зерна по влажности на ходу ',
   },
   {
      icon: {name: 'control', shift: {top: -1, left: -11}},
      text: 'Документирование ошибок управления посевом',
   },
   {
      icon: {name: 'cardsAndPen', shift: {top: -14, left: 3}},
      text: 'Оптимизация производительности и логистики уборочного процесса',
   },
   {
      icon: {name: 'gearAndTool', shift: {top: -9, left: 3}},
      text: 'Информация о переполнении и выгрузке бункера',
   },
]
const soft = ['finiti', 'sms']

export {imageWithPoints, systemItems, features, soft}
