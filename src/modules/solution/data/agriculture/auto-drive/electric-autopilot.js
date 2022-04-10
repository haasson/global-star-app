const imageWithPoints = {
   imagePath: 'solution/pages/autodrive/tractor-blu.png',
   points: [
      {left: 54, top: 23, text: 'Электрическое рулевое колесо'},
      {left: 45, top: 19, text: 'Терминал управления'},
      {left: 63, top: 42, text: 'Сенсорный модуль'},
      {left: 59, top: 1, text: 'Антенна GNSS'},
   ]
}

const systemItems = [
   {name: `solution/pages/autodrive/electric-item1.png`, text: 'Электрическое рулевое колесо'},
   {name: `solution/pages/autodrive/electric-item2.png`, text: 'Терминал управления'},
   {name: `solution/pages/autodrive/electric-item3.png`, text: 'Сенсорный модуль'},
   {name: `solution/pages/autodrive/electric-item4.png`, text: 'Антенна GNSS'},
]

const features = [
   {
      icon: {name: 'time', shift: {top: 4, left: -13}},
      text: 'Работа от базовой станции РТК',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 3}},
      text: 'Точность 2-3 см',
   },
   {
      icon: {name: 'map', shift: {top: -5, left: 3}},
      text: 'Легкая переустановка',
   },
   {
      icon: {name: 'monitor', shift: {top: -3, left: -13}},
      text: 'Невысокая цена по сравнению с аналогами',
   },
]

const signals = [
   {title: 'RTK', period: '1 месяц', price: '7000₽'},
   {title: 'RTK', period: '3 месяца', price: '18000₽'},
   {title: 'RTK', period: '6 месяцев', price: '32000₽'},
]

export {imageWithPoints, signals, features, systemItems}
