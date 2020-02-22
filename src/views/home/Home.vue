<template>
    <nav-bar class="center">
      <div slot="center">购物商城</div>
    </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

    export default {
        name: "Home",
      components:{
          NavBar
      }
    }
</script>

<style scoped>
.center{
  background-color: var(--color-tint);
  color: white;
}
</style>
