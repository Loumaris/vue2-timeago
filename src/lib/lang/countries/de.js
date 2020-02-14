function formatToLongString (time, type) {
  return `vor ${time} ${type}${ time > 1 ? 'n' : ''}`
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