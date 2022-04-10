const title = 'DTM IC'

const about = {
   title: 'Программное решение для контроля ежедневного кормления КРС',
   text: 'Разработано для контроля кормления крупнорогатого скота на молочных и мясных фермах. DTM позволяет экономить на кормах, увеличить надои, контролировать складские запасы, облегчить труд зоотехника и механизатора. Программное обеспечение DTM Core версия IC (контроль поедания) – самое совершенное программное решение для контроля процессов ежедневного кормления, разработанное для установки на крупных фермах и молочно-товарных комплексах.',
   img: 'program-solution/laptop-dtmic.png'
}

const features = [
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Ввод компонентов с указанием стоимости и сухого вещества',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Программирование рецептов загрузки',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Контроль загрузки, выгрузки, перемешивания кормовой смеси',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Управление складскими запасами',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Ручная коррекция сухого вещества компонентов',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Отчеты по работе. Интеграция с другими системами 1С, Dairy Comp и др.',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Автоматическая коррекция сухого вещества',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Ведение учета надоя молока',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Управление остатками на кормовом столе',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Форма для уточнения технологических групп',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Возможность создания и контроля премиксов',
   },
   {
      icon: {name: 'gearOk', shift: {top: 3, left: -13}},
      text: 'Отслеживание работы операторов кормосмесителей',
   },
]

const featuresBreakPoints = {992: 3, 768: 2, default: 1}


export default {title, about, features, featuresBreakPoints}
