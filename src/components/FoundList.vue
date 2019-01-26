<template>
  <div class="root">
    <el-table
      v-if="tableData.length > 0"
      :data='tableData'
      max-height="300"
      border
      :default-sort = "{prop: 'date', order: 'descending'}"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        align='center'
        width="90">
      </el-table-column>
      <el-table-column
        prop="date"
        label="创建时间"
        align='center'
        width="250"
        sortable>
        <template slot-scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="收支类型"
        align='center'
        width="90">
      </el-table-column>
      <el-table-column
        prop="describe"
        label="收支描述"
        align='center'
        width="90">
      </el-table-column>
      <el-table-column
        prop="income"
        label="收入"
        align='center'
        width="90">
        <template slot-scope="scope">
          <span style="color:#00d053">+ {{ scope.row.income }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="expend"
        label="支出"
        align='center'
        width="90">
        <template slot-scope="scope">
          <span style="color:#f56767">- {{ scope.row.expend }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="cash"
        label="账户现金"
        align='center'
        width="90">
        <template slot-scope="scope">
          <span style="color:#4db3ff">{{ scope.row.cash }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        label="备注"
        align='center'
        width="90">
      </el-table-column>
      <el-table-column
        prop="operation"
        align='center'
        label="操作"
        fixed="right"
        width="180">
        <template slot-scope='scope'>
          <el-button
            type="warning"
            icon='edit'
            size="small"
            @click='onEditMoney(scope.row)'
          >编辑</el-button>
          <el-button
            type="danger"
            icon='delete'
            size="small"
            @click='onDeleteMoney(scope.row,scope.$index)'
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog></Dialog>
  </div>
</template>
<script>
  import Dialog from './Dialog.vue'
    export default {
        data() {
          return {
            tableData : [
              {
                date : '2019-01-20 12:22:12',
                income : '1000',
                expand : 'flow',
                cash : '2000'
              }
            ]
          }
        },
        components: {
          Dialog
        },
      methods : {
        onEditMoney : function () {
          console.log('onEditMoney');
        },
        onDeleteMoney : function () {
          console.log('onDeleteMoney');
        }
      }
    }
</script>

<style scoped>
  .root{
    margin-top: 70px;
    margin-left: 150px;
  }
</style>
