<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpload: {
      type: Boolean,
      default: true
    },
    useTransition: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpload,
      useTransition: this.useTransition,

      bounce: {
        top: false,
        bottom: false
      }
    })
    this.scroll.on('scroll', position => {
      //  console.log(position);
      this.$emit('scroll', position)
    })
    //  console.log(this.scroll);

    if (this.pullUpload) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x, y, time = 300) {
      //time300默认值
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      console.log('触发')

      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      console.log('防抖')

      this.scroll && this.scroll.refresh()
    },
    getScrolly() {
      return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style>
</style>