<template>
  <div id="home">
    <nav-bar class="center">
      <div slot="center">购物商城</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"/>
    <home-feature/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childrenHome/HomeSwiper'
  import HomeRecommend from './childrenHome/HomeRecommend'
  import HomeFeature from './childrenHome/HomeFeature'
  import {getHomeRequest} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature
    },
    data() {
      return {
        // result:null
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeRequest().then(res => {
        console.log(res);
        // this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .center {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
  }
</style>
