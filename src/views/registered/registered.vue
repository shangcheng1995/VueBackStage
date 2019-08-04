<template>
  <div class="registered">
    <!-- {{ registered }} -->
    <header>
      返回
    </header>
    <countTo :startVal='startVal' :endVal='endVal' :duration='duration' class="num"></countTo>

</div>

</template>

<script>
import countTo from 'vue-count-to'
export default {
  data () {
    return {
      registered: '注册',
      startVal: 0,
      endVal: 7,
      duration: 7000,
      list: [0, 0]
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    countTo
  }
}
</script>

<style lang="scss" scoped>
.num{
  width: 35px;
  height: 46px;
  padding: 5px;
  text-align: center;
  line-height: 46px;
  background: #0954EA;
  color: #fff;
}
.nwwest-roll {
  height: 20px;
  overflow: hidden;
}
.roll-ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.nwwest-roll li {
  height: 35px;
  line-height: 35px;
}
.anim {
  transition: all 1s;
}
</style>
