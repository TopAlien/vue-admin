<script setup>
  import { ref } from 'vue'
  import { message } from 'ant-design-vue'
  import Footer from '@/components/Footer/index.vue'
  import config from '@/config/index.js'
  import { useRouter } from 'vue-router'
  import useUserInfoStore from '@/store/user-info.js'

  const rulesLogin = {
    username: [{ required: true, message: '请输入用户名！' }],
    password: [{ required: true, message: '请输入用户密码！' }]
  }

  const loginRef = ref()
  const loginForm = ref({ username: '', password: '' })

  const router = useRouter()
  const userInfo = useUserInfoStore()
  const handleLogin = () => {
    loginRef.value.validate().then(({ username, password }) => {
      if (password !== 'admin' || username !== 'admin') {
        message.error('账号或密码不正确！')
        return
      }

      userInfo.login()
      message.success('登录成功')
      router.push({ path: '/' })
    })
  }
</script>

<template>
  <div class="login_form">
    <div class="login_form_content">
      <h3 class="login_title">欢迎登录 {{ config.title }}</h3>
      <p class="sub_title">欢迎登录 {{ config.title }}</p>
      <a-form
        ref="loginRef"
        :model="loginForm"
        :rules="rulesLogin"
      >
        <a-form-item name="username">
          <a-input
            v-model:value="loginForm.username"
            placeholder="用户名：admin"
          >
            <template #prefix>
              <i class="i-carbon-group-account inline-block" />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password
            v-model:value="loginForm.password"
            placeholder="密码：admin"
          >
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
    <div class="form_footer">
      <Footer />
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
    color: #888888;
  }

  .form_footer {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
