<template>
  <div class="login-container">
    测试
    <div>
      <img v-lazy="picUrl" class="item-pic">
    </div>
  </div>
</template>

<script>

export default {
  name: 'TestTest',
  data() {
    return {
      picUrl: ''
    }
  },
  mounted() {
    this.$Http.selectThemeList({
      cmstoken: 'rKdzOSqkVIAwD2FvLoS0tXbAhFpkU9invdG3JtknXFX4-uGTVTauN1yvPFI0B-DlfT7rsERa7StT-LzP9DteBC6X7fDDIg7JCdpDNxSITJoArq9_emOcrEmLUkDuSOfZEmhTrC2X1LsUWVf9NqIXNg5polmRL6ZBmqRZAuWYiys'
    }).then(res => {
      console.log(res)
      this.picUrl = res.obj[res.obj.length - 1].viewImg
    })
  },
  methods: {
    /* showPwd() {

      }*/
  }
}
</script>
