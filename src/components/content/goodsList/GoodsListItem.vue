<template>
  <div class="goodsList-item">
    <img :src="goodsItem.show.img" alt="">
    <p>{{goodsItem.title}}</p>
    <div class="goods-any">
      <span class="price">{{goodsItem.price}}</span>
      <div class="goods-img">
        <img src="~assets/img/common/collect.svg"/>
        <span class="collection">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goodsList-item {
    width: 48%;
    display: flex;
    flex-direction: column;
    /*position: relative;*/
  }

  .goodsList-item img {
    width: 150px;
    border-radius: 4px;
    padding-bottom: 3px;
  }

  .goodsList-item p {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    /*margin-bottom: 3px;*/
  }

  .goods-any {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    margin-left: 36px;
  }

  .price {
    color: var(--color-high-text);
    /*font-size: 12px;*/
    text-align: center;
  }
  .goods-img{
    margin-left: 4px;
  }
  .goods-img img{
    width: 14px;
    vertical-align: middle;
  }
</style>
