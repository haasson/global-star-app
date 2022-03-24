const basePath = 'solution/pages/harvest'
const imageWithPoints = {
   imagePath: `${basePath}/combine.png`,
   points: [
      {left: 40, top: 29, text: 'Дисплей Nir On Board'},
      {left: 79, top: 37, text: 'БИК анализатор Evo NIR'},
      {left: 43, top: 55, text: 'Модем'},
      {left: 48, top: 54, text: 'GPS антенна'},
   ]
}

const systemItems = [
   {name: `${basePath}/dinamica-generale/system-item1.png`, text: 'Дисплей Nir On Board'},
   {name: `${basePath}/dinamica-generale/system-item2.png`, text: 'БИК анализатор Evo NIR'},
   {name: `${basePath}/dinamica-generale/system-item3.png`, text: 'Модем'},
   {name: `${basePath}/dinamica-generale/system-item4.png`, text: 'GPS антенна'},
]

const features = [
   {
      icon: {name: 'flower', shift: {top: 4, left: -13}},
      text: 'Определение химических показателей зеленной массы (влажность, крахмал, протеин, зола, клетчатка, сырой жир)',
   },
   {
      icon: {name: 'scheme', shift: {top: -5, left: 3}},
      text: 'Внесение консервантов в зависимости от качества зеленной массы',
   },
   {
      icon: {name: 'cardsAndPen', shift: {top: -11, left: 3}},
      text: 'Управление размером резки в зависимости от содержания сухого вещества в зеленной массе',
   },
]
const soft = ['field-trace']

export {imageWithPoints, systemItems, features, soft}
