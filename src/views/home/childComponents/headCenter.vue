<!--  -->
<template>
  <head-center>
      <template v-slot:left>
          <div class="logo">
              <img src="~assets/img/320.png">
          </div>
      </template>
      <template v-slot:center>
          <div>
              搜索
          </div>
      </template>
      <template v-slot:right>
          <div></div>
      </template>
  </head-center>
</template>

<script>
import headCenter from 'components/navbar/center'
export default {
  name: '',
  data () {
    return {

    };
  },

  components: {
    headCenter,
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.logo{
    padding: 20px 0 0 0;
    width: 200px;
    height: 100px;
}
.logo img{
    width: 100%;
    margin-left: -8px;
}
</style>