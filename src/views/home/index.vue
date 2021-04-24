<template>
  <div id="home">
    <home-header></home-header>
    <div class="main-wrapper">
      <div class="left-container">
        <div class="chart-wrapper bg-1">
          <p class="title">公望美好家庭指数标准</p>
          <div class="chart-container">
            <myChart :options="pieOptionsSec" />
          </div>
        </div>
        <div class="chart-wrapper bg-2">
          <p class="title">公望美好家庭指数分布图</p>
          <div class="chart-container">
            <myChart :options="pieOptionsSec" />
          </div>
        </div>
        <div class="chart-wrapper bg-3 volunteer-wrapper">
          <p class="title">公望美好家庭指数</p>
          <div class="table-wrapper">
            <div class="table-header">
              <div class="table-item">村庄</div>
              <div class="table-item">门牌号</div>
              <div class="table-item">志愿活动</div>
              <div class="table-item">积分</div>
              <div class="table-item">时间</div>
            </div>
            <div class="table-body">
              <div class="table-body-r" v-for="item in 6" :key="item">
                <div class="table-item">黄山善</div>
                <div class="table-item">100</div>
                <div class="table-item">184</div>
                <div class="table-item">89</div>
                <div class="table-item">6</div>
                <div class="table-item">100</div>
                <div class="table-item">184</div>
                <div class="table-item">89</div>
                <div class="table-item">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-container">
        <div class="map-wrapper">
          <div class="map-opreate">
            <div class="map-opreate-item">
              <img class="icon" src="~@/images/dear-icon.png" alt="" />
              <span>处理站</span>
            </div>
            <div class="map-opreate-item">
              <img class="icon" src="~@/images/checked-icon.png" alt="" />
              <span>收集点</span>
            </div>
            <div class="map-opreate-item">
              <img class="icon" src="~@/images/car-icon.png" alt="" />
              <span>车辆</span>
            </div>
          </div>
        </div>
        <div class="chart-wrapper bg-4 volunteer-wrapper">
          <p class="title">实时垃圾分类数据</p>
          <div class="change-wrapper">
            <div class="chart-container">
              <myChart :options="barOptionsSec" />
            </div>
            <div class="table-wrapper">
              <div class="table-header">
                <div class="table-item">村庄</div>
                <div class="table-item">村民</div>
                <div class="table-item">合格天数</div>
                <div class="table-item">合格率</div>
              </div>
              <div class="table-body">
                <div class="table-body-r" v-for="item in 6" :key="item">
                  <div class="table-item">黄山善</div>
                  <div class="table-item">100</div>
                  <div class="table-item">184</div>
                  <div class="table-item">89</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="chart-wrapper bg-5">
          <p class="title">激励运用</p>
          <div class="table-wrapper">
            <div class="table-header">
              <div class="table-item">村庄</div>
              <div class="table-item">门牌号</div>
              <div class="table-item">志愿活动</div>
              <div class="table-item">积分</div>
              <div class="table-item">时间</div>
            </div>
            <div class="table-body">
              <div class="table-body-r" v-for="item in 6" :key="item">
                <div class="table-item">黄山善</div>
                <div class="table-item">100</div>
                <div class="table-item">184</div>
                <div class="table-item">89</div>
                <div class="table-item">6</div>
                <div class="table-item">100</div>
                <div class="table-item">184</div>
                <div class="table-item">89</div>
                <div class="table-item">6</div>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-wrapper bg-6 volunteer-wrapper">
          <p class="title">平安家庭</p>
          <div class="chart-container">
            <myChart :options="barOptionsFir" />
          </div>
        </div>
        <div class="chart-wrapper bg-7">
          <p class="title">激励运用</p>
          <div class="table-wrapper">
            <div class="table-header">
              <div class="table-item">村庄</div>
              <div class="table-item">门牌号</div>
              <div class="table-item">村民</div>
              <div class="table-item">图片</div>
              <div class="table-item">获得积分</div>
            </div>
            <div class="table-body">
              <div class="table-body-r" v-for="item in 6" :key="item">
                <div class="table-item">黄山善</div>
                <div class="table-item">100</div>
                <div class="table-item">184</div>
                <div class="table-item">89</div>
                <div class="table-item">6</div>
                <div class="table-item">100</div>
                <div class="table-item">184</div>
                <div class="table-item">89</div>
                <div class="table-item">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myChart from "components/my-chart/index";
import mySwiper from "components/my-swiper/index";
import homeHeader from "./components/home-header";
export default {
  name: "hello",
  components: {
    myChart,
    mySwiper,
    homeHeader,
  },
  data() {
    return {
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
      },
      pieOptionsFir: {
        color: ["#4CC330", "#F2A01D", "#FF1A1A"],
        legend: {
          right: 10,
          top: "center",
          orient: "vertical",
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            type: "pie",
            data: [{ value: 1048, name: "美好指数" }],
            labelLine: {
              show: false,
            },
          },
          // {
          //   name: "电商直达",
          //   type: "pie",
          //   radius: [40, 100],
          //   center: ["39%", "50%"],
          //   roseType: "area",
          //   itemStyle: {
          //     borderRadius: 0,
          //   },
          //   label: {
          //     show: false,
          //   },
          //   data: [
          //     { value: 1048, name: "绿码用户" },
          //     { value: 735, name: "黄码用户" },
          //     { value: 580, name: "红码用户" },
          //   ],
          // },
        ],
      },
      pieOptionsSec: {
        color: ["#33A5F8", "#3AB71C", "#5DF4C1", "#F7A35C", "#FF6A6A"],
        legend: {
          right: 10,
          top: "center",
          orient: "vertical",
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: "#fff",
          },
        },
        series: [
          {
            bottom: 20,
            type: "pie",
            name: "电商直达",

            radius: [40, 100],
            center: ["39%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 0,
            },
            label: {
              show: true,
              formatter: "{c}户\n{d}%",
              align: "center",
            },
            data: [
              { value: 848, name: "五星用户", label: { color: "#33A5F8" } },
              { value: 735, name: "四星用户", label: { color: "#3AB71C" } },
              { value: 580, name: "三星用户", label: { color: "#5DF4C1" } },
              { value: 580, name: "二星用户", label: { color: "#F7A35C" } },
              { value: 580, name: "一星用户", label: { color: "#FF6A6A" } },
            ],
          },
        ],
      },
      lineOption: {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月"],
          axisLine: {
            show: true,
            lineStyle: { color: "rgba(255,255,255,1)" },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: { color: "rgba(255,255,255,0.4)" },
          },
        },
        grid: {
          bottom: 20,
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 901, 934, 1290],
            type: "line",
            areaStyle: {},
          },
        ],
      },
      barOptionsFir: {
        color: ["#4CC330", "#F2A01D", "#FF1A1A"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // Use axis to trigger tooltip
            type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          data: ["绿码户", "黄码户", "红码户"],
          textStyle: {
            color: "#fff",
          },
          top: 20,
        },
        grid: {
          left: "25",
          bottom: "20",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}%",
          },
          axisLine: {
            show: true,
            lineStyle: { color: "rgba(255,255,255,1)" },
          },
        },
        yAxis: {
          type: "category",
          axisLine: {
            show: true,
            lineStyle: { color: "rgba(255,255,255,1)" },
          },
          data: [
            "木头桥村",
            "新沙村",
            "富春江村",
            "黄公望村",
            "紫铜村",
            "东洲村",
          ],
        },
        series: [
          {
            name: "绿码户",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            data: [320, 302, 301, 334, 390, 330],
          },
          {
            name: "黄码户",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            data: [120, 132, 101, 134, 90, 230],
          },
          {
            name: "红码户",
            type: "bar",
            stack: "total",
            label: {
              show: true,
            },
            data: [220, 182, 191, 234, 290, 330],
          },
        ],
      },
      barOptionsSec: {
        grid: {
          bottom: 20,
          left: 60,
          width: "75%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          data: [
            "易腐垃圾重量",
            "其他垃圾重量",
            "易腐垃圾收集率",
            "其他垃圾收集率",
          ],
          textStyle: {
            color: "#fff",
            fontSize: 10,
          },
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "重量(kg)",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
            },
          },
          {
            type: "value",
            name: "收集率",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value}%",
            },
          },
        ],
        series: [
          {
            name: "易腐垃圾重量",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3,
            ],
          },
          {
            name: "其他垃圾重量",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3,
            ],
          },
          {
            name: "易腐垃圾收集率",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2,
            ],
          },
          {
            name: "其他垃圾收集率",
            type: "line",
            data: [
              3.0,
              2.2,
              3.8,
              4.5,
              6.3,
              10.1,
              20.3,
              21.3,
              23.0,
              12.4,
              9.3,
              6.2,
            ],
          },
        ],
      },
    };
  },

  methods: {
    initMap() {
      // 获取到作为地图容器的DOM元素
      const container = document.querySelector(".map-wrapper");

      // 创建地图实例
      const map = new AMap.Map(container, {
        center: [117.000923, 36.675807],
        zoom: 5,
        defaultType:1
      });
      // 往地图里加入更多元素（如点标记）
      const marker = new AMap.Marker({
        map: map,
        center: [117.000923, 36.675807],
      });
    },
  },
  mounted() {
    this.initMap();
  },
};
</script>
<style lang="scss">
#home {
  height: 1080px;
  width: 1920px;
  background-size: 100% 100%;
  background-image: url("~@/images/home-bg.png");
  .header-wrapper {
    height: 86px;
    width: 100%;
    background-size: 100% 100%;
    background-image: url("~@/images/header-bg.png");
  }
  .main-wrapper {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    .chart-wrapper {
      width: 100%;

      background-size: 100% 100%;

      .title {
        text-align: center;
        padding-top: 14px;
        font-size: 16px;
        height: 50px;
        font-family: PingFang;
        font-weight: bold;
        color: #ffffff;
        text-shadow: 0px 11px 16px #3957a3;
      }
      .change-wrapper {
        display: flex;
        width: 100%;

        .chart-container,
        .table-wrapper {
          width: 50%;
        }
      }
      .chart-container {
        height: 270px;
      }
      .swipper-item {
        width: 100%;
        height: 270px;
        background-color: pink;
      }
    }
    .bg-1 {
      background-image: url("~@/images/bg-1.png");
      height: 314px;
      margin-bottom: 3px;
    }
    .bg-2 {
      background-image: url("~@/images/bg-2.png");
      height: 320px;
      margin-bottom: 3px;
    }
    .bg-3 {
      background-image: url("~@/images/bg-3.png");
      height: 314px;
    }
    .bg-4 {
      background-image: url("~@/images/bg-4.png");
      height: 314px;
    }
    .bg-5 {
      overflow: hidden;
      background-image: url("~@/images/bg-5.png");
      height: 302px;
      margin-bottom: 4px;
    }
    .bg-6 {
      background-image: url("~@/images/bg-6.png");
      height: 334px;
      margin-bottom: 4px;
    }
    .bg-7 {
      background-image: url("~@/images/bg-7.png");
      height: 330px;
    }
    .volunteer-wrapper {
      height: 330px;
    }
    .table-wrapper {
      width: 100%;
      padding: 5px 14px;

      .table-header,
      .table-body-r {
        width: 100%;
        display: flex;
        .table-item {
          flex: 1;
          text-align: center;
          font-size: 14px;
          line-height: 38px;
          font-family: PingFang;
          font-weight: bold;
          color: #ffffff;
          padding: 0 3px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .table-header {
        background: #1b5ad1;
        height: 38px;
      }
      .table-body-r {
        height: 36px;
        .table-item {
          font-size: 12px;
          line-height: 36px;
          font-weight: normal;
        }
      }
      & .table-body-r:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
    .left-container {
      width: 484px;
    }
    .center-container {
      width: 920px;
      margin: 0 3px;
      .map-wrapper {
        width: 100%;
        height: 632px;
        margin-bottom: 8px;
        position: relative;

        .map-opreate {
          position: absolute;
          left: 2px;
          z-index: 10;
          bottom: 2px;
          width: 140px;
          height: 130px;
          background: rgba(24, 82, 193, 0.6);
          padding: 20px 20px 0;

          .map-opreate-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
          }
          .icon {
            width: 15px;
            height: 19px;
          }
          span {
            padding-left: 7px;
            vertical-align: middle;
            font-size: 14px;
            font-family: PingFang;
            font-weight: bold;
            color: #ffffff;
          }
        }
      }
    }
    .right-container {
      width: 480px;
    }
  }
}
</style>