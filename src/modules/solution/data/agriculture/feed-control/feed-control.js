const basePath = 'solution/pages/feed-control'
const features = [
   {
      icon: {name: 'wallet', shift: {top: -9, left: -5}},
      text: 'Экономия на кормах',
   },
   {
      icon: {name: 'identify', shift: {top: 3, left: 2}},
      text: 'Контроль за работой механизатора',
   },
   {
      icon: {name: 'water', shift: {top: 9, left: -6}},
      text: 'Увеличение надоев',
   },
   {
      icon: {name: 'signedDocs', shift: {top: -4, left: 4}},
      text: 'Учет кормов',
   },
]
const systemItems = [
   {name: `${basePath}/system-item1.png`, text: 'Весовой микрокомпьютер DG600'},
   {name: `${basePath}/system-item2.png`, text: 'Пульт дистанционного управления'},
   {name: `${basePath}/system-item3.png`, text: 'Дублирующее табло'},
   {name: `${basePath}/system-item4.png`, text: 'Комплект ПО DTM'},
]
const videoItems = [
   {src: 'feed1.mp4', poster: 'solution/cards/posters/feed1.jpg'},
   {src: 'feed2.mp4', poster: 'solution/cards/posters/feed2.jpg'},
   {src: 'feed3.mp4', poster: 'solution/cards/posters/feed3.jpg'},
]
const soft = ['dtm', 'dtm-advanced']

export {features, soft, systemItems, videoItems}
