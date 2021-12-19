<template>
<PageSection>
   <p>Компания ГлобалСтар работает с 2013года,  основным направлением деятельности является продажа оборудования и программного обеспечения для транспорта, строительства и сельского хозяйства.</p>
   <p>Наша компания предлагает решения, которые помогают снизить амортизационные расходы на технику, контролировать режим её работы путем установки специального оборудования, исключить возможность хищения ГСМ, нецелевой эксплуатации. А также выйти на принципиально новый уровень использования техники, исключить человеческий фактор, оптимизировать процессы. Мы предлагаем решения, которые позволяют увеличить прибыль  нашим клиентам.</p>

   <AppGallery :slides="slides" />
</PageSection>
</template>

<script>
import PageSection from "../../../components/Providers/PageSection.vue";
import AppGallery from "../../../components/App/AppGallery.vue";
export default {
name: "Company",
   components: {AppGallery, PageSection},

   setup() {
      const slides = [
          '../../assets/images/about/company/1.jpg',
          '../../assets/images/about/company/2.jpg',
          '../../assets/images/about/company/3.jpg',
          '../../assets/images/about/company/1.jpg',
          '../../assets/images/about/company/2.jpg',
          '../../assets/images/about/company/3.jpg',
      ]

      return {slides}
   }
}
</script>

<style lang="scss" scoped>
p {
   margin-bottom: 30px;
   font-size: var(--subtitle-size);
   line-height: 1.5;
}
</style>
