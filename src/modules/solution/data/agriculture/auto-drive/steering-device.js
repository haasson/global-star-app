const imageWithPoints = {
   imagePath: 'solution/pages/autodrive/tractor-blu.png',
   points: [
      {left: 48, top: 2.5, text: 'Приемник AgLeader 7500'},
      {left: 54, top: 23, text: 'Электромотор SteadySteer'},
      {left: 44, top: 15, text: 'Дисплей InCommand 800G'},
      {left: 65.5, top: 27, text: 'Контроллер SteerCommand Z2'},
   ]
}

const basePath = 'solution/pages/autodrive'
const systemItems = [
   {name: `${basePath}/system-item1.png`, text: 'Дисплей InCommand 800G'},
   {name: `${basePath}/system-item2.png`, text: 'Навигационный приемник AgLeader 7500'},
   {name: `${basePath}/system-item3.png`, text: 'Электромотор SteadySteer'},
   {name: `${basePath}/system-item4.png`, text: 'Навигационный контроллер SteerCommand Z2'},
]

const signals = [
   {title: 'Terrastar L', period: '1 год', price: '650$'},
   {title: 'Terrastar C Pro', period: '3 месяца', price: '1320$'},
]

export {imageWithPoints, systemItems, signals}
