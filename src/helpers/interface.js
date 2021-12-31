const colorsMap = {
   orange: '#FFD157',
   blue: '#102F51'
}

const getColorByName = (color) => colorsMap[color]

const descriptionToHTML = (description) => {
   if (!description.blocks) return ''
   return description.blocks.map(block => {
      if (block.type === 'paragraph') return `<p>${block.data.text}</p>`
   }).join('')
}

export {getColorByName, descriptionToHTML}
