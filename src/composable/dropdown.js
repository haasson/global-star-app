import { ref, nextTick } from 'vue'
import { createPopper } from '@popperjs/core'

export default function useDropdown({placement, offset} = {}) {
  const dropdownEl = ref(null)
  const buttonEl = ref(null)
  const isOpen = ref(false)

  const dropdownPlacement = ref(placement || 'bottom-start')

  function open() {
    nextTick(() => {
      setupPopper()
    })
    isOpen.value = true
  }

  function close() {
    if (!isOpen.value) return
    isOpen.value = false
  }

  function setupPopper() {
    console.log('set')
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
