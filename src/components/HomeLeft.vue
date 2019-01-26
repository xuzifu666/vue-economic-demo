<template>
  <div class="menu_page">
  <el-menu
    mode="vertical"
    background-color="#324057"
    text-color="#fff"
    active-text-color="#409eff"
    class="el-menu-vertical-demo"
  >
    <router-link to="/register">
      <el-menu-item index="0">
        <i class="fa fa-margin fa-server"></i>
        <span slot="title">首页</span>
      </el-menu-item>
    </router-link>
    <template  v-for="item in items" >
      <el-submenu v-if="item.children" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="'fa fa-margin '+item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <router-link v-for="(citem,cindex) in item.children"
                     :to="citem.path" :key="cindex">
          <el-menu-item
            :index='citem.path'>
            <span slot="title">{{citem.name}}</span>
          </el-menu-item>
        </router-link>
      </el-submenu>
    </template>
  </el-menu>
  </div>
</template>
<script>
    import ElMenu from "../../node_modules/element-ui/packages/menu/src/menu.vue";

    export default {
        data() {
          return {
            items: [
              {
                icon: "fa-money",
                name: "资金管理",
                path: "found",
                children: [{ path: "/index/foundList", name: "资金流水" }]
              },
              {
                icon: "fa-asterisk",
                name: "信息管理",
                path : "info",
                children: [{ path: "/index/userinfo", name: "个人信息" }]
              }
            ]
          }
        },
        components: {ElMenu}
    }
</script>
<style scoped>
  .el-menu-vertical-demo {
    width: 150px;
  }
  .el-submenu .el-menu-item {
    min-width: 150px;
  }
  .menu_page {
    position: fixed;
    top: 65px;
    left: 0;
    min-height: 100%;
    background-color: #324057;
    z-index: 99;
  }
  a {
    text-decoration: none;
  }
</style>
