<script setup>
  import { useFullscreen } from '@vueuse/core'

  const { isFullscreen, enter, exit } = useFullscreen()
</script>

<template>
  <div class="cursor-pointer">
    <a-tooltip color="white">
      <template v-slot:title>
        <span style="color: black">{{ isFullscreen ? '退出全屏' : '全屏' }}</span>
      </template>

      <i
        v-if="!isFullscreen"
        class="i-carbon-intent-request-scale-out block"
        @click="enter"
      />
      <i
        v-else
        class="i-carbon-intent-request-scale-in block"
        @click="exit"
      />
    </a-tooltip>
  </div>
</template>
