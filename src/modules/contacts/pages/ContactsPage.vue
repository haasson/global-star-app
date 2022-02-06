<template>
   <AppPage>
      <ContactsMap />

      <div class="contacts">

         <PageSection>
            <div class="flex header">
               <div>Отдел продаж</div>
               <div>Отдел сервиса</div>
               <div>Отдел бухгалтерии</div>
            </div>
         </PageSection>

         <AppAlert fontSize="medium">
            <div class="flex">
               <div>
                  <p class="title-contacts">Отдел продаж</p>
                  <div class="phone">
                     <p>sales@gstar.su</p>
                     <p>+7(962)-791-75-95</p>
                  </div>
               </div>
               <div>
                  <p class="title-contacts">Отдел сервиса</p>
                  <div class="phone">
                     <p>support@gstar.su</p>
                     <p>+7(913)-210-65-94</p>
                  </div>
               </div>
               <div>
                  <p class="title-contacts">Отдел бухгалтерии</p>
                  <div class="phone last">
                     <p>info@gstar.su</p>
                     <p>+7(963)-500-85-90</p>
                  </div>
               </div>
            </div>
         </AppAlert>
      </div>
   </AppPage>
</template>

<script>
import AppPage from "../../../components/App/AppPage.vue";
import ContactsMap from "../components/ContactsMap.vue";
import AppAlert from "../../../components/App/AppAlert.vue";
import PageSection from "../../../components/Providers/PageSection.vue";

export default {
   name: "ContactsPage",
   components: {PageSection, AppAlert, ContactsMap, AppPage},
}
</script>

<style lang="scss" scoped>
.flex {
   display: flex;
   & > div {
      width: calc(100%/3);
   }
}

.header {
   text-align: center;
   font-size: var(--title-size);
   margin-bottom: 20px;
}
.title-contacts{
   display: none;
   margin-bottom: 8px;
   font-size: var(--title-size);
   font-weight: 500;
}

@media(max-width: 768px) {
   .header {
      display: none;
   }
   .title-contacts {
      display: block;
   }
   .flex {
      flex-direction: column;
      align-items: center;
      & > div {
         width: 100%;
      }
   }
   .phone {
      margin-bottom: 24px;
      &.last {
         margin-bottom: 0;
      }
   }
}

</style>
