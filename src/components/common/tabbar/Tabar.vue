<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabar"
  }
</script>

<style scoped>
  #tabbar{
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f6f6f6;
    box-shadow: 0 -2px 1px rgba(100,100,100,0.2);
    height: 49px;
    /*border-top: solid 1px #cccccc;*/
  }

</style>
