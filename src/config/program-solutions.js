const gurtamPS = [
   {
      name: 'wialon',
      text: 'Wialon',
      title: 'Wialon'
   },
   {
      name: 'hecterra',
      text: 'Hecterra',
      title: 'Hecterra'
   },
   {
      name: 'logistics',
      text: 'Logistics',
      title: 'Logistics'
   },
   {
      name: 'eco-driving',
      text: 'Eco Driving',
      title: 'Eco Driving'
   },
   {
      name: 'fleetrun',
      text: 'Fleetrun',
      title: 'Fleetrun'
   },
   {
      name: 'wia-tag',
      text: 'Wia Tag',
      title: 'Wia Tag'
   },
]
const dtmPS = [
   {
      name: 'dtm',
      title: 'DTM'
   },
   {
      name: 'dtm-advanced',
      title: 'DTM Advanced'
   },
]
const agLeaderPS = [
   {
      name: 'finiti',
      title: 'AgFiniti'
   },
   {
      name: 'sms',
      title: 'SMS'
   },
];

const otherPS = [
   {
      name: 'field-trace'
   }
]

const allPS = [...gurtamPS, ...dtmPS, ...agLeaderPS]
allPS.forEach(el => {
   el.link = `/program-solution/${el.name}`
})

export default {
   gurtamPS,
   dtmPS,
   agLeaderPS,
   allPS: [...allPS, ...otherPS]
}
