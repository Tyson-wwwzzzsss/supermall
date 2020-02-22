<template>
    <div class="navbar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
.navbar{
  display: flex;
  height: 44px;
  line-height: 44px;
}
  .left,.right{
    flex: 1;
  }
  .center{
    flex: 3;
    text-align: center;
  }
</style>
