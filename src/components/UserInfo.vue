<template>
  <div class="userinfo">
    这是个人信息界面
    <Dialog></Dialog>
  </div>
</template>

<script>
  import Dialog from './Dialog.vue'
    export default {
        data() {
          return {

          }
        },
        components: {
          Dialog
        },
      methods : {
          show : function () {

          }
      }
    }
</script>

<style scoped>
  .userinfo{
    background-color: antiquewhite;
    position: absolute;
    top:65px;
    left: 150px;
    width: 100%;
    height: 100%;
  }
</style>
