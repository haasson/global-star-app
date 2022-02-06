import useWindowDimensions from "./windowDimensions.js";
import {computed} from "vue";

const useItemsPerRow = (settings) => {
   const {width} = useWindowDimensions()


   const itemsPerRow = computed(() => {
      const currentSettings = settings.value || settings
      let itemsCount = currentSettings.default
      const resolutions = Object.keys(currentSettings)
         .sort((a,b) => +a < +b ? 1 : -1)
         .filter(res => res !== 'default')

      for (let i = 0; i < resolutions.length; i++) {
         if (width.value > resolutions[i]) {
            itemsCount = currentSettings[resolutions[i]]
            break
         }
      }
      return itemsCount
   })

   return {itemsPerRow}
}

export default useItemsPerRow
