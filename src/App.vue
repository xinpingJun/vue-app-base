<template>
<div id="app">
  <router-view/>
  <loading v-model="isLoading"></loading>
</div>
</template>

<script>
import {  Loading ,Spinner} from 'vux'
import {  mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Loading,
    Spinner
  },
  mounted(){
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
 
@import url('./assets/fonts/PingFangRegular/PingFangR.css');
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  color: #333;
  font-family: PingFangSC-Regular, Helvetica, Droid Sans, Arial, sans-serif;
}
ul{
  list-style: none !important;
}
</style>
