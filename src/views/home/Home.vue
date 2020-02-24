<template>
  <div id="home">
    <nav-bar class="center">
      <div slot="center">购物商城</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"/>
    <home-feature/>
    <tab-control class="tabControl" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
    <goodslist :goods="goods[incurrentType].list"/>
    <ul>
      <li>1列表</li>
      <li>2列表</li>
      <li>3列表</li>
      <li>4列表</li>
      <li>5列表</li>
      <li>6列表</li>
      <li>7列表</li>
      <li>8列表</li>
      <li>9列表</li>
      <li>10列表</li>
      <li>11列表</li>
      <li>12列表</li>
      <li>13列表</li>
      <li>14列表</li>
      <li>15列表</li>
      <li>16列表</li>
      <li>17列表</li>
      <li>18列表</li>
      <li>19列表</li>
      <li>20列表</li>
      <li>21列表</li>
      <li>22列表</li>
      <li>23列表</li>
      <li>24列表</li>
      <li>25列表</li>
      <li>26列表</li>
      <li>27列表</li>
      <li>28列表</li>
      <li>29列表</li>
      <li>30列表</li>
      <li>31列表</li>
      <li>32列表</li>
      <li>33列表</li>
      <li>34列表</li>
      <li>35列表</li>
      <li>36列表</li>
      <li>37列表</li>
      <li>38列表</li>
      <li>39列表</li>
      <li>40列表</li>
      <li>41列表</li>
      <li>42列表</li>
      <li>43列表</li>
      <li>44列表</li>
      <li>45列表</li>
      <li>46列表</li>
      <li>47列表</li>
      <li>48列表</li>
      <li>49列表</li>
      <li>50列表</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childrenHome/HomeSwiper'
  import HomeRecommend from './childrenHome/HomeRecommend'
  import HomeFeature from './childrenHome/HomeFeature'
  import TabControl from 'components/content/tabControl/TabControl'
  import Goodslist from 'components/content/goodsList/GoodsList'

  import {getHomeRequest, getHomeGoodsList} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      Goodslist
    },
    data() {
      return {
        // result:null
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        incurrentType: 'pop'
      }
    },
    methods: {
      // 定义监听事件的方法
      tabClick(index) {
        // console.log(index);
        switch (index) {
          case 0:
            this.incurrentType = 'pop'
            break
          case 1:
            this.incurrentType = 'new'
            break
          case 2:
            this.incurrentType = 'sell'
            break
        }
      },
      // 定义接口请求的方法
      getHomeRequestTwo() {
        getHomeRequest().then(res => {
          // console.log(res);
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
      },
      getHomeGoodsListTwo(type) {
        const page = this.goods[type].page + 1
        getHomeGoodsList(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
        })
      }
    },
    created() {
      // 请求轮播图和推荐
      this.getHomeRequestTwo()
      // 请求三类热门商品
      this.getHomeGoodsListTwo('pop')
      this.getHomeGoodsListTwo('new')
      this.getHomeGoodsListTwo('sell')
    }
  }
</script>

<style scoped>
  #home {
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

  .tabControl {
    position: sticky;
    top: 40px;
  }
</style>
