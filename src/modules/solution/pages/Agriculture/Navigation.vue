<template>
   <AppPage noOffset>
      <HeadImage :src="image" class="image"/>

      <TextBlock>
         <p>Мы предлагаем навигационные дисплеи от начального до продвинутого уровня, способные работать в жестких
            полевых условиях. Функционал дисплеев соответствует современным требованиям и закрывает все возможные
            потребности пользователей.</p>
      </TextBlock>

      <div>
         <AppTitle>Выберите дисплей с нужным вам функционалом</AppTitle>
         <AppList type="empty" gap="5" :items="displaysList" itemsPerRow="4"/>
      </div>

      <div>
         <AppTitle>Используйте нужный вам шаблон</AppTitle>
         <TextWithImage image="solution/pages/navigation/template.png">
            Сохраняйте до 20 групп шаблонов на каждом поле. Группы шаблонов можно загрузить с помощью мастера выбора шаблонов, а затем быстро и легко прокрутить шаблоны с помощью нажатия единственной кнопки. Это упрощает процесс выбора нужного шаблона для каждого участка поля. Группировка доступна для шаблонов «Прямой AB», «Идентичная кривая», «Адаптивная кривая» и «Круговое движение»
         </TextWithImage>
      </div>
   </AppPage>
</template>

<script>
import image from '../../../../assets/images/solution/pages/navigation/navigation.jpg'

import HeadImage from "../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../components/Sections/TextBlock.vue";
import AppPage from "../../../../components/App/AppPage.vue";
import AppTitle from "../../../../components/AppTitle.vue";
import AppList from "../../../../components/App/AppList.vue";
import TextWithImage from "../../../../components/Sections/TextWithImage.vue";

const displaysList = [
   {name: 'solution/cards/displays/at5.png', text: 'AT5'},
   {name: 'solution/cards/displays/compass.png', text: 'Compass'},
   {name: 'solution/cards/displays/incommand-800.png', text: 'InCommand 800'},
   {name: 'solution/cards/displays/incommand-1200.png', text: 'InCommand 800'},
]

export default {
   name: "Navigation",
   components: {TextWithImage, AppList, AppTitle, AppPage, TextBlock, HeadImage},
   setup() {
      return {image, displaysList}
   }
}
</script>
