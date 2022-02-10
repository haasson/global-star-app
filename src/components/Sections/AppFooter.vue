<template>
   <AppMenu v-if="width > 768" :nested="false" />
   <footer>
      <div class="wrapper">
         <div class="inner">
            <div class="address">
               <p>Юридический адрес:</p>
               <p>ООО “ГлобалСтар” 656043, г. Барнаул, <br> ул. Короленко д. 104, оф. 813</p>
               <div class="phone">
                  <span>телефон </span>
                  <a href="tel:+78007006124" class="dark-bg">+7(800)-700-61-24</a>
               </div>
            </div>
            <FloatButton class="float" @onClick="$emit('chatButtonClicked')" />
         </div>
      </div>
   </footer>
</template>

<script>
import useWindowDimensions from "../../composable/windowDimensions.js";
import AppMenu from "./AppMenu.vue";
import FloatButton from "../App/FloatButton.vue";

export default {
name: "AppFooter",
   components: {FloatButton, AppMenu},

   setup() {
      const {width} = useWindowDimensions()

      return {width}
   }
}
</script>

<style lang="scss" scoped>
footer {
   position: relative;
   //z-index: 1;
   padding: 25px 0 40px;
   background-color: var(--blue);
   color: var(--white)
}
.inner {
   position: relative;
}

.address{
   text-align: center;
   font-size: var(--text-size-big);
}
br{
   display: none;
}
.float {
   position: absolute;
   z-index: 3;
   top: -180px;
   right: 10px;
}

@media(max-width: 768px) {
   br {
      display: block;
   }
   .float {
      top: 0;
   }
}
@media(max-width: 568px) {
   footer {
      padding: 25px 0 24px;
   }
}
@media(max-width: 360px) {
   .address {
      font-size: 10px;
   }
}

</style>
