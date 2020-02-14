function formatToLongString (time, type) {
  pluralExt = 'n'
  if(type == 'Tag'){
    pluralExt = 'en'
  }

  return `vor ${time} ${type}${ time > 1 ? pluralExt : ''}`
}

export default {
  short: {
    now: 'gerade eben',
    sec:'s',
    min: 'm',
    hour: 'h',
    day: 'd',
  },
  long: {
    now: 'gerade eben',
    sec: time => formatToLongString(time, 'Sekunde'),
    min: time => formatToLongString(time, 'Minute'),
    hour: time => formatToLongString(time, 'Stunde'),
    day: time => formatToLongString(time, 'Tag'),
  }
}