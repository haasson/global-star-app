/*
* This directive is set to element with restricted height,
* and which contains a text block. Directive cut the text which is not visible
* and put '...' at the end
*
* If modifier 'sentence' is enabled text is cut by sentence, not a word.
* The first sentence can not be cut
* */


export default {
   mounted(el, binding = {}) {
      setTimeout(() => {
         if (binding.modifiers.sentence) {
            const realHeight = parseInt(getComputedStyle(el).height)

            while (el.scrollHeight > realHeight) {
               const lastIndex = el.children.length - 1
               if (lastIndex === 0) break
               el.children[lastIndex].parentNode.removeChild(el.children[lastIndex])
            }
         } else {
            const description = el.children[0]

            if (description.scrollHeight > el.scrollHeight) {
               const text = description.textContent.split(' ')

               while (description.scrollHeight > el.scrollHeight) {
                  text.pop()
                  description.textContent = text.join(' ') + '...'
               }
            }
         }
      }, 100)
   },
}
