<template>
   <PageSection class="vacancy-item" v-if="!isHidden || isAdmin">
      <div class="inner" :class="{inactive: isAdmin && isHidden}">
         <div class="content">
            <div @click="toggle" class="head">
               <h3>{{title}}</h3>
               <div class="icon" :style="{transform: isOpen ? 'rotate(225deg)' : 'rotate(45deg)'}" />
            </div>

            <div v-if="isOpen" class="text">
               <AppButtonsGroup v-if="isAdmin" class="buttons">
                  <AppButton @click="$emit('editButtonClicked', id)" color="blue">
                     Редактировать
                  </AppButton>

                  <AppButton @click="$emit('hideButtonClicked', id)" color="blue">
                     {{ isHidden ? 'Показать' : 'Скрыть' }}
                  </AppButton>

                  <AppButton @click="$emit('deleteButtonClicked', id)" color="blue">
                     Удалить
                  </AppButton>
                  <div v-if="isHidden" class="hidden-warning">Вакансия скрыта от пользователей</div>
               </AppButtonsGroup>

               <div class="description" v-html="description"></div>
            </div>
         </div>
      </div>
   </PageSection>
</template>

<script>
import {onMounted, ref} from 'vue'
import {isAdmin} from "../../../store";
import PageSection from "../../../components/Providers/PageSection.vue";
import {computed} from "vue";
import {descriptionToHTML} from "../../../helpers/interface.js";
import AppIcon from "../../../components/App/AppIcon.vue";
import AppButton from "../../../components/App/AppButton.vue";
import AppButtonsGroup from "../../../components/App/AppButtonsGroup.vue";

export default {
   name: "VacancyItem",
   components: {AppButtonsGroup, AppButton, AppIcon, PageSection},
   props: {
      id: {type: String, required: true},
      title: {type: String, required: true},
      text: {type: Object, required: true},
      isHidden: {type: Boolean, default: false}
   },

   setup(props) {
      const description = computed(() => {
         return descriptionToHTML(props.text)
      })

      const isOpen = ref(false)
      const toggle = () => isOpen.value = !isOpen.value

      return {
         isAdmin,

         description,

         isOpen,
         toggle,

      }
   }
}
</script>

<style lang="scss">
.vacancy-item {
   .inner {
      &.inactive {
         opacity: .6;
      }
   }
   .content {
      margin-bottom: 25px;
   }
   .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 60px;
      font-size: var(--title-size);
      background-color: var(--orange);
      cursor: pointer;
   }
   .text {
      padding: 40px;
      font-size: var(--subtitle-size);
   }
   .description {
      & > * {
         margin-bottom: 10px;
      }
      ul {
         list-style: disc;
         margin-left: 30px;
      }
   }
   .buttons {
      margin-bottom: 20px;
   }
   .icon {
      width: 20px;
      height: 20px;
      margin-left: 20px;

      border-right: 2px solid var(--blue);
      border-bottom: 2px solid var(--blue);
      transform: rotate(-45deg);
      transform-origin: center center;
   }
}

@media(max-width: 992px) {
   .vacancy-item {
      .content {
         margin-bottom: 10px;
      }
      .head {
         padding: 30px 50px;
      }
      .text {
         padding: 30px;
      }
   }
}
@media(max-width: 768px) {
   .vacancy-item {
      .head {
         padding: 20px 30px;
      }
      .icon {
         width: 15px;
         height: 15px;
      }
   }
}
@media(max-width: 568px) {
   .vacancy-item {
      .head {
         padding: 15px 25px;
      }
      .text {
         padding: 20px;
      }
   }
}
@media(max-width: 480px) {
   .vacancy-item {
      .text {
         padding: 10px;
      }
      .icon {
         width: 10px;
         height: 10px;
      }
   }
}

</style>
