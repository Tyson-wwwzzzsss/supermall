<template>
  <div class="recommend">
    <div v-for="item in recommends" class="itemRecommend">
      <a :href="item.link">
        <img :src="item.image"/>
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommed",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 7px 0;
    border-bottom: solid 4px #eee;
  }
  .itemRecommend{
    flex: 1;
  }
  .itemRecommend img{
    width: 65px;
    padding-bottom: 5px;
  }

</style>
