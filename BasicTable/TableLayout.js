class TableLayout {
  constructor (options) {
    this.table = null
    this.store = null
    this.height = null
    for (let name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name]
      }
    }
  }
  setHeight (value) {
    const el = this.table.$el
    if (typeof value === 'number') {
      el.style['height'] = value + 'px'
    } else if (typeof value === 'string') {
      el.style['height'] = ''
    }
  }
}
export default TableLayout
