<template>
   <AppPage noOffset class="navigation-page">
      <HeadImage
          :src="image"
          class="image"
          pageName="Навигация"/>

      <TextBlock>
         <p>Мы предлагаем навигационные дисплеи от начального до продвинутого уровня, способные работать в жестких
            полевых условиях. Функционал дисплеев соответствует современным требованиям и закрывает все возможные
            потребности пользователей.</p>
      </TextBlock>

      <div>
         <AppTitle v-if="itemsPerRow !== 1" :mobileBg="true">Выберите дисплей с нужным вам функционалом</AppTitle>
         <AppList
             type="empty"
             gap="5"
             :items="displaysList"
             :itemsPerRow="itemsPerRow"
             :isSlider="itemsPerRow === 1"
             align="center"
             :title="itemsPerRow === 1 && 'Выберите дисплей с нужным вам функционалом'"
             class="list"
             bgColor="orange"
             :bgType="itemsPerRow === 1 ? 'full' : ''"
         />
      </div>

      <RecommendedProducts />

      <div>
         <AppTitle>Используйте нужный вам шаблон</AppTitle>
         <TextWithImage image="solution/pages/navigation/template.png">
            Сохраняйте до 20 групп шаблонов на каждом поле. Группы шаблонов можно загрузить с помощью мастера выбора
            шаблонов, а затем быстро и легко прокрутить шаблоны с помощью нажатия единственной кнопки. Это упрощает
            процесс выбора нужного шаблона для каждого участка поля. Группировка доступна для шаблонов «Прямой AB»,
            «Идентичная кривая», «Адаптивная кривая» и «Круговое движение»
         </TextWithImage>
      </div>
   </AppPage>
</template>

<script>
import image from '../../../../../assets/images/solution/pages/navigation/navigation.jpg'

import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import AppPage from "../../../../../components/App/AppPage.vue";
import AppTitle from "../../../../../components/AppTitle.vue";
import AppList from "../../../../../components/App/AppList.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import useWindowDimensions from "../../../../../composable/windowDimensions.js";
import {computed} from "vue";
import RecommendedProducts from "../../../../../components/Sections/RecommendedProducts.vue";

const displaysList = [
   {name: 'solution/cards/displays/at5.png', text: 'AT5', noShadow: true},
   {name: 'solution/cards/displays/compass.png', text: 'Compass', noShadow: true},
   {name: 'solution/cards/displays/incommand-800.png', text: 'InCommand 800', noShadow: true},
   {name: 'solution/cards/displays/incommand-1200.png', text: 'InCommand 800', noShadow: true},
]

export default {
   name: "Navigation",
   components: {RecommendedProducts, TextWithImage, AppList, AppTitle, AppPage, TextBlock, HeadImage},
   setup() {const {width} = useWindowDimensions()
      const itemsPerRow = computed(() => {
         if (width.value > 568) return 4
         return 1
      })

      return {image, displaysList, itemsPerRow}
   }
}
</script>

<style lang="scss">
//.navigation-page {
//   .list {
//      @media(max-width: 992px) {
//         background: var(--orange);
//         margin-top: 0;
//      }
//   }
//}

</style>
