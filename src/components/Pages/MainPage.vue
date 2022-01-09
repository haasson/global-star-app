<template>
   <AppTitle position="left">Тестовый заголовок слева</AppTitle>
   <AppTitle>Тестовый заголовок справа</AppTitle>

   <AppList title="Заголовок списка" type="feature" gap="5" :items="items1" itemsPerRow="3" multiline/>
   <AppList title='Услуги сервиса'
            type='service'
            itemsPerRow="5"
            gap="53"
            :items="[
   {
   icon: {
   name: 'guarantee',
   size: {width: 91, height: 91},
   shift: {top: -3, left: 4}
   },
   text: 'Гарантийное и после гарантийное обслуживание продуктов всех брендов',
   },
   {
   icon: {
   name: 'diagnostics',
   size: {width: 86, height: 86},
   shift: {top: 11, left: -14}
   },
   text: 'Диагностика, ремонт, модернизация, реконструкция',
   },
   {
   icon: {
   name: 'warehouse',
   size: {width: 55, height: 91},
   shift: {top: -4, left: 14}
   },
   text: 'Собственный склад запасных частей',
   },
   {
   icon: {
   name: 'staff',
   size: {width: 100, height: 60},
   shift: {top: 15, left: -5}
   },
   text: 'Высоко квалифицированный персонал ',
   },
   {
   icon: {
   name: 'computer',
   size: {width: 100, height: 72},
   shift: {top: 14, left: -16}
   },
   text: 'Удаленная поддержка',
   },
   ]"/>

   <AppList
       title='Gurtam'
       type='soft'
       itemsPerRow="3"
       :items="[
   {
   name: 'solution/soft/wialon.png',
   text: 'Wialon',
   },
   {
   name: 'images/soft/2.png',
   text: 'Hecterra',
   },
   {
   name: 'images/soft/3.png',
   text: 'Logistics',
   },
   {
   name: 'images/soft/4.png',
   text: 'Eco Driving',
   },
   {
   name: 'images/soft/5.png',
   text: 'Fleetrun',
   },
   {
   name: 'images/soft/6.png',
   text: 'Wia Tag',
   },
   {
   name: 'images/soft/7.png',
   },
   ]"
   />

   <AppList
       title='Наши клиенты'
       type='simple'
       itemsPerRow="3"
       itemHeight="100"
       :items="[
   {
   name: 'images/simple/1.png',
   },
   {
   name: 'images/simple/2.png',
   },
   {
   name: 'images/simple/3.png',
   },
   {
   name: 'images/simple/4.png',
   },
   {
   name: 'images/simple/5.png',
   },
   {
   name: 'images/simple/6.png',
   },
   ]"
   />

   <AppList
       type='catalog'
       title='Модули слежения'
       itemsPerRow="4"
       :items="[
   {
   title: 'Модуль слежения <br> СМАРТ S-2421',
   name: 'images/catalog/tracking-module/smart.png',
   text: 'Трекер со встроенными ГЛОНАСС/GPS- и GSM-антеннами, а также встроенной АКБ. Для подключения дополнительного...',
   button: 'Посмотреть'
   },
   {
   title: 'Модуль слежения <br> СМАРТ S-2423',
   name: 'images/catalog/tracking-module/smart.png',
   text: 'Самый продаваемый ГЛОНАСС/GPS-трекер. Оптимальное сочетание функциональности и стоимости. Подходит для большинства задач.',
   button: 'Посмотреть'
   },
   {
   title: 'Модуль слежения <br> СМАРТ S-2425',
   image: 'images/catalog/tracking-module/smart.png',
   text: 'Встроенные ГЛОНАСС/GPS- и GSM-антенны и встроенный аккумулятор увеличенной емкости. Максимальный функционал...',
   button: 'Посмотреть'
   },
   {
   title: 'Модуль слежения <br> СИГНАЛ S-2651',
   image: 'images/catalog/tracking-module/signal.png',
   text: 'Новая модель ГЛОНАСС-трекера линейки СИГНАЛ, наделенная максимальным функционалом и улучшенными техническими...',
   button: 'Посмотреть'
   },
   {
   title: 'Модуль слежения <br> СИГНАЛ S-2652',
   image: 'images/catalog/tracking-module/signal.png',
   text: 'Аппаратура спутниковой навигации (АСН). Соответствует Постановлению Правительства РФ №153 (ТР ТС 018/2011). Оборудование...',
   button: 'Посмотреть'
   },
   {
   title: 'Модуль слежения <br> СИГНАЛ S-2653',
   image: 'images/catalog/tracking-module/signal.png',
   text: 'ГЛОНАСС-трекер серии СИГНАЛ с двумя интерфейсами CAN. ',
   button: 'Посмотреть'
   },
   {
   title: 'Модуль слежения <br> Galileosky 7x',
   image: 'images/catalog/tracking-module/galileosky-7x.png',
   text: 'Программируемый GPS/ГЛОНАСС терминал с гибким функционалом.',
   button: 'Посмотреть'
   },
   {
   title: 'Модуль слежения <br> Galileosky Base Block Iridium',
   image: 'images/catalog/tracking-module/galileosky-iridium.png',
   text: 'Base Block Iridium – спутниковый GPS/ГЛОНАСС терминал с возможностью передачи координат через спутниковый канал связи...',
   link: '#',
   button: 'Посмотреть'
   },

   ]"
   />
</template>

<script>
import {ref} from 'vue'
import PageSection from "../Providers/PageSection.vue";
import AppTitle from "../AppTitle.vue";
import AppList from "../App/AppList.vue";

export default {
   name: "MainPage",
   components: {AppList, AppTitle, PageSection},

   setup() {
      const items1 = ref([
         {
            icon: {
               name: 'time',
               shift: {top: 4, left: -14}
            },
            text: 'Мониторинг работы в режиме реального времени',
         },
         {
            icon: {
               name: 'map',
               shift: {top: -5, left: 7}
            },
            text: 'Мониторинг урожайности',
         },
         {
            icon: {
               name: 'control',
               shift: {top: -1, left: -11}
            },
            text: 'Контроль загрузки/выгрузки бункера',
         },
         {
            icon: {
               name: 'document',
               shift: {top: -5, left: 0}
            },
            text: 'Контроль расхода топлива',
         },
         {
            icon: {
               name: 'identify',
               shift: {top: 0, left: -12}
            },
            text: 'Идентификация водителей/ учет рабочего времени',
         },
         {
            icon: {
               name: 'monitor',
               shift: {top: -8, left: 4}
            },
            text: 'Контроль скоростного режима',
         },
      ])


      return {items1}
   }
}
</script>
