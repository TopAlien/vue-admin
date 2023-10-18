<script setup>
  import { reactive, ref } from 'vue'
  import ModalFooter from '@/components/ModalFooter/index.vue'
  const props = defineProps({
    initForm: {
      type: Object,
      default: () => {}
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
    name: '',
    title: '',
    path: '',
    ...props.initForm
  })

  const ok = (val) => {
    props.ok && props.ok(val)
  }

  const onCheck = async () => {
    try {
      const values = await formRef.value.validateFields()
      ok(values)
    } catch (errorInfo) {
      console.log('Failed:', errorInfo)
    }
  }
</script>

<template>
  <a-form
    ref="formRef"
    :model="formState"
    :label-col="{ style: { width: '90px' } }"
  >
    <a-form-item
      label="菜单名称"
      name="title"
      :rules="[{ required: true, message: '请输入菜单名称！' }]"
    >
      <a-input v-model:value="formState.title" />
    </a-form-item>
    <a-form-item
      label="路由Name"
      name="name"
      :rules="[{ required: true, message: '请输入路由名称!' }]"
    >
      <a-input v-model:value="formState.name" />
    </a-form-item>
    <a-form-item
      label="菜单Path"
      name="path"
      :rules="[{ required: true, message: '请输入路由Path!' }]"
    >
      <a-input v-model:value="formState.path" />
    </a-form-item>
  </a-form>
  <ModalFooter
    @confirm="onCheck"
    @cancel="() => props.cancel && props.cancel()"
  />
</template>
