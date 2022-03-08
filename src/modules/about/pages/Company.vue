<template>
   <AppPage class="company-page">
      <TextBlock>
         <p>Компания ГлобалСтар работает с 2013 года, основным направлением деятельности является продажа оборудования и
            программного обеспечения для транспорта, строительства и сельского хозяйства.</p>
         <p class="text-big">Наша компания предлагает решения, которые помогают снизить амортизационные расходы на технику,
            контролировать режим её работы путем установки специального оборудования, исключить возможность хищения ГСМ,
            нецелевой эксплуатации. А также выйти на принципиально новый уровень использования техники, исключить
            человеческий фактор, оптимизировать процессы. Мы предлагаем решения, которые позволяют увеличить прибыль
            нашим клиентам.</p>
      </TextBlock>

      <AppGallery :slides="slides"/>

      <TextBlock>
         <p class="text-small">Наша компания предлагает решения, которые помогают снизить амортизационные расходы на технику,
            контролировать режим её работы путем установки специального оборудования, исключить возможность хищения ГСМ,
            нецелевой эксплуатации. А также выйти на принципиально новый уровень использования техники, исключить
            человеческий фактор, оптимизировать процессы. Мы предлагаем решения, которые позволяют увеличить прибыль
            нашим клиентам.</p>
      </TextBlock>

      <AppList
          title='Наши клиенты'
          type='simple'
          :itemsPerRow="itemsPerRow"
          :itemHeight="width > 568 ? 100 : 50"
          :gap="width > 568 ? 20 : 8"
          :items="clients"
          multiline
          class="list-w-bg"
      />

      <div>
         <AppTitle position="left">Наши партнеры</AppTitle>
         <AppList
             type='simple'
             :itemsPerRow="itemsPerRow"
             :itemHeight="width > 568 ? 100 : 50"
             :gap="width > 568 ? 20 : 8"
             :items="partners"
             multiline
         />
      </div>

   </AppPage>

</template>

<script>
import {slides, clients, partners} from '../data/company.js'
import useItemsPerRow from "../../../composable/itemsPerRow.js";
import useWindowDimensions from "../../../composable/windowDimensions.js";
import useLoading from "../../../composable/loading.js";

import PageSection from "../../../components/Providers/PageSection.vue";
import AppGallery from "../../../components/App/AppGallery.vue";
import AppPage from "../../../components/App/AppPage.vue";
import TextBlock from "../../../components/Sections/TextBlock.vue";
import AppList from "../../../components/App/AppList.vue";
import AppTitle from "../../../components/App/AppTitle.vue";


export default {
   name: "Company",
   components: {AppTitle, AppList, TextBlock, AppPage, AppGallery, PageSection},

   setup() {
      useLoading()
      const {width} = useWindowDimensions()
      const {itemsPerRow} = useItemsPerRow({992: 3, default: 2})

      return {width, slides, clients, partners, itemsPerRow}
   }
}
</script>

<style lang="scss">
.company-page {
   p {
      margin-bottom: 30px;
      font-size: var(--subtitle-size);
      line-height: 1.5;
      &:last-child {
         margin-bottom: 0;
      }
   }
   .text-big {
      @media(max-width: 768px) {
         display: none;
      }
   }
   .text-small {
      display: none;
      @media(max-width: 768px) {
         display: block;
      }
   }
   .list-w-bg {
      padding: 40px 0 50px;
      background: linear-gradient(180deg,
          var(--orange) 0,
          var(--orange) calc(100% - 95px),
          transparent calc(100% - 95px),
          transparent 100%
      );
      @media(max-width: 992px) {
         background: var(--orange);
      }
   }
   @media(max-width: 568px) {
      .list .card {
         padding: 12px;
      }
   }

}

</style>
