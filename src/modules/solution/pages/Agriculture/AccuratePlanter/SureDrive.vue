<template>
   <AppPage :topOffset="false">
      <HeadImage
          :src="image"
          class="image"
          title="SureDrive"
          titleType="simple"
          pageName="Sure Drive"
      />

      <TextBlock>
         <p>Оснащение штатных высевающих аппаратов индивидуальными электрическими
            приводами SureDrive позволяет значительно улучшить качество посева. Неровный профиль поверхности поля, по
            которому перемещаются приводные
            колеса, колебания элементов трансмиссии теперь не имеют значения. Привод устанавливается более чем на 30
            моделей сеялок точного высева.</p>
      </TextBlock>

      <TextWithImage image="solution/pages/accurate-planter/sure-drive.png" imagePosition="left">
         <p class="list-title">Особенности:</p>
         <ul class="unordered-list">
            <li>Автоматическое отключение секций</li>
            <li>Дифференцированный посев (с переменной нормой)</li>
            <li>Компенсация нормы на разворотах и обсевах</li>
            <li>Расширенный мониторинг высева</li>
         </ul>
      </TextWithImage>

      <AppList
          type="empty"
          gap="5"
          :items="sureImages"
          :itemsPerRow="itemsPerRow"
          :isSlider="itemsPerRow < 3"
      />

      <VideoSection :src="video" />

      <div>
         <AppTitle mobileBg="orange">Дисплей</AppTitle>
         <TextWithImage image="solution/pages/accurate-planter/planter.png">
            <p class="list-title">Особенности:</p>
            <ul class="unordered-list">
               <li>Контроль параметров высева на всех этапах процесса</li>
               <li>Точный семенной интервал</li>
               <li>Автоматическое (по GPS) включение/выключение подачи семян</li>
               <li>Мновенная смена норм высева семян по зонам карт - предписаний и вручную</li>
               <li>Одинаковая глубина заделки семян индивидуально в каждом рядке</li>
            </ul>
         </TextWithImage>
      </div>

      <SoftSection :items="soft" titlePosition="left" />
   </AppPage>
</template>

<script>
import image from "../../../../../assets/images/solution/pages/accurate-planter/head-image.jpg";
import video from "../../../../../assets/video/sure-drive.mp4";

import useItemsPerRow from "../../../../../composable/itemsPerRow.js";
import AppPage from "../../../../../components/App/AppPage.vue";
import HeadImage from "../../../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../../../components/Sections/TextBlock.vue";
import TextWithImage from "../../../../../components/Sections/TextWithImage.vue";
import AppList from "../../../../../components/App/AppList.vue";
import AppTitle from "../../../../../components/App/AppTitle.vue";
import SoftSection from "../../../../../components/Sections/SoftSection.vue";
import VideoSection from "../../../../../components/Sections/VideoSection.vue";

const sureImages = [
   {name: 'solution/pages/accurate-planter/sure1.png', text: 'Автоматическое отключение секций'},
   {name: 'solution/pages/accurate-planter/sure2.png', text: 'Дифференцированный посев <br> (переменная норма высева)'},
   {name: 'solution/pages/accurate-planter/sure3.png', text: 'Компенсация нормы высева <br> на поворотах'},
]

const soft = ['finiti', 'sms']

export default {
   name: "SureDrive",
   components: {VideoSection, SoftSection, AppTitle, AppList, TextWithImage, TextBlock, HeadImage, AppPage},
   setup() {
      const {itemsPerRow} = useItemsPerRow({992: 3, 568: 2, default: 1})

      return {image, video, sureImages, soft, itemsPerRow}
   }
}
</script>

<style lang="scss" scoped>
.list-title {
   margin-bottom: 10px;
}
</style>
