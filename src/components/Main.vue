<template>
  <div class="bg">

  </div>
</template>

<style scoped>
  .bg{
    position: absolute;
    width: 100%;
    height: 100%;
    left: -8px;
    top: -8px;
    background: url(../assets/bg.jpg) no-repeat center center;
    background-size: 100% 100%;
  }
</style>
<script>
    export default {
        data() {
          return {
            msg : '这是主页'
          }
        },
        components: {}
    }
</script>
