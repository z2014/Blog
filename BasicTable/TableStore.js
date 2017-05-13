const TableStore = function (table, initialState) {
  if (!table) {
    throw new Error('Table is required')
  }
  this.table = table
  this.states = {
    columns: []
  }
}
TableStore.prototype.mutations = {
  handleRowClick () {
    this.table.$emit('row-click')
  },
  handleHoverEvent (row) {
    this.table.$emit('row-hover')
  },
  init () {
    var rows = this.table.$refs.table.children[1].children
    console.log(this.table.$refs.table.children[1].children)
    for (let i = 0; i < rows.length; i++) {
      rows[i].onmouseover = () => {
        rows[i].style.background = 'rgba(255, 99, 132, 0.2)'
      }
      rows[i].onmouseout = () => {
        rows[i].style.background = 'white'
      }
    }
  }
}
TableStore.prototype.commit = function (name, ...args) {
  const mutations = this.mutations
  if (mutations[name]) {
    mutations[name].apply(this, args)
  } else {
    throw new Error(`Action not found ${name}`)
  }
}
export default TableStore
