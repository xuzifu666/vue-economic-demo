<template>
  <div id="register">
    <div id="register_content">
      <div class="register_title">
        <span>亚洲金融论坛</span>
      </div>
      <el-form :model="registerUser" status-icon :rules="rules" ref="registForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="registerUser.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input  v-model.number="registerUser.email"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input type="password" v-model="registerUser.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码" prop="password2">
          <el-input type="password" v-model="registerUser.password2" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户身份">
          <el-select v-model="registerUser.role" placeholder="请选择活动区域">
            <el-option label="管理员" value="admin"></el-option>
            <el-option label="普通用户" value="normal"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="tokenTest()">token测试</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
  .register_title{
    margin-bottom: 30px;
    font-size: 28px;
    font-style: italic;
  }
  #register{
    position: relative;
    background: url("../assets/bg.jpg") no-repeat center center;
    background-size:100% 100% ;
    width: 101%;
    height: 101%;
    left: -8px;
    top: -8px;
  }
  #register_content{
    width: 370px;
    height: 210px;
    position: absolute;
    top: 10%;
    left: 34%;
    padding: 25px;
    border-radius: 5px;
    text-align: center;
  }
  #register_content span{
    color: aliceblue;
    font-size: 24px;
  }
</style>
<script>
  import jtw_decode from 'jwt-decode';
    export default {
        data() {
          var validate = (rule,value,callback)=>{
            if(value !== this.registerUser.password){
              callback(new Error('必须和第一次输入的密码一致'));
            }else {
              return callback();
            }
          };
          return {
            registerUser : {
              username : '',
              email : '',
              password : '',
              password2 : '',
              role : ''
            },
            rules : {
              username : [
                {
                  required : true,
                  message : '用户名不能为空',
                  trigger : "blur"
                },
                {
                  max : 10,
                  min : 3,
                  message : '长度不符合要求',
                  trigger : 'blur'
                }
              ],
              email : [
                {
                  type : 'email',
                  required : true,
                  message : '邮箱格式不正确',
                  trigger : "blur"
                }
              ],
              password : [
                {
                  required : true,
                  message : '密码不能为空',
                  trigger : 'blur'
                },
                {
                  min : 2,
                  max : 8,
                  message : '密码长度不能小于2，大于8',
                  trigger : 'blur'
                }
              ],
              password2 : [
                {
                  validator : validate,
                  trigger : 'blur'
                }
              ],
              role : [
                {
                  required : true,
                  message : '用户角色需要选择',
                  trigger : 'blur'
                }
              ]
            }
          }
        },
        components: {},
        methods : {
          submitForm(){
            this.$refs['registForm'].validate(valid =>{
              if(valid == true){
              this.$axios.post('http://localhost:8080/user/register',this.registerUser).then(res=>{
                console.log('success');
              }).catch(error=>{
                console.log('error!!');
                });
            }else{
                alert('error');
            }
            })
          },
          tokenTest(){
            this.$axios.post('http://localhost:8080/user/token',{
              username : 'xuyu',
              age : '22'
            }).then(res=>{
              console.info("token is ",res.data);
              console.info(jtw_decode(res.data));
            })
          }
        }
    }
</script>
