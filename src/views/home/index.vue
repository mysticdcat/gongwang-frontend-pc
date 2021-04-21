<template>
  <div id="home">
    <div class="main-wrapper">
      <div class="left-container">
        <div class="chart-wrapper">
          <p class="title">平安家庭</p>
          <div class="chart-container"><myChart :options="pieOptions" /></div>
        </div>
        <div class="chart-wrapper">
          <p class="title">美丽庭院</p>
          <div class="chart-container"><myChart :options="lineOption" /></div>
        </div>
        <div class="chart-wrapper">
          <p class="title">志愿</p>
        </div>
      </div>
      <div class="center-container"></div>
      <div class="right-container">
        <div class="chart-wrapper">
          <p class="title">激励运用</p>
        </div>
        <div class="chart-wrapper">
          <p class="title">党员引领</p>
        </div>
        <div class="chart-wrapper">
          <p class="title">曝光台</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myChart from "components/my-chart/index";
export default {
  name: "hello",
  components: {
    myChart,
  },
  data() {
    return {
      pieOptions: {
        tooltip: {
          trigger: "item",
        },
        legend: {
          right: "40",
          bottom: "60",
          orient: "vertical",
          itemWidth: 26,
          itemHeight: 8,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
          },
          itemGap: 24,
        },
        dataIndex: 1,
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "16",
                fontWeight: "bold",
                formatter: function (params) {
                  console.log(params);
                  let str =
                    '<div class="showBox">' + params.data.name + "</div>";
                  return str;
                },
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "绿码用户" },
              { value: 735, name: "黄码用户" },
              { value: 580, name: "红码用户" },
            ],
          },
        ],
        color: ["#4CC330", "#F2A01D", "#FF1A1A"],
      },
      lineOption: {
        color: ["#4CC330", "#F2A01D", "#FF1A1A"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["绿码用户", "黄码用户", "红码用户"],
          top:5,
          textStyle:{
            color:"#FFFFFF",
            fontSize:12
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "绿码用户",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210,132],
          },
          {
            name: "黄码用户",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310,132],
          },
          {
            name: "红码用户",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410,132],
          }
        ],
      },
    };
  },

  methods: {},
};
</script>
<style lang="scss">
#home {
  height: 1080px;
  width: 1920px;
  background-size: 100% 100%;
  background-image: url("~@/images/home-bg.png");
  .main-wrapper {
    display: flex;
    justify-content: center;
    .chart-wrapper {
      width: 100%;
      height: 314px;
      margin-bottom: 2px;
      background-size: 100% 100%;
      background-image: url("~@/images/chart-bg.png");
      .title {
        text-align: center;
        padding: 19px;
        font-size: 20px;
        height: 50px;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
        line-height: 20px;
        text-shadow: 0px 11px 16px #3957a3;
      }
      .chart-container {
        height: 274px;
      }
    }
    .left-container {
      width: 486px;
    }
    .center-container {
      width: 913px;
      margin: 0 3px;
    }
    .right-container {
      width: 480px;
    }
  }
}
</style>