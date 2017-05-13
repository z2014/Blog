import './TableBody.css'

export default {
  name: 'TableBody',
  render () {
    const columns = this.$parent.store.states.columns
    let options = []
    columns.map(function (column) {
      options.push(column['prop'])
    })
    const dataSource = this.$parent.dataSource
    return (
      <table>
        <colgroup>
          {
            this._l(columns, column =>
              <col width={column.width ? column.width : ''} />
            )
          }
        </colgroup>
        {
          dataSource.length > 0
          ? this._l(dataSource, item =>
            <tr on-click={() => this.clickTr(item)}
              on-mouseover={() => this.handleHoverEvent(item)}>
              {
                this._l(options, option =>
                  <td class='tdStyle'>{item[option]}</td>
                )
              }
            </tr>
          ) : <tr>{ this.$parent.emptyText }</tr>
        }
      </table>
    )
  },
  methods: {
    clickTr (items) {
      this.$parent.store.commit('handleRowClick', items)
    },
    handleHoverEvent (row) {
      this.$parent.store.commit('handleHoverEvent', row)
    }
  }
}
