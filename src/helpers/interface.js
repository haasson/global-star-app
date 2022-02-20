const colorsMap = {
   orange: '#FFD157',
   blue: '#102F51'
}

const getColorByName = (color) => colorsMap[color]

const descriptionToHTML = (description, allowedBlocks = '') => {
   if (!description.blocks) return ''
   return description.blocks.map(block => {
      if (allowedBlocks && allowedBlocks.indexOf(block.type) === -1) return
      if (block.type === 'paragraph') return `<p>${block.data.text}</p>`
      if (block.type === 'table') {
         const {content, withHeadings} = block.data
         const table = (content || []).map((row, index) => {
            const cols = row.map(col => `<div class="col">${col}</div>`)
            return `<div class="row ${index === 0 && withHeadings ? 'head' : ''}">${cols.join('')}</div>`
         })
         return `<div class="user-table">${table.join('')}</div>`
      }

      if (block.type === 'list') {
         const tag = block.data.style === 'unordered' ? 'ul' : 'ol'
         const list = block.data.items.map(item => {
            return `<li>${item}</li>`
         })
         return `<${tag} class="user-list">${list.join('')}</${tag}>`
      }
   }).join('')
}


export {getColorByName, descriptionToHTML}

