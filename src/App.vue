<template>
  <div id="app">
    <router-view/>
    <item-tabbar/>
  </div>
</template>
<script>
  import itemTabbar from 'components/content/itemTabar/MainTabbar'
  export default {
    name: 'App',
    components: {
      itemTabbar
    }
  }
</script>

<style>
@import "assets/css/base.css";
</style>
