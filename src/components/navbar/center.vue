<!--  -->
<template>
  <div class="center">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="c-center">
          <slot name="center"></slot>
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
.center{
    display: flex;
    padding: 0 200px;
}
.left{
    flex: 1;
    display: flex;
    align-items: center;
}
.c-center{
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

}
.right{
    flex: 1;
}
</style>