<!--  -->
<template>
    <heads>
        <template v-slot:top>
            <head-top></head-top>
        </template>
        <template v-slot:center>
            <head-center></head-center>
        </template>
        <template v-slot:bottom>
            <control-bar>
                <div class="cont-item">预约体检</div>
                <div class="cont-item">首页</div>
                <div class="cont-item">健康知识</div>
                <div class="cont-item">检后服务</div>
            </control-bar>
            <!-- 轮播图 -->
            <!-- 宣传图 -->
        </template>
    </heads>
</template>

<script>
import heads from "components/navbar/navbar";
import headTop from "./headTop";
import headCenter from './headCenter.vue'
import controlBar from 'components/navbar/controlbar'
export default {
  name: "homeHead",
  data() {
    return {};
  },

  components: {
    heads,
    headTop,
    headCenter,
    controlBar,
  },

  computed: {},

  methods: {},
};
</script>
<style scoped>
.cont-item{
    flex: 1;
    font-size: 18px;
    text-align: center;
}
</style>