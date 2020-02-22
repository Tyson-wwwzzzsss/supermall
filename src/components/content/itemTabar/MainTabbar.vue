<template>
  <Tabar>
    <TabarItem link="/home">
      <img slot="item-icon" src="~assets/img/tabbar/index.png"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/index1.png"/>
      <div slot="item-text">首页</div>
    </TabarItem>
    <TabarItem link="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/category2.png"/>
      <div slot="item-text">分类</div>
    </TabarItem>
    <TabarItem link="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/cart2.png"/>
      <div slot="item-text">购物车</div>
    </TabarItem>
    <TabarItem link="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/my.png"/>
      <img slot="item-icon-active" src="~assets/img/tabbar/my1.png"/>
      <div slot="item-text">我的</div>
    </TabarItem>
  </Tabar>
</template>

<script>
  import Tabar from '../../common/tabbar/Tabar'
  import TabarItem from '../../common/tabbar/TabarItem'

    export default {
        name: "MainTabbar",
      components:{
        Tabar,
        TabarItem
      }
    }
</script>

<style scoped>

</style>
