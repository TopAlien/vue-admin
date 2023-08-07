<script setup>
  import config from '@/config/index.js'
  import { message } from 'ant-design-vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const handleLogin = () => {
    message.success('登录成功')
    router.push({ path: '/' })
  }
</script>

<template>
  <div class="login_form">
    <div class="login_form_content">
      <h3 class="login_title">欢迎登录 {{ config.title }}</h3>
      <p class="sub_title">欢迎登录 {{ config.title }}</p>
      <a-form>
        <a-form-item>
          <a-input placeholder="用户名：admin">
            <template #prefix>
              <i class="i-carbon-group-account inline-block" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input-password placeholder="密码：admin">
            <template #prefix>
              <i class="i-carbon-password inline-block" />
            </template>
          </a-input-password>
        </a-form-item>
      </a-form>
      <a-button
        type="primary"
        class="w320px"
        @click="handleLogin"
      >
        登录
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="less">
  .login_form {
    position: relative;
    flex: 1;

    &_content {
      width: 320px;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-160px);
    }
  }

  .sub_title {
    font-size: 16px;
    color: #ccc;
  }
</style>
