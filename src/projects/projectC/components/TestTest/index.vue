<template>
  <div>
    <slot>后备内容</slot>
    <br>
    {{ postTitle | capitalize }}
    <br>
    {{ postTitle1 }}
    <br>
    {{ postContent }}
    <br>
    {{ normalizedContent }}
    <br>
    <el-button @click="postClick">Click</el-button>
    <input v-focus type="text">
  </div>
</template>
<script>
export default {
  name: 'TestTest',
  directives: {
    // 定义局部指令
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus()
      }
    }
  },
  filters: {
    // 定义局部过滤器
    capitalize: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  // props: ['postTitle']
  props: {
    postTitle: {
      type: String,
      default: ''
    },
    postTitle1: {
      type: String,
      default: '1111'
    },
    postContent: {
      type: String,
      required: true
    }
  },
  computed: {
    normalizedContent() {
      return this.postContent.trim().toLowerCase()
    }
  },
  methods: {
    postClick() {
      this.$emit('post-click', 'contentContentContent')
    }
  }
}
</script>
<style lang="scss" scoped></style>
