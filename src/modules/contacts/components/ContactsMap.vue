<template>
   <PageSection>
      <div class="map-wrap">
         <yandex-map
             :settings="settings"
             :coords="coords"
             :zoom="18"
             :controls="[]"
             class="map"
         >
            <ymap-marker
                marker-id="1"
                marker-type="placemark"
                :coords="coords"
                :icon="markerIcon"
                :hint-content="hintContent"
            ></ymap-marker>
         </yandex-map>
      </div>
   </PageSection>
</template>

<script>
import {yandexMap, ymapMarker} from "vue-yandex-maps";
import PageSection from "../../../components/Providers/PageSection.vue";

export default {
   name: "ContactsMap",
   components: {PageSection, yandexMap, ymapMarker},
   setup() {
      const settings = {
         apiKey: '0ba7b3a8-0421-492e-905e-5de49186d28e',
         lang: 'ru_RU',
      }
      const coords = [53.33095, 83.78033]
      const markerIcon = {
         layout: 'default#imageWithContent',
         imageHref: '',
         imageSize: [24, 24],
         imageOffset: [-12, -24],
         contentLayout: `
            <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M11.9996 22C11.9996 22 3.99957 17.5 3.99957 10.2C3.97288 9.13272 4.16009 8.07088 4.55016 7.07708C4.94023 6.08327 5.52527 5.17759 6.27081 4.41341C7.01636 3.64923 7.90732 3.042 8.89119 2.62752C9.87507 2.21303 10.932 1.99967 11.9996 2C13.0672 1.99967 14.1241 2.21303 15.1079 2.62752C16.0918 3.042 16.9828 3.64923 17.7283 4.41341C18.4739 5.17759 19.0589 6.08327 19.449 7.07708C19.8391 8.07088 20.0263 9.13272 19.9996 10.2C19.9996 17.5 11.9996 22 11.9996 22Z" stroke="black" stroke-width="2" stroke-linecap="square"/>
             <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="square"/>
             </svg></div>
        `
      }
      const hintContent = `
         <div style='font-size: 16px; line-height: 19px; font-weight: 600; padding: 8px;'>
            ул. Короленко, д.104 <br>
            8 этаж, оф. 813 <br>
            пн-пт, 09:00-18:00 <br>
            +7(800)-700-61-24
         </div>
      `

      return {settings, coords, markerIcon, hintContent}
   }
}
</script>

<style scoped>
.map-wrap {
   border: 1px solid var(--black);
   height: 600px;
   touch-action: auto;
}

.map {
   height: calc(100% - 1px);
}
</style>
