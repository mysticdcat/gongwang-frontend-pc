<template>
  <div id="home">
    <header class="header-wrapper"></header>
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
        <div class="chart-wrapper volunteer-wrapper">
          <p class="title">志愿</p>
          <div class="table-wrapper">
            <div class="table-header">
              <div class="table-item">村民</div>
              <div class="table-item">活动名称</div>
              <div class="table-item">获得积分</div>
              <div class="table-item">活动时间</div>
            </div>
            <div class="table-body">
              <div class="table-body-r" v-for="item in 6" :key="item">
                <div class="table-item">王得按</div>
                <div class="table-item">垃圾环境治理垃圾环境治理</div>
                <div class="table-item">56</div>
                <div class="table-item">2021.04.02</div>
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
        <div class="chart-wrapper volunteer-wrapper">
          <p class="title">实时垃圾分类数据</p>
          <div class="table-wrapper">
            <div class="table-header">
              <div class="table-item">村庄</div>
              <div class="table-item">门牌号</div>
              <div class="table-item">获得积分</div>
              <div class="table-item">活动时间</div>
              <div class="table-item">活动时间</div>
              <div class="table-item">门牌号</div>
              <div class="table-item">获得积分</div>
              <div class="table-item">活动时间</div>
              <div class="table-item">活动时间</div>
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
      <div class="right-container">
        <div class="chart-wrapper">
          <p class="title">激励运用</p>
          <div class="chart-container"><myChart :options="barOptions" /></div>
        </div>
        <div class="chart-wrapper volunteer-wrapper">
          <p class="title">党员引领</p>
          <div class="table-wrapper">
            <div class="table-header">
              <div class="table-item">党员名</div>
              <div class="table-item">活动名称</div>
              <div class="table-item">获得积分</div>
              <div class="table-item">活动时间</div>
              <div class="table-item">活动时间</div>
            </div>
            <div class="table-body">
              <div class="table-body-r" v-for="item in 6" :key="item">
                <div class="table-item">黄山善</div>
                <div class="table-item">100</div>
                <div class="table-item">184</div>
                <div class="table-item">89</div>
                <div class="table-item">6</div>
              </div>
            </div>
          </div>
        </div>
        <div class="chart-wrapper">
          <p class="title">激励运用</p>
          <div class="chart-container swipper-container">
            <mySwiper :list="[{}, {}, {}]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import myChart from "components/my-chart/index";
import mySwiper from "components/my-swiper/index";

export default {
  name: "hello",
  components: {
    myChart,
    mySwiper,
  },
  data() {
    return {
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
      },
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
          top: 5,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 12,
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
            data: [120, 132, 101, 134, 90, 230, 210, 132],
          },
          {
            name: "黄码用户",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310, 132],
          },
          {
            name: "红码用户",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410, 132],
          },
        ],
      },
      barOptions: {
        xAxis: {
          type: "category",
          data: ["表彰", "信用贷", "奖金", "补偿", "其他"],
        },
        yAxis: {
          type: "value",
        },
        color: ["red", "#F2A01D", "#FF1A1A", "#F2A01D", "#FF1A1A"],
        series: [
          {
            data: [120, 200, 150, 80, 70],
            type: "bar",
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