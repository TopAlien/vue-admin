<script setup>
  import bannerImage from '@/assets/login-banner.png'
  import Logo from '@/layout/sider/components/Logo.vue'

  const carouselItem = [
    {
      slogan: '开箱即用的高质量模板',
      subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
      image: bannerImage
    },
    {
      slogan: '内置了常见问题的解决方案',
      subSlogan: '国际化，路由配置，状态管理应有尽有',
      image: bannerImage
    },
    {
      slogan: '接入可视化增强工具AUX',
      subSlogan: '实现灵活的区块式开发',
      image: bannerImage
    }
  ]
</script>

<template>
  <div class="banner">
    <div class="banner_logo">
      <Logo />
    </div>
    <div class="banner_inner">
      <a-carousel
        autoplay
        arrows
        class="carousel"
        effect="fade"
      >
        <template #prevArrow>
          <div
            class="custom-slick-arrow"
            style="left: 10px; z-index: 1"
          >
            <i class="i-carbon-previous-outline inline-block" />
          </div>
        </template>
        <template #nextArrow>
          <div
            class="custom-slick-arrow"
            style="right: 14px"
          >
            <i class="i-carbon-next-outline inline-block" />
          </div>
        </template>

        <div
          class="carousel_wrap"
          v-for="item in carouselItem"
          :key="item.slogan"
        >
          <div
            :key="item.slogan"
            class="carousel_item"
          >
            <div class="carousel_title">{{ item.slogan }}</div>
            <div class="carousel_sub_title">{{ item.subSlogan }}</div>
            <img
              class="carousel_image"
              :src="item.image"
            />
          </div>
        </div>
      </a-carousel>
    </div>
  </div>
</template>

<style scoped lang="less">
  .banner {
    background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
    display: flex;
    align-items: center;
    justify-content: center;

    &_inner {
      width: 550px;
      flex: 1;
      height: 100%;
    }

    &_logo {
      position: absolute;
      top: 30px;
      left: 30px;
    }
  }

  .carousel {
    height: 100%;

    &_wrap {
      height: 100vh;
      color: white;
    }

    &_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    &_title {
      color: var(--color-fill-1);
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
    }

    &_sub_title {
      margin-top: 8px;
      color: var(--color-text-3);
      font-size: 14px;
      line-height: 22px;
    }

    &_image {
      width: 320px;
      margin-top: 30px;
    }
  }

  // responsive
  @media (max-width: @screen-lg) {
    .container {
      .banner {
        width: 25%;
      }
    }
  }

  :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
  }

  :deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
  }

  :deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
  }
</style>
