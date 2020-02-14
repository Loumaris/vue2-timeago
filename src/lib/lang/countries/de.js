function formatToLongString (time, type) {
  return `vor ${time} ${type}${ time > 1 ? 's' : ''}`
}

export default {
  short: {
    now: 'gerade eben',
    sec:'s',
    min: 'm',
    hour: 'h',
    day: 'Tag',
  },
  long: {
    now: 'gerade eben',
    sec: time => formatToLongString(time, 'Sekunden'),
    min: time => formatToLongString(time, 'Minuten'),
    hour: time => formatToLongString(time, 'Stunden'),
    day: time => formatToLongString(time, 'Tagen'),
  }
}