<template>
  <div id="login">
    <div id="login_content">
      <div class="login_title">
        <span>亚洲金融论坛</span>
      </div>
      <el-form :model="loginUser" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginUser.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="输入密码" prop="password">
          <el-input type="password" v-model="loginUser.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
        </el-form-item>
      </el-form>
      <div id="remind">
        <span  style="text-decoration: none;font-size: 12px">还没注册？立即<router-link to="/register">注册</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return{
              loginUser : {
                username : '',
                password : ''
              },
              rules : {
                username : [
                  {
                    required : true,
                    message : '用户名不能为空',
                    trigger : 'blur'
                  }
                ],
                password : [
                  {
                    required : true,
                    message : '密码不能为空',
                    trigger : 'blur'
                  }
                ]
              }
            }
        },
        components: {},
      methods : {
          submitForm(formName){
            this.$refs[formName].validate(valid=>{
              if(valid){
                this.$axios.post("http://localhost:8080/user/login",this.loginUser)
                  .then(res=>{
                    this.$router.push("/index")
                  })
                  .catch(error=>{
                    console.log("登录失败");
                  });

              }else {
                alert("表单参数不对");
              }
            })
          }
      }
    }
</script>

<style scoped>
  #remind{
    font-size: 12px;
    text-align: right;
  }
  .login_content #remind span{
    font-size: 12px;
  }
  .login_title{
    margin-bottom: 30px;
    font-size: 28px;
    font-style: italic;
  }
  #login{
    position: relative;
    background: url("../assets/bg.jpg") no-repeat center center;
    background-size:100% 100% ;
    width: 101%;
    height: 101%;
    left: -8px;
    top: -8px;
  }
  #login_content{
    width: 370px;
    height: 210px;
    position: absolute;
    top: 10%;
    left: 34%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
  }
  #login_content span{
    color: aliceblue;
    font-size: 24px;
  }
  .submit_btn{
    width: 100%;
  }
</style>
