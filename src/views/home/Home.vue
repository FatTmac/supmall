<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
 name:'home',
 components: {
     NavBar ,
     },
}
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>