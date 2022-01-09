<template>
   <AppPage noOffset class="page">
      <HeadImage
          :src="image"
          class="image"
          title="Сопровождение на всех этапах заказа"
          titleType="simple"
      />

      <TextBlock>
         <p>Успешная работа оборудования в большой степени зависит от оперативности реакции сервисной службы на запросы наших клиентов. Сервисная служба ГлобалСтар обеспечит качественное и своевременное сопровождение Ваших запросов.</p>
      </TextBlock>

      <AppList
          type="service"
          gap="36"
          :items="features"
          itemsPerRow="5"
          title="Услуги сервиса"
          bgColor="blue"
          bgType="line"
      />

      <TextWithImage image="service/service.png" imagePosition="left">
         <p>
            Наши специалисты всегда готовы помочь вам!
         </p>
         <p>
            Можете связаться с нами по телефону <span class="nowrap">+7(913)-210-65-94</span>, либо отправив письмо на почту <span class="nowrap">support@gstar.su</span>
         </p>
      </TextWithImage>
   </AppPage>
</template>

<script>
import image from '../../../assets/images/service/head-image.jpg'
import AppPage from "../../../components/App/AppPage.vue";
import HeadImage from "../../../components/Sections/HeadImage.vue";
import TextBlock from "../../../components/Sections/TextBlock.vue";
import AppList from "../../../components/App/AppList.vue";
import TextWithImage from "../../../components/Sections/TextWithImage.vue";

const features = [
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
]
export default {
   name: "ServicePage",
   components: {TextWithImage, AppList, TextBlock, HeadImage, AppPage},

   setup() {

      return {image, features}
   }
}
</script>

<style scoped>

</style>
