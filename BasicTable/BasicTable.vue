<template>
  <table class="tableStyle" cellspacing="0" cellpadding="0" ref="table">
    <thead>
      <tr class="theadStyle">
        <th v-for="item in columns" class="theadtd">
          {{ item.title }}
          <i v-if="item.filter" @click="() => sortUp(item)" class="triangle_up"></i>
          <i v-if="item.filter" @click="() => sortDown(item)" class="triangle_down"></i>
        </th>
      </tr>
    </thead>
    <tbody v-if="dataSource.length !== 0">
      <tr v-for="items in dataSource" 
          @click="() => clickTr(items)"
          @mouseover="() => handleHoverEvent(items)">
        <td v-for="(value,key) in items" class="tdStyle" 
            v-if="key !== 'key'">
          {{ value }}
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr class="emptyBlock">
        <td colspan="3" class="tdStyle">{{ emptyText }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import TableStore from './TableStore'
  import TableLayout from './TableLayout'
  export default {
    name: 'BasicTable',
    props: {
      dataSource: {
        required: true
      },
      columns: {
        required: true
      },
      emptyText: {
        default: '没有数据'
      },
      stripe: {
        default: true
      },
      height: [String, Number]
    },
    data () {
      const store = new TableStore(this)
      const layout = new TableLayout({table: this})
      return {
        store,
        layout
      }
    },
    computed: {
      size () {
        return this.dataSource.length + 1
      }
    },
    mounted () {
      // console.log(this.store.mutations)
      this.doLayout()
      this.store.commit('init')
    },
    methods: {
      sortDown (item) {
        let keyVal = item.key
        console.log(keyVal)
        this.dataSource.sort((a, b) => {
          return b[keyVal] - a[keyVal]
        })
      },
      sortUp (item) {
        let keyVal = item.key
        console.log(keyVal)
        this.dataSource.sort((a, b) => {
          return a[keyVal] - b[keyVal]
        })
      },
      clickTr (items) {
        this.store.commit('handleRowClick')
      },
      doLayout () {
        this.layout.setHeight(this.height)
      },
      handleHoverEvent (row) {
        this.store.commit('handleHoverEvent', row)
      }
    },
    watch: {
      dataSource (val, oldVal) {
        console.log('haha', oldVal)
        this.dataSource = val
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tableStyle
    cellspacing: 0
    cellpadding: 0
    background: white
    text-align: center
    width: 800px
    .theadStyle
      background: linear-gradient(0deg, #eee, #fefefe)
      height: 40px
      border: 1px solid black
      .theadTd
        position: relative
        .triangle_down
          width: 0
          height: 0
          border-width: 8px 8px 0
          border-style: solid
          border-color: #333 transparent transparent 
          position: absolute
          top: 20px
          cursor: pointer
        .triangle_up
          width: 0
          height: 0
          border-width: 0 8px 8px
          border-style: solid
          border-color: transparent transparent #333
          position: absolute
          top: 8px
          cursor: pointer
    .tdStyle
      border-bottom: 1px solid #ccc
      height: 40px
      transition: all linear 0.2s
</style>
