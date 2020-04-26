<template>
  <div class="app-container">
    <div class="app-wrapper">
      <div>
        <el-radio-group v-model="radio3">
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="6">备选项</el-radio>
          <el-radio :label="9">备选项</el-radio>
          <el-button @click="radioGroupNum">输出el-radio-group选中的值</el-button>
        </el-radio-group>
        <div>
          <el-radio-group v-model="radioGroup">
            <el-radio :label="3">el-radio-group1</el-radio>
            <el-radio :label="6">el-radio-group2</el-radio>
            <el-button @click="radioGroupNum">输出el-radio-group选中的值</el-button>
          </el-radio-group>
        </div>
        <div style="margin-bottom:20px"/>
        <div>
          <el-radio v-model="radioTest" label="1">Vue</el-radio>
          <el-radio v-model="radioTest" label="2">React</el-radio>
          <el-radio v-model="radioTest" label="3" disabled>App（禁用）</el-radio>
          <el-button @click="radioNum">输出radio选中的值</el-button>
        </div>
        <div style="margin-bottom:20px"/>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </el-row>
        <div style="margin-bottom:20px"/>
        <el-row type="flex" justify="space-between">
          <el-col :span="3">
            <div class="row-col bg"/>
          </el-col>
          <el-col :span="16">
            <div class="row-col bg1">将 type 属性赋值为 'flex'，可以启用 flex 布局，并可通过 justify 属性来指定 start, center, end,
              space-between, space-around 其中的值来定义子元素的排版方式。
            </div>
          </el-col>
          <el-col :span="3">
            <div class="row-col bg"/>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="row-col bg">给row设置gutter属性间隔20px。span6</div>
          </el-col>
          <el-col :span="12" :offset="6">
            <div class="row-col bg1">通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数span12</div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20">
            <div class="row-col bg">给row设置gutter属性间隔20px。span20</div>
          </el-col>
          <el-col :span="4">
            <div class="row-col bg1">span4</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <div class="row-col bg">设置col的属性span，两等分</div>
          </el-col>
          <el-col :span="12">
            <div class="row-col bg1">两等分</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="row-col bg">默认24</div>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-button @click="changePrice(10)">更改价格</el-button>
      </div>
      <test-test post-title="bbbb" :post-content="content" @post-click="postClick"/>
      <svg-icon icon-class="link" class-name="svgColor"/>
      <span>{{ message }}</span>
      <span v-once>{{ message }}</span>
      <el-button class="btn" @[eventName].prevent="btnClick">点击</el-button>
      {{ reversedMessage }}
      <div v-if="seen" :id="'list'+dynamicId" :disabled="isBtnDisabled" :title="dynamicId">dynamicId</div>
      <a :[attributeName]="aHref">a标签</a>
      <ul v-for="(item, index) in todos" :key="item.text">
        <li :title="item.text">{{ index + item.text }}</li>
      </ul>
      <el-button @click="pushClick">pushClick</el-button>
      <br>
      <svg-icon icon-class="user" class-name="svgColor"/>
      <input v-model="message">
      <p>{{ rawHtml }}</p>
      <p v-html="rawHtml">222</p>
      <div class="abc" :class="{active:isActive}">isActive</div>
      <div :class="classObject">textObject</div>
      <div :class="classObjectComputed">textObject</div>
      <div :class="[activeClass, errorClass]">arrClass</div>
      <div :class="[{active:isActive}, errorClass]">arrObjClass</div>
      <div :style="{ color: activeColor}">styleColor</div>
      <div :style="styleClass">styleClass</div>
      <div :style="[styleClass, styleClassTwo]">styleClass</div>
      <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">display:flex</div>
      <div v-if="show">show</div>
      <div v-else>showTwo</div>
      <template v-if="show">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
      </template>
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input placeholder="Enter your username">
      </template>
      <template v-else>
        <label>Email</label>
        <input placeholder="Enter your email address">
      </template>
      <el-button @click="toggle">toggle</el-button>
      <template v-if="loginType === 'username'">
        <label>Username</label>
        <input key="username" placeholder="Enter your username">
      </template>
      <template v-else>
        <label>Email</label>
        <input key="email" placeholder="Enter your email address">
      </template>
      <ul v-for="(value, name) in object" id="v-for-object" :key="value" class="demo">
        <li>{{ name }}: {{ value }}</li>
      </ul>
      <el-button @click="funSet">$set</el-button>
      <ul v-for="n in even(numbers)" :key="n">
        <li>{{ n }}</li>
      </ul>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
      <textarea v-model="message" placeholder="add multiple lines"/>
      <p style="white-space: pre-line;">{{ message }}</p>
      <input id="checkbox1" v-model="checked" type="checkbox">
      <label for="checkbox1">{{ checked }}</label>
      <div id="example-3">
        <input id="jack" v-model="checkedNames" type="checkbox" value="Jack">
        <label for="jack">Jack</label>
        <input id="john" v-model="checkedNames" type="checkbox" value="John">
        <label for="john">John</label>
        <input id="mike" v-model="checkedNames" type="checkbox" value="Mike">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
      </div>
      <div id="example-4">
        <input id="one" v-model="picked" type="radio" value="One">
        <label for="one">One</label>
        <br>
        <input id="two" v-model="picked" type="radio" value="Two">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
      </div>
      <div id="example-5">
        <select v-model="selected">
          <option disabled value>请选择</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
      </div>
      <select v-model="selected1">
        <option v-for="option in options" :key="option.text" :value="option.value">{{ option.text }}</option>
      </select>
      <span>Selected: {{ selected1 }}</span>
      <br>
      <input v-model="radio" type="radio" :value="radio1">
      <span>{{ radio }}</span>
      <!-- slot {{ message }} -->

      {{ object.title }}
      <p>
        <el-button @click="openMessage">点击弹出message</el-button>
      </p>
      <img v-lazy="picUrl" class="item-pic">
    </div>
  </div>
</template>

<script>
  // import { Message } from 'element-ui'
  import TestTest from '@/components/TestTest'

  export default {
    name: 'Test',
    components: {
      TestTest
    },
    mixins: [],
    props: {},
    data () {
      return {
        radio3: 3,
        radioGroup: '3',
        radioTest: '1',
        message: '123',
        dynamicId: 'idid',
        isBtnDisabled: false,
        seen: true,
        aHref: 'http://www.baidu.com',
        attributeName: 'href',
        eventName: 'click',
        todos: [{text: 'abc'}, {text: 'def'}, {text: 'ghi'}],
        rawHtml: '<span style="color: #ff0000">This should be red.</span>',
        isActive: true,
        classObject: {
          active: true,
          text: false
        },
        activeClass: 'active',
        errorClass: 'error',
        activeColor: 'red',
        styleClass: {
          color: 'blue'
        },
        styleClassTwo: {
          fontSize: '20px'
        },
        show: true,
        loginType: 'username',
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        },
        numbers: [1, 2, 3, 4, 5],
        checked: '',
        checkedNames: [],
        picked: '',
        selected: '',
        selected1: 'A',
        options: [
          {text: 'One', value: 'A'},
          {text: 'Two', value: 'B'},
          {text: 'Three', value: 'C'}
        ],
        radio: 'radio',
        radio1: 'radio1',
        content: 'contentContent',
        picUrl:
          'https://xfom.ygzykj.com/pic/uniformpic/e4588e3866bd479485b04b153df3e030.png!m1300x380.jpg'
      }
    },
    computed: {
      reversedMessage () {
        return this.message
          .split('')
          .reverse()
          .join('')
      },
      classObjectComputed () {
        return this.dynamicId + ' jkl'
      }
    },
    watch: {},
    mounted () {
      this.message = 'abc'
    },
    methods: {
      radioGroupNum () {
        this.$message('选中的值为：' + this.radioGroup)
      },
      radioNum () {
        this.$message('选中的值为：' + this.radioTest)
      },
      btnClick () {
        this.message = 'dce'
        this.show = !this.show
      },
      toggle () {
        this.loginType = this.loginType === 'username' ? '' : 'username'
      },
      pushClick () {
        // this.todos.push({ text: 'push' })
        // this.todos.pop()// 删除并返回数组的最后一个元素
        // this.todos.shift()// 删除并返回数组的第一个元素
        // this.todos.unshift({ text: 'jkl' })// 向数组的开头添加一个或更多元素,并返回新的长度
        this.todos.splice(0, 1, {text: 'splice'}) // 通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组
      },
      funSet () {
        // Vue 不能检测对象属性的添加或删除。可以使用 vm.$set 实例方法，它只是全局 Vue.set 的别名

        // 为已有对象赋值单个新属性
        // this.$set(this.object,'name','set')
        // 为已有对象赋值多个新属性
        this.object = Object.assign({}, this.object, {
          sex: '1',
          address: 'address'
        })
      },
      even (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      postClick (v) {
        this.content = v
      },
      openMessage () {
        this.$message({
          message: '提示信息的内容',
          type: 'error',
          duration: 3 * 1000
        })
      },
      changePrice (price) {
        this.$store.dispatch('cart/changePrice', price).then(() => {
          this.$message({
            message: '价格更改成功！',
            type: 'success',
            duration: 3 * 1000
          })
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-wrapper {
    padding-bottom: 100px;

    .btn {
      font-size: 20px;
    }

    .svgColor {
      color: red;
      width: 50px;
      height: 50px;
    }

    .row-col {
      min-height: 36px;
      margin-bottom: 10px;
      font-size: 16px;
      color: #fff;
      line-height: 36px;

      &.bg {
        background-color: #99a9bf;
      }

      &.bg1 {
        background-color: #5a6d88;
      }
    }
  }
</style>
