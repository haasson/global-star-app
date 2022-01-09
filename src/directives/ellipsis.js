/*
* This directive is set to element with restricted height,
* and which contains a text block. Directive cut the text which is not visible
* and put '...' at the end
* */


export default {
   mounted(el) {
      const description = el.children[0]

      if (description.scrollHeight > el.scrollHeight) {
         const text = description.textContent.split(' ')

         while (description.scrollHeight > el.scrollHeight) {
            text.pop()
            description.textContent = text.join(' ') + '...'
         }
      }
   },
}
