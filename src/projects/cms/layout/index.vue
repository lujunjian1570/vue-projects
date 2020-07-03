<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <section class="app-main">
          <transition name="fade-transform" mode="out-in">
            <router-view :key="key" />
          </transition>
        </section>
      </el-main>
<!--      <el-footer>Footer</el-footer>-->
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "index",
    computed: {
      key() {
        return this.$route.path
      }
    },
    mounted() {
      console.log(this.$route.path)
    }
  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .app-main {
    min-height: calc(100vh - 60px);
    width: 100%;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }
  .fixed-header+.app-main {
    padding-top: 60px;
  }
  .el-main{
    padding: 0;
  }

</style>
