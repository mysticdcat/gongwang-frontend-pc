<template>
  <div id="home">
    <home-header></home-header>
    <div class="main-wrapper">
      <div class="left-container">
        <div class="chart-wrapper">
          <p class="title">公望美好家庭指数标准</p>
          <div class="chart-container">
            <myChart :options="pieOptionsFir" />
          </div>
        </div>
        <div class="chart-wrapper">
          <p class="title">公望美好家庭指数分布图</p>
          <div class="chart-container">
            <myChart :options="pieOptionsSec" />
          </div>
        </div>
        <div class="chart-wrapper volunteer-wrapper">
          <p class="title">公望美好家庭指数</p>
          <div class="chart-container">
            <myChart :options="lineOption" />
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
        <div class="chart-wrapper volunteer-wrapper">
          <p class="title">实时垃圾分类数据</p>
        </div>
      </div>
      <div class="right-container">
        <div class="chart-wrapper">
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
        <div class="chart-wrapper volunteer-wrapper">
          <p class="title">平安家庭</p>
          <div class="chart-container">
            <myChart :options="barOptionsFir" />
          </div>
        </div>
        <div class="chart-wrapper">
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
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月"],
          axisLine: {
            lineStyle: { color: "#fff" },
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: true,
            lineStyle: { color: "rgba(255,255,255,0.4)" },
          },
          //  splitLine:{show:false}
        },
        title: {
          text: "单位(人):元）",
          right: 22,
          top: 10,
          textStyle: {
            color: "#fff",
            fontSize: 14,
          },
        },
        grid: {
          right: "40",
          bottom: "40",
          show: true,
        },
        series: [
          {
            data: [120, 180, 150, 80],
            type: "bar",
            itemStyle: {
              normal: {
                //这里是重点
                color: "#12B00A",
              },
            },
            barWidth: 20,
            label: {
              show: true,
              color: "#fff",
              position: "top",
            },
            name: "绿码户",
          },
          {
            data: [110, 280, 120, 89],
            type: "bar",
            itemStyle: {
              normal: {
                //这里是重点
                color: "#FDA11E",
              },
            },
            barWidth: 20,
            label: {
              show: true,
              color: "#fff",
              position: "top",
            },
            name: "黄码户",
          },
          {
            data: [140, 240, 90, 120],
            type: "bar",
            itemStyle: {
              normal: {
                //这里是重点
                color: "#FD3D1E",
              },
            },
            barWidth: 20,
            label: {
              show: true,
              color: "#fff",
              position: "top",
            },
            name: "红码户",
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
        height: calc(100% - 50px);
      }
      .swipper-item {
        width: 100%;
        height: 270px;
        background-color: pink;
      }
    }
    .volunteer-wrapper {
      height: 330px;
    }
    .table-wrapper {
      width: 100%;
      padding: 10px 14px;

      .table-header,
      .table-body-r {
        width: 100%;
        display: flex;
        .table-item {
          flex: 1;
          text-align: center;
          font-size: 14px;
          line-height: 40px;
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
        height: 40px;
      }
      .table-body-r {
        height: 36px;
        .table-item {
          font-size: 12px;
          line-height: 36px;
          font-weight: normal;
        }
      }
    }
    .left-container {
      width: 486px;
    }
    .center-container {
      width: 913px;
      margin: 0 3px;
      .map-wrapper {
        width: 100%;
        height: 620px;
        margin-bottom: 10px;
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