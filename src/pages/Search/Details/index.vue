<template>
  <div class="details clearfix">
    <div class="sui-navbar">
      <div class="navbar-inner filter">
        <ul class="sui-nav">
          <li class="active">
            <a href="#">综合</a>
          </li>
          <li>
            <a href="#">销量</a>
          </li>
          <li>
            <a href="#">新品</a>
          </li>
          <li>
            <a href="#">评价</a>
          </li>
          <li>
            <a href="#">价格⬆</a>
          </li>
          <li>
            <a href="#">价格⬇</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="goods-list">
      <ul class="yui3-g">
        <li class="yui3-u-1-5" v-for="goods in goodsList" :key="goods.id">
          <div class="list-wrap">
            <div class="p-img">
              <a href="item.html" target="_blank"
                ><img :src="goods.defaultImg"
              /></a>
            </div>
            <div class="price">
              <strong>
                <em>¥&nbsp;</em>
                <i>{{goods.price}}</i>
              </strong>
            </div>
            <div class="attr">
              <a
                target="_blank"
                href="item.html"
                :title="goods.title"
                >{{goods.title}}</a
              >
            </div>
            <div class="commit">
              <i class="command">已有<span>{{
                goods.hotScore}}</span>人评价</i>
            </div>
            <div class="operate">
              <a
                href="success-cart.html"
                target="_blank"
                class="sui-btn btn-bordered btn-danger"
                >加入购物车</a
              >
              <a href="javascript:void(0);" class="sui-btn btn-bordered"
                >收藏</a
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="fr page">
      <div class="sui-pagination clearfix">
        <ul>
          <li class="prev disabled">
            <a href="#">«上一页</a>
          </li>
          <li class="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">4</a>
          </li>
          <li>
            <a href="#">5</a>
          </li>
          <li class="dotted"><span>...</span></li>
          <li class="next">
            <a href="#">下一页»</a>
          </li>
        </ul>
        <div><span>共10页&nbsp;</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  computed:{
    goodsList(){
      return this.$store.state.search.detailMsg.goodsList || []
    }
  }
};
</script>

<style scoped lang="less">
.details {
  margin-bottom: 5px;
  .sui-navbar {
    overflow: visible;
    margin-bottom: 0;
    .filter {
      min-height: 40px;
      padding-right: 20px;
      background: #fbfbfb;
      border: 1px solid #e2e2e2;
      padding-left: 0;
      border-radius: 0;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
      .sui-nav {
        position: relative;
        left: 0;
        display: block;
        float: left;
        margin: 0 10px 0 0;
        li {
          float: left;
          line-height: 18px;
          a {
            display: block;
            cursor: pointer;
            padding: 11px 15px;
            color: #777;
            text-decoration: none;
          }
          &.active {
            a {
              background: #e1251b;
              color: #fff;
            }
          }
        }
      }
    }
  }
  .goods-list {
    margin: 20px 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        height: 100%;
        width: 20%;
        margin-top: 10px;
        line-height: 28px;
        .list-wrap {
          .p-img {
            padding-left: 15px;
            width: 215px;
            height: 255px;
            a {
              color: #666;
              img {
                max-width: 100%;
                height: auto;
                vertical-align: middle;
              }
            }
          }
          .price {
            padding-left: 15px;
            font-size: 18px;
            color: #c81623;
            strong {
              font-weight: 700;
              i {
                margin-left: -5px;
              }
            }
          }
          .attr {
            padding-left: 15px;
            width: 85%;
            overflow: hidden;
            margin-bottom: 8px;
            min-height: 38px;
            cursor: pointer;
            line-height: 1.8;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            a {
              color: #333;
              text-decoration: none;
            }
          }
          .commit {
            padding-left: 15px;
            height: 22px;
            font-size: 13px;
            color: #a7a7a7;
            span {
              font-weight: 700;
              color: #646fb0;
            }
          }
          .operate {
            padding: 12px 15px;
            .sui-btn {
              display: inline-block;
              padding: 2px 14px;
              box-sizing: border-box;
              margin-bottom: 0;
              font-size: 12px;
              line-height: 18px;
              text-align: center;
              vertical-align: middle;
              cursor: pointer;
              border-radius: 0;
              background-color: transparent;
              margin-right: 15px;
            }
            .btn-bordered {
              min-width: 85px;
              background-color: transparent;
              border: 1px solid #8c8c8c;
              color: #8c8c8c;
              &:hover {
                border: 1px solid #666;
                color: #fff !important;
                background-color: #666;
                text-decoration: none;
              }
            }
            .btn-danger {
              border: 1px solid #e1251b;
              color: #e1251b;
              &:hover {
                border: 1px solid #e1251b;
                background-color: #e1251b;
                color: white !important;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
  .page {
    width: 733px;
    height: 66px;
    overflow: hidden;
    float: right;
    .sui-pagination {
      margin: 18px 0;
      ul {
        margin-left: 0;
        margin-bottom: 0;
        vertical-align: middle;
        width: 490px;
        float: left;
        li {
          line-height: 18px;
          display: inline-block;
          a {
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            border: 1px solid #e0e9ee;
            margin-left: -1px;
            font-size: 14px;
            padding: 9px 18px;
            color: #333;
          }
          &.active {
            a {
              background-color: #fff;
              color: #e1251b;
              border-color: #fff;
              cursor: default;
            }
          }
          &.prev {
            a {
              background-color: #fafafa;
            }
          }
          &.disabled {
            a {
              color: #999;
              cursor: default;
            }
          }
          &.dotted {
            span {
              margin-left: -1px;
              position: relative;
              float: left;
              line-height: 18px;
              text-decoration: none;
              background-color: #fff;
              font-size: 14px;
              border: 0;
              padding: 9px 18px;
              color: #333;
            }
          }
          &.next {
            a {
              background-color: #fafafa;
            }
          }
        }
      }
      div {
        color: #333;
        font-size: 14px;
        float: right;
        width: 241px;
      }
    }
  }
}
</style>