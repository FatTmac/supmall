<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view></feature-view>
  <tab-control class="tab-control" :titles='["流行","新款","精选"]'></tab-control>
  <ul>
    

    <li></li>
    <li></li>
        <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
        <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import TabControl from 'components/content/tabControl/TabControl.vue'


import { getHomeMultidata,getHomeGoods } from 'network/home.js'




export default {
  name:'home',
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}

      }
    }
  },
  components: {
     NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl ,
    
     },
  created() {
    // 请求多个数据
    this.getHomeMultidata()

    // 请求商品数据
    // this.getHomeGoods('pop')
    // this.getHomeGoods('new')
    // this.getHomeGoods('sell')
   
  },
  methods: {
      getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
    },
    getHomeGoods(type){
        const page = this.goods[type].page + 1
       getHomeGoods(type,page).then(res=>{
      // for (let v in res.data.list) {
      //   this.goods[type].lsit.push(v)
      // // }
      // this.goods[type].list.push(...res.data.list)
      // this.goods[type].page+=1
      console.log(res.data);
    })
    }
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
  .home-nav{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: #fff;
    z-index: 999,
  }
  .tab-control{
    position:sticky;
    top: 44px;
  }
</style>