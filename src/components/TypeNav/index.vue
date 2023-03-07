<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseover="ifShowTrueFunction" @mouseleave="ifShowFalseFunction">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="act">
        <div class="sort" v-show="ifShow_" @mouseleave="ifShowFalseFunction" >
          <div class="all-sort-list2">
            <div class="item" v-for="(category,index) in typeList.data" :key="category.categoryId" @click="typeNavClick">
              <h3 @mouseover="addBgc(index)" @mouseleave="removeBgc" :class="{skyblue:currentIndex===index}">
                <a href="#" :data-category1Id="category.categoryId" :data-categoryName="category.categoryName">{{category.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem" v-for="categoryChild in category.categoryChild" :key="categoryChild.categoryId">
                  <dl class="fore">
                    <dt>
                      <a href="#" :data-category2Id="categoryChild.categoryId" :data-categoryName="categoryChild.categoryName">{{categoryChild.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="categoryGrandchild in categoryChild.categoryChild" :key="categoryGrandchild.categoryId">
                        <a href="#" :data-category3Id="categoryGrandchild.categoryId" :data-categoryName="categoryGrandchild.categoryName">{{categoryGrandchild.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>


</template>

<script>
// import _ from 'lodash'
import {throttle} from 'lodash'
export default {
  name: "TypeNav",
  props:['ifShow'],
  data() {
    return {
      currentIndex:-1,
      ifShow_:this.ifShow,
    };
  },
  computed:{
    typeList(){
      return this.$store.state.categoryList
    }
  },
  beforeDestory(){
    console.log('TypeNav即将被销毁')
  },
  methods:{
    ifShowTrueFunction(){
      if(this.$route.path.indexOf('search')!==-1){
        this.ifShow_ = true
      }
    },
    ifShowFalseFunction(e){
      if(this.$route.path.indexOf('search')!==-1){
        try{
          if(e.toElement.parentNode.getAttribute('class')!=="item"){
            this.ifShow_ = false
          }
        }catch(err){
          
        }
      }
    },
    async typeNavClick(e){
      e.preventDefault()
      let {category1id,category2id,category3id,categoryname} = e.target.dataset 
      let searchData = {
        category1Id:category1id,
        category2Id:category2id,
        category3Id:category3id,
        categoryName:categoryname
      }
      let params = this.$route.params || {}
      this.$router.push({name:"search",query:searchData,params})
    },
    addBgc:(function(){
      let pre = Date.now()
      return function(index){
        if(Date.now() - pre > 100){
          this.currentIndex = index
          pre = Date.now()
        }
      }
    })(),
    removeBgc:throttle(function(){
      this.currentIndex = -1
    },100),
    test:(function(){
      return function(b){
        console.log('b:',b,this)
      }
    })()
  }
};
</script>

<style scoped lang="less">

.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      // height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .skyblue{
          background-color: skyblue;
        }
        .item {
          h3 {
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            text-align: left;
            a {
              padding:0;
              color: #333;
            }
          }


          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }

  }
}
    
.act-enter{
  opacity:0;
  height:0px;
}
.act-enter-to{
  height:461px
}
.act-enter-active{
  transition:2s ease 
}
</style>