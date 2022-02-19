<template>
   <TextBlock>
      <p>
         Система DirectCommand Liquid предназначена для точного управления нормой расхода, переменной нормы и автоматического отключения, и включения секций на самоходных, прицепных опрыскивателях
      </p>
   </TextBlock>

   <div>
      <AppTitle position="left">Особенности системы</AppTitle>
      <TextWithImage image="no-image.png" imagePosition="left">
         <ul class="unordered-list">
            <li>Контроль параметров внесения растворов СЗР и ЖКУ</li>
            <li>Автоматическое включение/ выключение секций (от 5 до 36)</li>
            <li>Дифференцированное внесение норм расхода по зонам карт– предписаний</li>
         </ul>
      </TextWithImage>
   </div>

   <div>
      <AppTitle mobileBg="orange">Дисплей</AppTitle>
      <TextWithImage image="no-image.png">
         <p class="list-title">Особенности:</p>
         <ul class="unordered-list">
            <li>автоматический регулятор расхода жидкости</li>
            <li>Автоматически включает и выключает секции (до 36)</li>
            <li>Контроль рабочей жидкости и препаратов по картам–предписаний</li>
            <li>Управление на основе расхода или давления</li>
            <li>Поддержка ШИМ или сервоэлектрического управления</li>
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
import SoftSection from "../../../../../components/Sections/SoftSection.vue";

const soft = ['finiti', 'sms']

export default {
   name: "WetMaterials",
   components: {SoftSection, TextWithImage, AppTitle, TextBlock},
   setup() {
      useLoading()
      return {soft}
   }
}
</script>

<style scoped>

</style>
