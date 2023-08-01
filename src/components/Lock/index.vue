<script setup>
  import { useSettingStore } from '@/store'

  const setting = useSettingStore()
</script>

<template>
  <div class="lock">
    <div class="lock_content">
      <img
        class="w80px h80px flex ma mt80px"
        src="/public/vite.svg"
        alt=""
      />
      <h4 class="text-center mt140px">屏幕已锁定</h4>
      <a-button
        class="flex ma"
        type="primary"
        @click="setting.toggleLock"
      >
        <template v-slot:icon>
          <i class="i-carbon-unlocked inline-block" />
        </template>
        解锁
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="less">
  .lock {
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    position: fixed;
    z-index: 9999;

    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
    animation: zoom_1 0.6s;

    &_content {
      width: 500px;
      height: 500px;
      background-color: aliceblue;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-250px, -250px);
      border-radius: 6px;
    }
  }

  @-webkit-keyframes zoom_1 {
    0% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
</style>
