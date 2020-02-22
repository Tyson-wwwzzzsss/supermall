<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="getActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TabarItem",
      props:{
        link:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      data(){
        return{
          // isActive:true
        }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.link) != -1
        },
        getActiveColor(){
          return this.isActive ? {color:this.activeColor}:{}
        }
      },
      methods:{
        itemClick(){
          this.$router.push(this.link)
          // console.log('aaa');
        }
      }
    }
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    font-size: 10px;
  }
  .tabbar-item img{
    width: 20px;
    padding-top: 7px;
    /*vertical-align: middle;*/
  }
  /*.active{*/
    /*color: #FF0000;*/
  /*}*/
</style>
