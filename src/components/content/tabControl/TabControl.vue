<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tabControl-item"
         :class="{active : index === currentIndex}"
         @click="itemTabControl(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemTabControl(index) {
        // console.log(index);
        this.currentIndex = index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    padding: 10px 0;
    background-color: #fff;
    height: 40px;
  }

  .tabControl-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .tabControl-item span {
    padding: 5px;
  }

  .active span {
    border-bottom: solid 2px var(--color-high-text);
    width: 10px;
  }

  .active {
    color: var(--color-high-text);
  }
</style>
