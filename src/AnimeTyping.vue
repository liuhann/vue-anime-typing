<template>
  <vue-anime-group ref="group" class="anime-typing" :delay="(el, i)=>i * delay" :duration="duration"
                   :from="animateFrom" :animate="animateTo" :playing="playing" :easing="easing" :offset="offset"
                   :style="groupStyle"
                  @complete="$emit('complete')" @begin="$emit('begin')">
    <vue-anime class="anime" v-for="(char, index) in characters" :key="index" v-html="char" :style="charStyle"></vue-anime>
  </vue-anime-group>
</template>

<script>
import { VueAnimeGroup, VueAnime } from 'vue-anime'
import animations from './animations'

export default {
  name: 'AnimeTyping',
  components: {
    VueAnimeGroup,
    VueAnime
  },
  props: {
    text: {
      type: String
    },
    offset: {
      type: Number,
      default () {
        return 0
      }
    },
    duration: {
      type: Number,
      default () {
        return 1000
      }
    },
    delay: {
      type: Number,
      default: 50
    },
    animationIn: {
      type: String,
      default: 'bounceDown'
    },
    animationOut: {
      type: String
    },
    playing: {
      type: Boolean,
      default () {
        return true
      }
    },
    easing: {
      type: [String, Function],
      default () {
        return 'easeOutElastic'
      }
    },
    groupStyle: {
      type: Object
    },
    charStyle: {
      type: Object
    },
    definedAnimations: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    this.animations = Object.assign(animations, this.definedAnimations)
    return {
      characters: '',
      animateFrom: this.animations[this.animationIn].animateFrom,
      animateTo: this.animations[this.animationIn].animateTo
    }
  },
  watch: {
    playing () {
    }
  },

  created () {
    let fullText = ''
    if (this.$slots.default) {
      fullText = this.$slots.default[0].text
    } else {
      fullText = this.text
    }
    this.characters = fullText
    this.initEvent()
  },

  methods: {
    initEvent () {
      if (this.$listeners.update) {
        this.$refs.group.$on('update', () => {
          this.$emit('update')
        })
      }
    },

    animateIn () {
      this.$refs.group.play()
    },
    replay () {
      this.$refs.group.replay()
    },
    animateOut () {

    }
  }
}
</script>

<style lang="less">
.anime-typing {
  .anime {
    display: inline-block;
    min-width: 20px;
  }
}
</style>
