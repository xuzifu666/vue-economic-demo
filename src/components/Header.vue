<template>
  <div class="header">
    <div class="left">
      <img class="logo" src="../assets/logo.png" />
      <span class="title">国际金融论坛</span>
    </div>
    <div class="right">
      <div class="avtar_content">
      <img src="../assets/a.png" class="avtar" />
      </div>
      <div class="rowdown">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="username">
        <span>xuzifu</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { Message } from 'element-ui';
    export default {
        data() {
          return {}
        },
        components: {},
      methods :{
        handleCommand : function (msg) {
          if(msg === 'info'){
            this.$router.push('/index/userinfo');
          }
          if(msg === 'logout'){
            this.$axios.post('http://localhost:8080/user/test').then(res=>{
              var res = res.data;
              console.info('batchId:' + res.batchId);
              res.users.forEach(item=>{
                console.log(item.username + ":" + item.age);
              })
            });
          }
        }
      }
    }
</script>
<style scoped>
  .header{
    position: absolute;
    color: #fff;
    width: 100%;
    height: 70px;
    background: #324057;
    top: -5px;
    left: -5px;
  }
  .avtar_content{
    margin-top: 20px;
    float: left;
  }
  .rowdown{
    float: right;
    margin-right: 20px;
    margin-top: 30px;
  }
  .right{
    float: right;
    width: 140px;
    height: 65px;
    margin-right: 20px;
  }
  .avtar{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    top: 20px;
  }
  .username{
      line-height: 20px;
      height: 20px;
      width: 40px;
      margin-top: 30px;
      float: right;
      margin-right: 10px;
  }
  .left{
    width: 195px;
    float: left;
  }
  .title{
    line-height: 40px;
    display: inline-block;
    float: right;
    padding: 10px;
  }
  .logo{
    width: 60px;
    height: 60px;
    margin-left: 10px;
    margin-top: 5px;
  }
  .el-dropdown{
    color:#fff;
  }
</style>
