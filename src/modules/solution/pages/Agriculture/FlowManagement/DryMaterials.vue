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
            <ul class="unordered-list">
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
         <AppTitle mobileBg="orange">Дисплей</AppTitle>
         <TextWithImage image="solution/pages/flow-management/display.png">
            <p class="list-title">Особенности:</p>
            <ul class="unordered-list">
               <li>Точность заданной нормы при помощи GPS/GLONASS</li>
               <li>Автоматическое включение/ выключение подачи удобрений</li>
               <li>Мгновенная смена норм внесения по зонам карт–предписаний</li>
               <li>Одновременное внесение до 8 продуктов с переменной нормой</li>
            </ul>
         </TextWithImage>
      </div>

   <SoftSection :items="soft" />
</template>

<script>
import useLoading from "../../../../../composable/loading.js";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../../components/App/AppList.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";

const soft = ['finiti', 'sms']

export default {
   name: "DryMaterials",
   components: {SoftSection, AppList, TextWithImage, AppTitle, TextBlock},
   setup() {
      useLoading()
      return {soft}
   }
}
</script>

<style lang="scss" scoped>
.list-title {
   margin-bottom: 10px;
}

@media(max-width: 420px){
   .list-title{
      margin-bottom: 5px;
   }
}
</style>
