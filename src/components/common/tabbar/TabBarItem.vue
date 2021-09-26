<template>
  <div class="tab-bar-item" @click="itemClick">
  <div v-if="!isActive"><slot name="item-img"></slot></div>  
  <div v-else><slot name='item-icon-active'></slot></div>  
  <div :style="activityStyle"><slot name="item-text"></slot></div>  
  </div>

</template>

<script>

export default {
  name:'TabBarItem',
  props:{
    path:String,
    activityColor:{
      type:String,
      default:'pink'
    }
  },
  data() {
    return {
      
      
    }
  },computed:{
    isActive(){
        return this.$route.path.indexOf(this.path) !==-1
    },
    activityStyle(){
        return this.isActive ? {color:this.activityColor}:{}
    }
  },
  methods: {
    itemClick(){
       this.$router.push(this.path)  
    }
  },
  
  }


</script>

<style  scoped>
.tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    
  }
.tab-bar-item img{
  height: 25px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>