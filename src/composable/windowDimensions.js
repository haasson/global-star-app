import {ref, watch} from "vue";

const useWindowDimensions = () => {
   const width = ref(window.innerWidth)
   const height = ref(window.innerHeight)

   const isDesktop = ref(width.value > 992)
   const isMobileDevice = ref(width.value <= 992)

   const isTablet = ref(width.value > 480 && width.value <= 992)
   const isSmartphone = ref(width.value <= 480)

   window.addEventListener('resize', e => {
      width.value = e.target.innerWidth
      height.value = e.target.innerHeight
   })

   watch(width, () => {
      isDesktop.value = width.value > 992
      isMobileDevice.value = width.value <= 992

      isTablet.value = width.value > 480 && width.value <= 992
      isSmartphone.value = width.value <= 480
   })

   return {width, height, isDesktop, isTablet, isMobileDevice, isSmartphone}
}

export default useWindowDimensions
