<template>
  <div id="hy-swiper">
    <div class="swiper">
      <div v-for="(item, index) in list" :key="index" class="swiper-item">
        <img src="" alt="" />
        <div class="info-wrapper">
          <p>类型：违章建筑</p>
          <p>位置：东华路口</p>
          <p>时间： 2021.04.05</p>
          <p>
            详情：违章建筑是指未取得拟建工程规划许可证（原址、选址建房意见书），在规划区以外建设，违反《土地管理法》、《城乡规划法》、《村庄和集镇规划建设管理条例》等相房屋及设施。
          </p>
        </div>
      </div>
    </div>
    <div class="swiper-circle">
      <ul>
        <li
          :key="index"
          v-for="(item, index) in swiperItemCount"
          :class="currentIndex == item ? 'swiperItemActive' : ''"
          @click="clickItem(item)"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    list: {
      // 图片内容
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperItemCount: 0, // 轮播图数
      swiperStyle: "", // swiper的样式
      currentIndex: 1, // 当前的 index
      moveRatio: 0.25, // 跳转下一张图片所需的移动距离比例
    };
  },
  methods: {
    // 设置滚动位置
    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    },
    // 设置滚动过渡动画
    setTransition() {
      this.swiperStyle.transition = `transform 300ms`;
    },

    // 1.先操作 dom 元素
    handleDom() {
      // 获取 dom 对象
      let swiper = document.querySelector(".swiper");
      this.swiperItemCount = swiper.children.length;
      // 复制第一张图片和最后一张图片，分别放在最后面和最前面
      let nodeFirst = swiper.children[0].cloneNode(true);
      let nodeLast = swiper.children[this.swiperItemCount - 1].cloneNode(true);
      swiper.appendChild(nodeFirst); // 如果 cloneNode 报错，那么只能在 dom 中直接添加最后一个图片了
      swiper.insertBefore(nodeLast, swiper.children[0]);
      this.swiperStyle = swiper.style;
      this.totalWidth = swiper.offsetWidth;

      // 此时，currentIndex 的初始值为 1 ，那么先显示第二张图片
      this.setTransform(-this.currentIndex * this.totalWidth);
    },

    // 3.判读第一张和最后一张图片的逻辑滚动，设置正确的滚动，抽取为函数
    currentScroll() {
      if (this.currentIndex == this.swiperItemCount + 1) {
        this.currentIndex = 1;
      } else if (this.currentIndex == 0) {
        this.currentIndex = this.swiperItemCount;
      }
      setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        this.setTransform(-this.currentIndex * this.totalWidth);
      }, 300);
    },

    // 4. 实现点击小圆圈跳转相应的图片
    clickItem(item) {
      this.stopTimer();
      this.currentIndex = item;
      this.setTransform(-this.currentIndex * this.totalWidth);

      this.swiperAuto();
    },

    // 5.设置定时器，实现轮播功能
    swiperAuto() {
      this.playTimer = setInterval(() => {
        this.currentIndex++;
        this.setTransition();
        this.setTransform(-this.currentIndex * this.totalWidth);
        this.currentScroll();
      }, 2000);
    },
    stopTimer() {
      clearInterval(this.playTimer);
    },
  },
  mounted() {
    // 由于网络请求的图片存在时间延迟，所以等 0.5s 让图片渲染出来
    setTimeout(() => {
      this.handleDom();
      this.swiperAuto();
    }, 500);
  },
};
</script>

<style lang="scss">
#hy-swiper {
  position: relative;
  overflow: hidden;
  height: 100%;
  .swiper {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    // transform: translateX(-375px);
    .swiper-item {
      float: left;
      width: 100%;
      padding: 20px;
      display: flex;
      flex-shrink: 0; //收缩因子为0 则可以使得所有图片在同一行显示
      img {
        width: 220px;
        height: 220px;
      }
      .info-wrapper {
        padding-left: 16px;
        p {
          font-size: 14px;
          font-family: PingFang;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 8px;
        }
      }
    }
  }
  .swiper-circle {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    ul li {
      list-style: none;
      float: left;
      width: 6px;
      height: 6px;
      background: #d7e7ff;
      border-radius: 3px 3px 3px 3px;
      margin: 0 4px;
    }
    .swiperItemActive {
      width: 20px;
    }
  }
}
</style>