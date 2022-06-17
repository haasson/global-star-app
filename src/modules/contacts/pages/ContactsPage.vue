<template>
  <AppPage :bottomOffset="width > 992">
    <ContactsMap/>

    <div class="contacts">

      <PageSection>
        <div class="flex header">
          <div>Отдел продаж</div>
          <div>Отдел сервиса</div>
          <div>Отдел бухгалтерии</div>
        </div>
      </PageSection>

      <AppAlert size="medium">
        <div class="flex">
          <div>
            <p class="title-contacts">Отдел продаж</p>
            <div class="phone">
              <a href="mailto:sales@gstar.su">sales@gstar.su</a>
              <a href="tel:+79635249223">+7(963)-524-92-23</a>
            </div>
          </div>
          <div>
            <p class="title-contacts">Отдел сервиса</p>
            <div class="phone">
              <a href="mailto:support@gstar.su">support@gstar.su</a>
              <a href="tel:+79132106594">+7(913)-210-65-94</a>
            </div>
          </div>
          <div>
            <p class="title-contacts">Отдел бухгалтерии</p>
            <div class="phone last">
              <a href="mailto:info@gstar.su">info@gstar.su</a>
              <a href="tel:+79635008590">+7(963)-500-85-90</a>
            </div>
          </div>
        </div>
      </AppAlert>
    </div>
  </AppPage>
</template>

<script>
import useWindowDimensions from '../../../composable/windowDimensions.js'
import useLoading from '../../../composable/loading.js'

import AppPage from '../../../components/App/AppPage.vue'
import ContactsMap from '../components/ContactsMap.vue'
import AppAlert from '../../../components/App/AppAlert.vue'
import PageSection from '../../../components/Providers/PageSection.vue'


export default {
  name: 'ContactsPage',
  components: { PageSection, AppAlert, ContactsMap, AppPage },

  setup() {
    useLoading()
    const { width } = useWindowDimensions()

    return { width }
  }


}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;

  & > div {
    width: calc(100% / 3);
  }

  a {
    display: block;
  }
}

.header {
  text-align: center;
  font-size: var(--title-size);
  margin-bottom: 20px;
}

.title-contacts {
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
    font-size: 16px;
    line-height: 1.2;

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
