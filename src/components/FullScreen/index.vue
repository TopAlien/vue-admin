<script setup>
  import { useFullscreen } from '@vueuse/core'

  const { isFullscreen, enter, exit } = useFullscreen()
</script>

<template>
  <div class="cursor-pointer">
    <a-tooltip v-if="!isFullscreen" title="全屏" color="#1677ff">
      <i

        class="i-carbon-intent-request-scale-out block"
        @click="enter"
      />
    </a-tooltip>
    <a-tooltip v-else title="退出全屏" color="#1677ff">
      <i
        class="i-carbon-intent-request-scale-in block"
        @click="exit"
      />
    </a-tooltip>
  </div>
</template>
