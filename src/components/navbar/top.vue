<!--  -->
<template>
  <div class="top">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.top{
    /* height: 35px; */
    display: flex;
    color: #8b8ba6;  
}
.left{
    flex: 1;
}
.right{
    flex: 1;
    display: flex;
    text-align: right;
    justify-content: right;
}
</style>