const imageWithPoints = {
   imagePath: 'solution/pages/autodrive/tractor-blu.png',
   points: [
      {left: 48, top: 2.5, text: 'Приемник AgLeader 7500'},
      {left: 54, top: 23, text: 'Дисплей InCommand 800G'},
      {left: 58.5, top: 33, text: 'Контроллер SteerCommand Z2'},
      {left: 65.5, top: 27, text: 'Электромотор SteadySteer'},
   ]
}

const systemItems = [
   {name: `solution/pages/autodrive/system-item1.png`, text: 'Дисплей InCommand 800G'},
   {name: `solution/pages/autodrive/system-item2.png`, text: 'Навигационный приемник AgLeader 7500'},
   {name: `no-image.png`, text: 'Гидрораспределитель'},
   {name: `solution/pages/autodrive/system-item4.png`, text: 'Навигационный контроллер SteerCommand Z2'},
   {name: `no-image.png`, text: 'Датчик угла поворота полурамы'},
]

const signals = [
   {title: 'RTK', period: '1 месяц', price: '7000₽'},
   {title: 'RTK', period: '3 месяца', price: '18000₽'},
   {title: 'RTK', period: '6 месяцев', price: '32000₽'},
]

export {imageWithPoints, signals, systemItems}
