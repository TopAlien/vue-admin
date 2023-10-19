<script setup>
  import { ref, reactive } from 'vue'
  import { adminRoutes } from '@/mock/data.js'

  const props = defineProps({
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    },
    initForm: {
      type: Object
    }
  })

  const roleFormRef = ref()
  const roleForm = reactive({ name: '', status: 1, menus: [], ...props.initForm })

  const handleConfirm = async () => {
    try {
      const values = await roleFormRef.value.validateFields()
      props.ok && props.ok(values)
    } catch (err) {
      console.log(err)
    }
  }
</script>

<template>
  <a-form
    ref="roleFormRef"
    :model="roleForm"
    :label-col="{ style: { width: '100px' } }"
  >
    <a-form-item
      label="角色名称"
      name="name"
      :rules="[{ required: true, message: '请输入角色名称！' }]"
    >
      <a-input
        v-model:value="roleForm.name"
        placeholder="请输入角色名称"
      />
    </a-form-item>
    <a-form-item
      label="角色状态"
      name="status"
      required
    >
      <a-radio-group v-model:value="roleForm.status">
        <a-radio :value="1">启用</a-radio>
        <a-radio :value="0">禁用</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item
      label="角色菜单"
      name="menus"
      required
    >
      <a-tree
        v-model:selectedKeys="roleForm.menus"
        v-model:checkedKeys="roleForm.menus"
        checkable
        defaultExpandAll
        :tree-data="adminRoutes"
        :fieldNames="{ children: 'children', title: 'title', key: 'id' }"
      />
    </a-form-item>
  </a-form>
  <ModalFooter
    @confirm="handleConfirm"
    @cancel="props.cancel && props.cancel()"
  />
</template>
