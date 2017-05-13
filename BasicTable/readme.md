### table组件参数说明

参数|说明|类型
--- | --- | ---
dataSource | table列表展示数据 | Array
emptyText | 当没有数据时展示值 | String
height | table表格的高度 | Number
row-click | 点击表格中每一行所发生回调函数 | Function
row-hover | 鼠标悬浮在每一行时所发生回调 | Function

### table表头参数介绍

参数|说明|类型
---|---|---
prop | 每一列的属性名称 | String
label | 每一列的展示label名称 | String
width | 每一列所占宽度 | String
sortable | 该列是否可排序 | Boolean

```
<basic-table
  :dataSource="this.dataSource"
  emptyText="null"
  :height="200"
  @row-click="test">
    <table-column
      prop="name"
      label="Name"
      width="300">
      </table-column>
    <table-column
      prop="age"
      label="Age"
      width="100"
      :sortable="true">
      </table-column>
    <table-column
      prop="phone"
      width="300"
      label="Phone">
      </table-column>
</basic-table>
```

[demo](https://z2014.github.io/Vue-component/Table-Demo/index.html)