<template>
  <div class="head">
      <div class="top">
          <slot name="top"></slot>
      </div>
      <div class="center">
          <slot name="center"></slot>
      </div>
      <div class="bottom">
          <slot name="bottom"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.top{
    font-size: 15px;
    height: 26px;
    line-height: 26px;
    padding: 5px 200px;
    background-color: #f0f0f0;
}
</style>