<template>
  <div id="app">
    <!--
    浔阳江头夜送客，枫叶荻花秋瑟瑟。
    主人下马客在船，举酒欲饮无管弦。
    醉不成欢惨将别，别时茫茫江浸月。
    忽闻水上琵琶声，主人忘归客不发。
    寻声暗问弹者谁？琵琶声停欲语迟。
    移船相近邀相见，添酒回灯重开宴。
    千呼万唤始出来，犹抱琵琶半遮面。
    转轴拨弦三两声，未成曲调先有情。
    -->
    <anime-typing>浔阳江头夜送客</anime-typing>
    <anime-typing animation-in="fadeIn" :offset="1000">枫叶荻花秋瑟瑟</anime-typing>
    <anime-typing animation-in="bounceUp" :offset="2000">主人下马客在船</anime-typing>
    <anime-typing animation-in="slideInLeft" :offset="3000">举酒欲饮无管弦</anime-typing>
    <anime-typing animation-in="zoomIn" :offset="4000" :duration="200" easing="linear">醉不成欢惨将别</anime-typing>
    <anime-typing animation-in="rotateRightIn" :offset="5000" :duration="1000" :delay="500" @complete="isShowContinue=true">别时茫茫江浸月</anime-typing>
    <anime-typing animation-in="rotateRightIn" :offset="9000" :duration="200" :delay="200">忽闻水上琵琶声</anime-typing>
    <anime-typing animation-in="rollTopIn" :offset="10000" :duration="400" :delay="200" easing="linear">主人忘归客不发</anime-typing>
    <anime-typing animation-in="rollRightIn" :offset="11000" :duration="400" :delay="200" easing="linear">寻声暗问弹者谁</anime-typing>
    <anime-typing animation-in="defined" :offset="13000" :duration="400" :delay="200" easing="linear" :defined-animations="definedAnimation">琵琶声停欲语迟</anime-typing>
  </div>
</template>

<script>
import AnimeTyping from '../src/AnimeTyping'

export default {
  name: 'app',
  components: {
    AnimeTyping
  },
  data () {
    return {
      isShowContinue: false,
      togglePlay: false,
      definedAnimation: {
        defined: {
          animateFrom: {
            rotateY: '120deg',
            translateX: -20,
            opacity: 0
          },
          animateTo: {
            rotateY: '0',
            translateX: 0,
            opacity: 1
          }
        }
      }
    }
  },

  methods: {
    replay () {
      debugger
    },
    clickContinue () {
      this.togglePlay = true
    }
  }
}
</script>

<style lang="less">
  #app {
    text-align: center;
    font-size: 20px;
  }
</style>
