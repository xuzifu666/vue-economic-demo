<template>
  <div class="home">
  </div>
</template>

<script>
    import ElRow from "element-ui/packages/row/src/row";

    export default {
        data() {
          return {}
        },
        components: {ElRow}
    }
</script>

<style scoped>
  .left{
    background-color: antiquewhite;
    width: 40%;
    height: 100%;
    float: left;
  }
  .right{
    background-color: aliceblue;
    width: 60%;
    height: 100%;
    float: right;
  }
  .home{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 65px;
    left: 150px;
    background: url(../assets/showcase.png) no-repeat;
    background-size: 90% 100%;
  }
</style>
