const getDefaultColumns = function (options) {
  const column = {}
  for (let name in options) {
    column[name] = options[name]
  }
  return column
}

export default {
  name: 'TableColumn',
  props: {
    prop: String,
    label: String,
    width: String,
    sortable: Boolean
  },
  mounted () {
    let store = this.$parent.store
    const option = getDefaultColumns({
      prop: this.prop,
      label: this.label,
      width: this.width || '180',
      sortable: this.sortable || false
    })
    store.states.columns.push(option)
  }
}
