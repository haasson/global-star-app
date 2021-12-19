const colorsMap = {
   orange: '#FFD157',
   blue: '#102F51'
}

const getColorByName = (color) => colorsMap[color]

const descriptionToHTML = (description) => {
   console.log(description)
   if (!description.blocks) return ''
   return description.blocks.map(block => {
      console.log(block)
      console.log(`<p>${block.data.text}</p>`)
      if (block.type === 'paragraph') return `<p>${block.data.text}</p>`
   }).join('')
}

export {getColorByName, descriptionToHTML}
