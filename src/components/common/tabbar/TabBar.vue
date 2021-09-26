<template>
  <div id="tab-bar">
    <slot></slot>
  </div>

</template>

<script>

export default {
  name:'TabBar'
  
  }


</script>

<style  scoped>
#tab-bar{
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    background-color: #f6f6f6;
    box-shadow: 0px -2px 3px rgba(100, 100, 100, .2);
  }
</style>