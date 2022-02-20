import { ref, nextTick } from 'vue'
import { createPopper } from '@popperjs/core'
import useWindowDimensions from "./windowDimensions.js";

export default function useDropdown({placement, offset, breakpoint = 0} = {}) {
  const dropdownEl = ref(null)
  const buttonEl = ref(null)
  const isOpen = ref(false)

  const {width} = useWindowDimensions()

  const dropdownPlacement = ref(placement || 'bottom-start')

  function open() {
    if (width.value > breakpoint) {
      nextTick(() => setupPopper())
    }

    isOpen.value = true
  }

  function close() {
    if (!isOpen.value) return
    isOpen.value = false
  }

  function setupPopper() {
    new createPopper(buttonEl.value, dropdownEl.value, {
      placement: dropdownPlacement.value,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: offset || [0,0]
          }
        },
        {
          name: 'preventOverflow',
          options: {
            altAxis: true
          }
        }
      ]
    })
  }

  return {
    dropdownEl,
    buttonEl,
    isOpen,
    open,
    close
  }
}
