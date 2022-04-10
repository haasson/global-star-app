const gurtamPS = [
   {
      name: 'wialon',
      text: 'Wialon',
   },
   {
      name: 'hecterra',
      text: 'Hecterra',
   },
   {
      name: 'logistics',
      text: 'Logistics',
   },
   {
      name: 'eco-driving',
      text: 'Eco Driving',
   },
   {
      name: 'fleetrun',
      text: 'Fleetrun',
   },
   {
      name: 'wiatag',
      text: 'Wia Tag',
   },
]
const dtmPS = [
   {
      name: 'dtm',
   },
   {
      name: 'dtm-advanced',
   },
]
const agLeaderPS = [
   {
      name: 'finiti',
      link: false
   },
   {
      name: 'sms',
      link: false
   },
];

const otherPS = [
   {
      name: 'field-trace',
      link: false
   }
]

const allPS = [...gurtamPS, ...dtmPS, ...agLeaderPS]
allPS.forEach(el => {
   if (el.link !== false) {
      el.link = `/program-solution/${el.name}`
   }
   else {
      el.link = ''
   }
})

export default {
   gurtamPS,
   dtmPS,
   agLeaderPS,
   allPS: [...allPS, ...otherPS]
}
