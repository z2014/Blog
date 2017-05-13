<template>
  <table class="tableStyle" cellspacing="0" cellpadding="0" ref="table">
    <table-header></table-header>
    <slot></slot>
    <table-body></table-body>
  </table>
</template>

<script>
  import TableStore from './TableStore'
  import TableLayout from './TableLayout'
  import TableColumn from './TableColumn'
  import TableHeader from './TableHeader'
  import TableBody from './TableBody'

  export default {
    name: 'BasicTable',
    props: {
      dataSource: {
        required: true
      },
      emptyText: {
        default: '没有数据'
      },
      height: [String, Number]
    },
    data () {
      const store = new TableStore(this)
      const layout = new TableLayout({table: this, store: store})
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
      this.doLayout()
      this.store.commit('init')
    },
    methods: {
      doLayout () {
        this.layout.setHeight(this.height)
      }
    },
    watch: {
      dataSource (oldVal, val) {
        this.dataSource = val
      }
    },
    components: {
      TableColumn,
      TableHeader,
      TableBody
    }
  }
</script>

<style lang="stylus" scoped>
  .tableStyle
    cellspacing: 0
    cellpadding: 0
    background: white
    text-align: center
    margin: 0
    padding: 0
    .theadStyle
      background: linear-gradient(0deg, #eee, #fefefe)
      height: 40px
      border: 1px solid black
</style>
