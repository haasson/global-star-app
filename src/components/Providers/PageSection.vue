<template>
   <BackgroundProvider class="section" :class="{'no-offset': noTopOffset}" v-bind="$attrs"
                       v-if="!editable || data && (isAdmin || isVisible)">

      <div class="wrapper" :class="{'wrapper-editable hidden': isAdmin && editable && !isVisible}">
         <slot :content="data"/>

         <AppButtonsGroup v-if="isAdmin && editable" class="edit-controls">
            <AppButton @click="onClick('edit')" type="icon" icon="edit" class="button"/>
            <AppButton @click="onClick('hide')" type="icon" :icon="isVisible ? 'eye' : 'eyeCrossed'" class="button"/>
            <AppButton @click="onClick('remove')" type="icon" icon="cross" class="button"/>
         </AppButtonsGroup>

      </div>
      <slot name="outside-wrapper"/>

   </BackgroundProvider>
</template>

<script>
import {isAdmin} from "../../store";

import BackgroundProvider from "./BackgroundProvider.vue";
import AppButtonsGroup from "../App/AppButtonsGroup.vue";
import AppButton from "../App/AppButton.vue";
import {useRoute} from "vue-router";
import useDatabase from "../../composable/database";
import {ref, watch} from "vue";

export default {
   name: "PageSection",
   components: {AppButtonsGroup, AppButton, BackgroundProvider},
   props: {
      bgTy: {
         type: String,
         default: ''
      },
      editable: {
         type: Boolean,
         default: false
      },
      sectionId: {
         type: String,
      },
      noTopOffset: {
         type: Boolean,
         default: false
      }
   },
   setup(props, {emit}) {
      console.log(props)

      const sectionId = props.sectionId // Name of section data in DB
      const route = useRoute()
      const dbPath = `pages${route.fullPath}/${sectionId}`
      const {get, put, del, data} = useDatabase()
      if (sectionId) get(dbPath)

      const isVisible = ref(false)

      watch(data, () => {
         if (data.value) {
            console.log(data.value)
            isVisible.value = data.value.visible
         }

      })

      const onClick = (type) => {
         emit('change', type)

         if (type === 'hide') {
            const updates = {}
            updates[dbPath + '/visible'] = !isVisible.value
            put(updates).then(() => get(dbPath))
         } else if (type === 'remove') {
            del(dbPath)
         }

      }


      return {isAdmin, data, isVisible, onClick}
   }
}
</script>

<style lang="scss" scoped>
.section {
   margin: 50px 0;
   flex-grow: 1;

   &.no-offset {
      margin-top: 0;
   }
}

.wrapper {
   position: relative;

   &-editable {
      position: relative;
      border: 2px dashed var(--blue);

      &:before {
         content: 'Эта секция скрыта от пользователей';
         position: absolute;
         left: 0;
         right: 0;
         top: 0;
         bottom: 0;
         z-index: 1;
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: var(--title-size);
         background-color: rgba(#ccc, .8);
      }

   }
}

.edit-controls {
   position: absolute;
   right: 50px;
   top: 0;
   z-index: 1;
   transform: translateY(-50%);
}

.button {
   background-color: var(--orange);
   padding: 15px;
   border-radius: 50%;
   border: 3px solid var(--blue);

   &:hover {
      background-color: var(--dark-orange);
   }
}
</style>
