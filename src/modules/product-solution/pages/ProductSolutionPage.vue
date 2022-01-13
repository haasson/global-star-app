<template>
   <AppPage>
      <AppTitle position="left">{{ namePS }}</AppTitle>

      <TextWithImage image="program-solution/laptop.png" imagePosition="left">
         <h3 class="title">Система мониторинга в сельском хозяйстве</h3>
         <p class="text">
            Это простое, но эффективное решение для GPS мониторинга агросектора, позволяющее отслеживать полевые работы на основе телематических данных. Продукт снабжает работников и руководителей сельхозпредприятий прозрачными данными о полях, посевах и их обработках. Эффективно планируйте и оптимизируйте процессы в сельском хозяйстве с актуальной информацией обработки полей.
         </p>
      </TextWithImage>

      <AppList
          type="feature" gap="50"
          :items="features"
          itemsPerRow="2"
          multiline
      />

      <AppList
          type="simple"
          gap="12"
          :items="systemItems"
          itemsPerRow="4"
          :imageHeight="110"
          title="Как работает система?"
          bgColor="orange"
          bgType="half"
      />

   </AppPage>
</template>

<script>
import {useRoute} from "vue-router";
import appConfig from "../../../config/app.config.js";
import AppPage from "../../../components/App/AppPage.vue";
import AppTitle from "../../../components/AppTitle.vue";
import TextWithImage from "../../../components/Sections/TextWithImage.vue";
import AppList from "../../../components/App/AppList.vue";

const features = [
   {
      icon: {name: 'computersmall', shift: {top: 10, left: -13}},
      title: 'Конроль спецтехники',
      text: 'Клиент получае данные о качестве и объеме полевых работ, а также о действиях сельхозтехники и механизаторов',
   },
   {
      icon: {name: 'scheme', shift: {top: -5, left: 2}},
      title: 'Автоматизация учета',
      text: 'Рассчитывает площади обработок полей, затраты топлива, пробег, скорость и другие параметры, экономя время сотрудников.',
   },
   {
      icon: {name: 'map', shift: {top: -2, left: 4}},
      title: 'Достоверность данных',
      text: 'Hecterra точно вычисляет площади обработки полей сложных форм, учитывает перекрытия, пропуски и некультивируемые зоны внутри полей',
   },
   {
      icon: {name: 'control', shift: {top: -2, left: -13}},
      title: 'Интеграция через API',
      text: 'Передавайте и используйте данные из Hecterra в 1С и других учетных системах при помощи API.',
   },
]

const basePath = 'solution/pages/harvest/'
const systemItems = [
   {name: `${basePath}/agleader/system-item1.png`, text: 'Дисплей InCommand 800/1200'},
   {name: `${basePath}/agleader/system-item2.png`, text: 'Навигационный приемник AgLeader 7500'},
   {name: `${basePath}/agleader/system-item3.jpg`, text: 'Тензо датчик'},
   {name: `${basePath}/agleader/system-item4.jpg`, text: 'Модуль измерения влажности'},
]
export default {
   name: "ProductSolutionPage",
   components: {AppList, TextWithImage, AppTitle, AppPage},
   setup() {
      const route = useRoute()
      const namePS = appConfig.programSolutions.allPS.find(el => el.name === route.params.name).title


      return {namePS, features, systemItems}
   }
}
</script>

<style lang="scss" scoped>
.title {
   margin-bottom: 8px;
   font-size: var(--article-text-size);
   font-weight: 600;
}
.text {
   font-size: var(--subtitle-size);
}
</style>
