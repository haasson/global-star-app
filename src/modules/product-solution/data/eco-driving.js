const title = 'Eco Driving'

const about = {
   title: 'Решение для контроля качества вождения',
   text: 'Приложение на базе Wialon, позволяющее оценить профессионализм водителя. Решение дает оценку уровня качества вождения, основываясь на штрафных баллах, полученных за определенные нарушения: превышение скорости, необоснованное ускорение и торможение, ускорение при входе в поворот и т.д',
   img: 'program-solution/laptop-ecodriving.png'
}

const features = [
   {
      icon: {name: 'kanistra', width:78, shift: {top: -14, left: -27}},
      title: 'Экономия топлива',
      text: 'Благодаря снижению количества резких маневров во время вождения, оптимальной скорости движения автомобиля уменьшается количество использованного топлива',
   },
   {
      icon: {name: 'control', shift: {top: -5, left: -15}},
      title: 'Безопасность',
      text: 'Контроль водителей способствует обеспечению безопасности перевозок пассажиров и грузов.',
   },
   {
      icon: {name: 'guaranteeSmall', shift: {top: -5, left: 6}},
      title: 'Экономия на обслуживании',
      text: 'Использование приложения Eco Driving помогает дольше сохранять в надлежащем состоянии транспортные средства и снижает потребность в ремонте.',
   },
   {
      icon: {name: 'identify', shift: {top: -2, left: -8}},
      title: 'Эффективность штата',
      text: 'Система контроля водителей помогает комплексно оценить работу сотрудников. Позволяет быстро выявить и обучить неэффективных водителей, определить лучших и поощрить их.',
   },
]

const systemItems = [
   {
      items: [
         {name: 'program-solution/gear.svg', text: '<b>Параметры оценки качества вождения</b><br>В Wialon пользователь выбирает параметры для контроля качества вождения.'},
         {name: 'program-solution/gear.svg', text: '<b>Система оценки</b><br>В Wialon пользователь указывает количество штрафных баллов для каждого из параметров, формируя систему оценки стиля вождения.'},
         {name: 'program-solution/gear.svg', text: '<b>Анализ поездок</b><br>Приложение показывает оценку водителя, количество нарушений, позволяет построить трек и увидеть, где они были совершены.'},
         {name: 'program-solution/gear.svg', text: '<b>Отчеты</b><br>Данные из отчетов используются, чтобы улучшить качество вождения сотрудников и способствовать обеспечению безопасности перевозок пассажиров и грузов.'},
      ]
   },
]


export default {title, about, features, systemItems}
