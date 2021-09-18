<template>
  <div class="hello">
    <h2>{{ $store.state.text }}</h2>
    <h2>{{msg}}</h2>
    <h2>{{frames}}</h2>
    <van-tag type="primary">api</van-tag>
    <van-tag type="success">vuex</van-tag>
    <van-tag type="danger">服务器自动上传</van-tag>
    <van-tag type="warning">scss</van-tag>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '本模版采用的框架为Vant',
      frames: '本模版附带组件有'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  h2 {
    color: #bbbbbb;
  }
}
</style>
