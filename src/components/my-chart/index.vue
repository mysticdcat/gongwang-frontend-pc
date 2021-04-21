
<template>
  <div id="my-chart" ref="myChart"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    options: {
      type: Object,
      default: () => ({
        title: { text: "在Vue中使用echarts" },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      }),
    },
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.myChart);
      // 绘制图表
      myChart.setOption(this.options);
    },
  },
  mounted() {
    this.draw();
  },
};
</script>
<style lang="scss" scoped>
#my-chart {
  width: 100%;
  height: 100%;
}
</style>