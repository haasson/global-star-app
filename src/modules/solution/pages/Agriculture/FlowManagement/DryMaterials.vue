<template>

      <TextBlock>
         <p>Внесение
            удобрений по технологии точного земледелия проводится с переменной
            нормой, то есть на каждый квадратный метр вносится столько удобрений, сколько
            необходимо именно на данном элементарном участке поля.</p>
      </TextBlock>

      <div>
         <AppTitle position="left">Особенности системы</AppTitle>
         <TextWithImage image="solution/pages/flow-management/system-features.png" imagePosition="left">
            <ul>
               <li>1 контроллер для 3 продуктов</li>
               <li>Плановая и фактическая норма внесения</li>
               <li>Скорость вращения вентилятора</li>
               <li>Обороты счетчика дозирующего устройства</li>
               <li>Датчик уровня бункера</li>
               <li>Давление в системе</li>
               <li>Скорость вращения ленты</li>
               <li>Управление дозирующим устройством из кабины</li>
            </ul>
         </TextWithImage>
      </div>

      <div>
         <AppTitle>Дисплей</AppTitle>
         <TextWithImage image="solution/pages/flow-management/display.png">
            <p>Особенности:</p>
            <ul>
               <li>Точность заданной нормы при помощи GPS/GLONASS</li>
               <li>Автоматическое включение/ выключение подачи удобрений</li>
               <li>Мгновенная смена норм внесения по зонам карт–предписаний</li>
               <li>Одновременное внесение до 8 продуктов с переменной нормой</li>
            </ul>
         </TextWithImage>
      </div>

      <div>
         <AppTitle position="left">Программное обеспечение</AppTitle>
         <AppList
             type="soft"
             gap="14"
             :items="soft"
             itemsPerRow="3"
         />
      </div>
</template>

<script>
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppTitle from "../../../../../components/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../../components/App/AppList.vue";

const soft = [{name: 'solution/soft/finiti.png'}, {name: 'solution/soft/sms.png'}]

export default {
   name: "DryMaterials",
   components: {AppList, TextWithImage, AppTitle, TextBlock},
   setup() {
      return {soft}
   }
}
</script>

<style lang="scss" scoped>
ul {
   list-style: disc;
   margin-left: 30px;
}
</style>
