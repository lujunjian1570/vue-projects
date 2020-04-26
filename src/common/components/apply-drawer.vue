<template>
  <div>
    <div
      class="apply-panel-drawer"
      v-for="(item,i) in list"
      :key="i"
      @mouseleave="down(item)"
      @mouseenter="up(item)"
    >
      <transition name="drawer">
        <div class="apply-drawer-header" @click="go(item)">{{item.desc}}</div>
      </transition>
      <div class="apply-drawer-footer">{{item.name}}</div>
      <div class="apply-drawer-bottom"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ApplyDrawer',
  props: {
    list: Array
  },
  methods: {
    down (item) {
    },
    up (item) {
    },
    go (item) {

    }
  }
};
</script>
<style scoped>
.apply-panel-drawer {
  margin: 25px;
  width: 200px;
  height: 125px;
  position: relative;
  display: inline-block;
}
.apply-drawer-bottom {
  width: 200px;
  height: 75px;
  border: 1px solid #1890FF;
  position: absolute;
  bottom: 0;
  border-radius: 6px 6px 0 0;
  z-index: 2;
}
.apply-drawer-footer {
  width: 200px;
  height: 50px;
  background-color: #F3F9FF;
  position: absolute;
  left: 1px;
  bottom: 1px;
  box-sizing: border-box;
  border-top: 1px solid #1890FF;
  text-align: center;
  line-height: 50px;
  color: #999999;
  box-shadow: 0px 0px 2px #1890FF;
  z-index: 3;
}
.apply-drawer-header {
  width: 180px;
  height: 75px;
  top: 6px;
  text-align: center;
  line-height: 75px;
  position: absolute;
  color: #4D4D4D;
  box-shadow: 0px 0px 3px #BBBBBB;
  right: 10px;
  z-index: 3;
  border-radius: 6px;
  background-color: white;
}
.apply-panel-drawer:hover > .apply-drawer-header {
  top: -4px;
}
</style>

