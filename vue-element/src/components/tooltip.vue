<template>
  <div>
    <el-button type="primary" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-button type="primary" @click="dialogVisible2 = true">点击打开 Dialog</el-button>
    <el-button type="primary" @click="dialogVisible3 = true">点击打开 Dialog</el-button>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible3"
      size="tiny"
    >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>

    <zrd-dialog :visible.sync="dialogVisible">
      <p>你好十大水电费双。方斯蒂芬沙发沙发舒服沙发上沙，发发沙发发</p>
      <p>hello!hello!hello!hello!hello!hello!hello!hello!</p>
    </zrd-dialog>
    <zrd-dialog header="提示信息" :visible.sync="dialogVisible2">
      <!--<el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>-->
      <table border="1" cellspacing="0">
        <tr>
          <th>姓名</th>
          <th>name</th>
          <th>sex</th>
          <th>number</th>
        </tr>
        <tr>
          <td>aaa</td>
          <td>22</td>
          <td>男</td>
          <td>十一</td>
        </tr>
        <tr>
          <td>aaa</td>
          <td>22</td>
          <td>男</td>
          <td>十一</td>
        </tr>
        <tr>
          <td>aaa</td>
          <td>22</td>
          <td>男</td>
          <td>十一</td>
        </tr>
        <tr>
          <td>aaa</td>
          <td>22</td>
          <td>男</td>
          <td>十一</td>
        </tr>
      </table>
    </zrd-dialog>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        dialogVisible2: false,
        dialogVisible3: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      };
    },
    methods: {
      clickFn(){
        console.log(11111);
      }
    },
    components: {
      'zrdDialog': {
//        props: ['header','visible'],
        props: {
          'header':{
            type:String,
            default: "这里是标题——zzz"
          },
          'visible':Boolean
        },
        template: `
          <div v-show="visible">
            <div class="mark"></div>
            <div class="dialog">
              <i class="el-icon-circle-close close" @click="closeFn"></i>
              <div class="header"><h2>{{header}}</h2></div>
              <div class="content">
                <slot class="aaa"></slot>
              </div>
              <div class="footer">
                <el-button type="success" @click="closeFn">确定</el-button>
                <el-button type="primary" @click="closeFn">取消</el-button>
              </div>
            </div>
          </div>
        `,
        methods: {
          closeFn(){
            this.$emit('update:visible',false)
          }
        }
      }
    }
  };
</script>


<style lang="less">
  .mark {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    background-color: rgba(0,0,0,0.2);
    z-index: 100;
    /*display: none;*/
  }
  .dialog{
    z-index: 999;
    position: fixed;
    background-color: #fff;
    width: 360px;
    min-height: 200px;
    left: 500px;
    top: 140px;
    .close {
      position: absolute;
      right:10px;
      top:10px;
    }
    .content {
      min-height: 100px;
      text-align: center;
    }
    .footer {
      text-align: right;
      padding-right: 12px;
      padding-bottom: 6px;
    }
  }
</style>
