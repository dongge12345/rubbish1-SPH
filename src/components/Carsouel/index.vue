<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="item in carouselList"
        :key="item.id"
      >
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    export default {
        name:"Carsouel",
        props:['carouselList'],
        watch:{
            CarouselList:{
                immediate:true,
                handler(){
                    this.$nextTick(()=>{
                        new Swiper ('.swiper-container', {
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable:true
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        
                        })   
                    })
                }
            }
        },
    };
</script>

<style scoped lang="less">
    .floorBanner {
        width: 330px;
        height: 100%;
    }
</style>