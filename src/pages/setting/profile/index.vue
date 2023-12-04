<script setup>
  import { reactive, ref } from 'vue'
  import { setLockPas } from '@/utils/storage'
  import { message } from 'ant-design-vue'

  const userInfoRules = {
    lockScreenPas: [{ required: true, message: '请输入锁屏密码！' }]
  }

  const userInfo = reactive({
    lockScreenPas: ''
  })

  const formRef = ref()
  const confirmSetLockPas = () => {
    formRef.value.validate().then(({ lockScreenPas }) => {
      setLockPas(lockScreenPas)
      message.success('设置成功')
      formRef.value.resetFields()
    })
  }
</script>

<template>
  <a-form
    ref="formRef"
    :model="userInfo"
    :rules="userInfoRules"
  >
    <a-form-item
      label="锁屏密码"
      name="lockScreenPas"
    >
      <a-input-password
        v-model:value="userInfo.lockScreenPas"
        placeholder="请输入锁屏密码"
        class="w240px mr16px"
      />
      <a-button
        type="primary"
        @click="confirmSetLockPas"
      >
        确认设置
      </a-button>
    </a-form-item>
  </a-form>
</template>
