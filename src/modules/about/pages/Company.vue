<template>
   <AppPage>
      <TextBlock>
         <p>Компания ГлобалСтар работает с 2013года, основным направлением деятельности является продажа оборудования и
            программного обеспечения для транспорта, строительства и сельского хозяйства.</p>
         <p>Наша компания предлагает решения, которые помогают снизить амортизационные расходы на технику,
            контролировать режим её работы путем установки специального оборудования, исключить возможность хищения ГСМ,
            нецелевой эксплуатации. А также выйти на принципиально новый уровень использования техники, исключить
            человеческий фактор, оптимизировать процессы. Мы предлагаем решения, которые позволяют увеличить прибыль
            нашим клиентам.</p>
      </TextBlock>

      <AppGallery :slides="slides"/>

      <AppList
          title='Наши клиенты'
          type='simple'
          itemsPerRow="3"
          itemHeight="100"
          :items="clients"
          multiline
          class="list-w-bg"
      />

      <div>
         <AppTitle position="left">Наши партнеры</AppTitle>
         <AppList
             type='simple'
             itemsPerRow="3"
             itemHeight="100"
             :items="partners"
             multiline
         />
      </div>

   </AppPage>

</template>

<script>
import PageSection from "../../../components/Providers/PageSection.vue";
import AppGallery from "../../../components/App/AppGallery.vue";
import AppPage from "../../../components/App/AppPage.vue";
import TextBlock from "../../../components/Sections/TextBlock.vue";
import AppList from "../../../components/App/AppList.vue";
import AppTitle from "../../../components/AppTitle.vue";

const slides = [
   '../../assets/images/about/company/1.jpg',
   '../../assets/images/about/company/2.jpg',
   '../../assets/images/about/company/3.jpg',
   '../../assets/images/about/company/4.jpg',
   '../../assets/images/about/company/5.jpg',
   '../../assets/images/about/company/6.jpg',
   '../../assets/images/about/company/7.jpg',
   '../../assets/images/about/company/8.jpg',
]
const clients = [
   {name: 'images/simple/1.png'},
   {name: 'images/simple/2.png'},
   {name: 'images/simple/3.png'},
   {name: 'images/simple/4.png'},
   {name: 'images/simple/5.png'},
   {name: 'images/simple/6.png'},
]
const partners = [
   {name: 'images/simple/1.png'},
   {name: 'images/simple/2.png'},
   {name: 'images/simple/3.png'},
   {name: 'images/simple/4.png'},
   {name: 'images/simple/5.png'},
   {name: 'images/simple/6.png'},
]
export default {
   name: "Company",
   components: {AppTitle, AppList, TextBlock, AppPage, AppGallery, PageSection},

   setup() {


      return {slides, clients, partners}
   }
}
</script>

<style lang="scss" scoped>
p {
   margin-bottom: 30px;
   font-size: var(--subtitle-size);
   line-height: 1.5;
}
.list-w-bg {
   padding: 40px 0 50px;
   background: linear-gradient(180deg,
       var(--orange) 0,
       var(--orange) calc(100% - 95px),
       transparent calc(100% - 95px),
       transparent 100%
   );
}
</style>
