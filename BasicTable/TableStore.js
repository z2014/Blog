const TableStore = function (table, initialState) {
  if (!table) {
    throw new Error('Table is required')
  }
  this.table = table
  console.log('this', this)
  // for (let i = 0; i < this.$refs.table.tBodies[0].rows.length; i++) {
  //   this.table.$refs.table.tBodies[0].rows[i].onmouseover = () => {
  //     this.table.$refs.table.tBodies[0].rows[i].style.background = 'rgba(255, 99, 132, 0.2)'
  //   }
  //   this.table.$refs.table.tBodies[0].rows[i].onmouseout = () => {
  //     this.table.$refs.table.tBodies[0].rows[i].style.background = 'white'
  //   }
  // }
}
TableStore.prototype.mutations = {
  handleRowClick () {
    // console.log(this)
    this.table.$emit('row-click')
  },
  handleHoverEvent (row) {
    this.table.$emit('row-hover')
  },
  init () {
    console.log('initkkk', this.$refs.)
    for (let i = 0; i < this.$refs.table.tBodies[0].rows.length; i++) {
      this.$refs.table.tBodies[0].rows[i].onmouseover = () => {
        this.$refs.table.tBodies[0].rows[i].style.background = 'rgba(255, 99, 132, 0.2)'
      }
      this.table.$refs.table.tBodies[0].rows[i].onmouseout = () => {
        this.table.$refs.table.tBodies[0].rows[i].style.background = 'white'
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
