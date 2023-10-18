<script setup>
  import { reactive, ref, watch } from 'vue'
  const props = defineProps({
    id: {
      type: Number
    },
    limit: {
      type: Number
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  })

  const formRef = ref()
  const formState = reactive({
    username: '',
    nickname: '',
    checkNick: false
  })

  watch(
    () => formState.checkNick,
    () => {
      formRef.value.validateFields(['nickname'])
    },
    { flush: 'post' }
  )

  const ok = (val) => {
    props.ok && props.ok(val)
  }

  const handleCancel = () => {
    props.cancel && props.cancel()
  }

  const onCheck = async () => {
    try {
      const values = await formRef.value.validateFields()
      ok(values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 }
  }

  const formTailLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 }
  }
</script>

<template>
  <a-form
    ref="formRef"
    :model="formState"
    name="dynamic_rule"
    v-bind="formItemLayout"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Nickname"
      name="nickname"
      :rules="[{ required: formState.checkNick, message: 'Please input your nickname!' }]"
    >
      <a-input v-model:value="formState.nickname" />
    </a-form-item>

    <a-form-item
      name="checkNick"
      v-bind="formTailLayout"
    >
      <a-checkbox v-model:checked="formState.checkNick">Nickname is required</a-checkbox>
    </a-form-item>
  </a-form>
  <a-space class="use_modal_footer">
    <a-button @click="handleCancel">取消</a-button>
    <a-button
      type="primary"
      @click="onCheck"
    >
      确认
    </a-button>
  </a-space>
</template>
