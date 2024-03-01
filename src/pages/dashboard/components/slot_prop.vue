<script setup>
  const userInfo = { name: 'ealien', age: 18, gender: 'male' }
</script>

<template>
  <div class="slot_prop">
    <slot
      user="ealien"
      age="18"
      :userInfo="userInfo"
    />
  </div>
</template>
