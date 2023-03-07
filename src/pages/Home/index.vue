<template>
  <div>
    <TypeNav :ifShow="true"/>
    <ListContainer />
    <TodayRecommend />
    <Rank />
    <Like />
    <Floor v-for="floor in floorMsg" :key="floor.id" :floor="floor"/>
    <Brank />
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav"
import ListContainer from "@/pages/Home/ListContainer"
import TodayRecommend from "@/pages/Home/TodayRecommend"
import Rank from "@/pages/Home/Rank"
import Like from "@/pages/Home/Like"
import Floor from "@/pages/Home/Floor"
import Brank from "@/pages/Home/Brank"
export default {
    name:"Home",
    components:{
        TypeNav,
        ListContainer,
        TodayRecommend,
        Rank,
        Like,
        Floor,
        Brank
    },
    mounted(){
      this.$store.commit('GETFLOORMSG')
    },
    computed:{
      floorMsg(){
        return this.$store.state.floor.floorMsg
      }
    }
}
</script>

<style>

</style>