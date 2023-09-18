<script setup>
  import { ref } from 'vue'
  import idCard from 'idcard'

  const formRef = ref(null)
  let userInfo = ref({ idcard: '440882199100201232' })

  const checkIdCard = (_rule, value) => {
    if (value && !idCard.verify(value)) {
      return Promise.reject('身份证信息不合法，请填写正确的身份证信息！')
    } else {
      return Promise.resolve()
    }
  }

  const rules = {
    idcard: [
      { required: true, message: '请输入身份证号码！' },
      { validator: checkIdCard, trigger: 'blur' }
    ]
  }

  const handleSubmit = () => {
    formRef.value &&
      formRef.value.validate().then(() => {
        const userId = userInfo.value.idcard
        const info = idCard.info(userId)
        userInfo.value = {
          ...info,
          idcard: userId
        }
      })
  }

  const randomIdCard = () => {
    userInfo.value = {
      idcard: idCard.generateIdcard()
    }
  }
</script>

<template>
  <a-button
    type="primary"
    @click="randomIdCard"
  >
    随机一个身份证号码🆔
  </a-button>
  <a-divider />
  <a-form
    ref="formRef"
    :colon="false"
    :model="userInfo"
    :label-col="{ style: { width: '100px' } }"
    :rules="rules"
  >
    <a-form-item
      label="身份证号码:"
      name="idcard"
    >
      <a-input
        v-model:value="userInfo.idcard"
        placeholder="请输入身份证号码"
      />
    </a-form-item>
    <a-form-item label=" ">
      <a-button
        type="primary"
        @click="handleSubmit"
      >
        校验
      </a-button>
    </a-form-item>
  </a-form>

  <a-descriptions
    title="用户信息"
    bordered
  >
    <a-descriptions-item label="是否合法">
      {{ userInfo.valid ? '合法的身份证号' : '不合法的身份证号' }}
    </a-descriptions-item>
    <a-descriptions-item label="地址">{{ userInfo.address }}</a-descriptions-item>
    <a-descriptions-item label="性别">{{ { M: '男', F: '女' }[userInfo.gender] }}</a-descriptions-item>
    <a-descriptions-item label="省份">{{ userInfo.province }}</a-descriptions-item>
    <a-descriptions-item label="城市">{{ userInfo.city }}</a-descriptions-item>
    <a-descriptions-item label="地区">
      {{ userInfo.area }}
    </a-descriptions-item>
    <a-descriptions-item label="身份证类型">
      {{ userInfo.cardText }}
    </a-descriptions-item>
    <a-descriptions-item label="年龄">
      {{ userInfo.age }}
    </a-descriptions-item>
  </a-descriptions>

  <a
    href="https://www.npmjs.com/package/idcard"
    target="_blank"
  >
    idcard api
  </a>
</template>
