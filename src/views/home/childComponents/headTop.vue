<!--  -->
<template>
  <headtop>
      <template v-slot:left>
         <div>XXXXXX医院体检服务平台</div> 
      </template>
      <template v-slot:right>
         <div class="topright">你好！<a href="#">请登录</a></div>
         <div class="topright"><a href="#">马上注册</a></div>
         <div class="topright">帮助中心</div>
         <div class="topright">你好！请登录</div> 
      </template>
  </headtop>
</template>

<script>
import headtop from 'components/navbar/top'
export default {
  name: 'headTop',
  data () {
    return {

    };
  },

  components: {
    headtop
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.topright{
    margin-left: 10px;
}
</style>