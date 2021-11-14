import {shallowRef} from 'vue'

const pageContent = shallowRef([
   {
      name: 'TextBlock',
      props: {
         size: 18,
         text: 'Text block. <br/> weofjopewfjewp'
      },
   },
   {
      name: 'AppTitle',
      props: {
         position: 'right',
         text: 'This is a Title gdrthrthtrhhtrrt iusdg!'
      },
   },
]);

export {pageContent}
