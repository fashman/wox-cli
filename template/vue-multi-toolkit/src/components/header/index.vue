<template>
  <div class="header">
    <img src="./images/logo.png" height="40" />
    <span>{{ header }}</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      header: 'Header Component'
    }
  }
}
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;

  img {
    margin: 0 20px;
    vertical-align: middle;
  }

  span {
    vertical-align: middle;
  }
}
</style>
