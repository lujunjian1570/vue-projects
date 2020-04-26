<template>
  <div class="login-container">
    测试
    <div>
      <img v-lazy="picUrl" class="item-pic">
    </div>
  </div>
</template>

<script>

import { selectThemeList } from '@/api/table'

export default {
  name: 'Login',
  data() {
    return {
      picUrl: ''
    }
  },
  mounted() {
    selectThemeList({
      cmstoken: 'ZYVP8eCbGMlDyz89qYul8x06D1p8g6pSNFBh1YBhkSKyYzztaA-T6OwrwwtBRChdFmYZKYuJi4B0DoLOLsWn7w3S6T3WddomEyX_xMFaCPymDWLXa9AZ1WxTIO0phUzmGy5iYC_oEQ-If_xFMqJSkdZUOoPFA4KmjTOlx5Tiwco'
    }).then(res => {
      console.log(res)
      this.picUrl = res.obj[0].viewImg
    })
  },
  methods: {
    showPwd() {

    }
  }
}
</script>
<style lang="scss">
  .item-pic{
    width: 10%;
  }
</style>
