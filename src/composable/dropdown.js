import {ref, nextTick, watch} from 'vue'
import useWindowDimensions from "./windowDimensions.js";
import { createPopper } from '@popperjs/core'

export default function useDropdown({placement, offset, breakpoint = 0} = {}) {
  const dropdownEl = ref(null)
  const buttonEl = ref(null)
  const isOpen = ref(false)

  const {width} = useWindowDimensions()

  const dropdownPlacement = ref(placement || 'bottom-start')
  let popper

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

  watch(width, () => {
    if (!popper) return

    if (width.value > breakpoint) {
      nextTick(() => {
        popper.strategy = 'absolute'
        popper.placement = dropdownPlacement.value
      })

    } else {
      nextTick(() => {
        popper.strategy = 'static'
        popper.placement = null
      })
    }
  })

  function setupPopper() {
    popper = new createPopper(buttonEl.value, dropdownEl.value, {
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
