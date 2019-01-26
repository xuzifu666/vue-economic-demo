<template>
  <div>
  <div class="bg">
    <Header></Header>
  </div>
    <HomeLeft></HomeLeft>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
<script>
  import jwt_decode from 'jwt-decode'
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import Header from './Header.vue'
  import HomeLeft from './HomeLeft.vue'

    export default {
        data() {
          return {
            msg : '这是主页',
            username : '',
            age : 0
          }
        },
        components: {
          ElCol,
          ElRow,
          Header,
          HomeLeft
        },
      created : function () {
        var user = jwt_decode(localStorage.getItem('token'));
        this.username = user.username;
        this.age = user.age;
      },
      methods : {
          cre(){
            this.$store.commit('increase')
          }
      }

    }
</script>
