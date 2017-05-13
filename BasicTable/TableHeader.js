import './TableHeader.css'

export default {
  name: 'TableHeader',
  render () {
    const columns = this.$parent.store.states.columns
    return (
      <table class='tableStyle' cellspacing='0' cellpadding='0'>
        <colgroup>
          {
            this._l(columns, column =>
              <col width={column.width ? column.width : ''} />
            )
          }
        </colgroup>
        <thead>
          <tr class='theadStyle'>
            {
              this._l(columns, column =>
                <th class={'theadTd'}>
                  { column.label }
                  { column.sortable
                      ? <span>
                        <i on-click={() => this.sortUp(column)} class={'triangle_up'} />
                        <i on-click={() => this.sortDown(column)} class={'triangle_down'} />
                      </span> : ''
                  }
                </th>
              )
            }
          </tr>
        </thead>
      </table>

    )
  },
  methods: {
    sortDown (item) {
      let keyVal = item.prop
      const data = this.$parent.dataSource
      data.sort((a, b) => {
        return b[keyVal] - a[keyVal]
      })
    },
    sortUp (item) {
      let keyVal = item.prop
      const data = this.$parent.dataSource
      data.sort((a, b) => {
        return a[keyVal] - b[keyVal]
      })
    }
  }
}
