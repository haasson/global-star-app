<template>
   <AppPage>
      <AppList
          title='Gurtam'
          type='soft'
          itemsPerRow="3"
          :items="gurtamItems"
          multiline
          class="list-w-bg"
      />

      <AppList
          title='AgLeader'
          type='soft'
          itemsPerRow="3"
          :items="agLeaderItems"
          multiline
          bgColor="orange"
          bgType="half"
      />
   </AppPage>
</template>

<script>
import AppList from "../../../components/App/AppList.vue";
import AppPage from "../../../components/App/AppPage.vue";

const gurtamItems = [
   {
      name: 'solution/soft/wialon.png',
      text: 'Wialon',
   },
   {
      name: 'solution/soft/hecterra.png',
      text: 'Hecterra',
   },
   {
      name: 'solution/soft/logistics.png',
      text: 'Logistics',
   },
   {
      name: 'solution/soft/eco-driving.png',
      text: 'Eco Driving',
   },
   {
      name: 'solution/soft/fleetrun.png',
      text: 'Fleetrun',
   },
   {
      name: 'solution/soft/wia-tag.png',
      text: 'Wia Tag',
   },
]
const agLeaderItems = [
   {name: 'solution/soft/finiti.png'},
   {name: 'solution/soft/sms.png'},
]
export default {
   name: "ProductSolutions",
   components: {AppPage, AppList},

   setup() {

      return {gurtamItems, agLeaderItems}
   }
}
</script>

<style lang="scss" scoped>
.list-w-bg {
   padding: 40px 0 50px;
   background: linear-gradient(180deg,
       var(--orange) 0,
       var(--orange) calc(100% - 105px),
       transparent calc(100% - 105px),
       transparent 100%
   );
}
</style>
