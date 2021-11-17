<!--  -->
<template>
  <div class="controlbar">
      <slot></slot>
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
.controlbar{
    display: flex;
    background-color: #3399CC;
    height: 25px;
    padding: 10px 200px;
    color: white;
    align-items: center;
}
</style>