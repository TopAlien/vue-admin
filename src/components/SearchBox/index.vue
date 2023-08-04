<script setup>
  import { Form } from 'ant-design-vue'
  const emit = defineEmits(['search'])
  const slots = defineSlots()

  const props = defineProps({
    model: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: '查询表格'
    }
  })

  // 使用了v-model必须在:model中初始化，否则Form.useForm 无法resetFields
  const { resetFields } = Form.useForm(props.model)

  const handleSearch = () => {
    emit('search')
  }

  const handleReset = () => {
    resetFields && resetFields()
    handleSearch()
  }
</script>

<template>
  <div v-if="title" class="search_title">{{ title }}</div>
  <div class="search_box">
    <div class="search_form flex-1">
      <slot />
    </div>

    <div class="right_btn">
      <a-space
        direction="vertical"
        :size="16"
      >
        <a-button
          type="primary"
          @click="handleSearch"
        >
          <template #icon>
            <i class="i-carbon-search inline-block v-sub" />
          </template>
          查询
        </a-button>
        <a-button @click="handleReset">
          <template #icon>
            <i class="i-carbon-reset inline-block v-sub" />
          </template>
          重置
        </a-button>
      </a-space>
    </div>
  </div>

  <div
    v-if="slots.extraL || slots.extraR"
    class="flex justify-between mb16px"
  >
    <a-space>
      <slot name="extraL"></slot>
    </a-space>
    <a-space>
      <slot name="extraR"></slot>
    </a-space>
  </div>
</template>

<style>
  .search_box {
    display: flex;
    border-bottom: 1px solid rgb(229, 230, 235);
    margin-bottom: 16px;
  }

  .search_title {
    font-size: 16px;
    font-weight: 500;
    color: rgb(29, 33, 41);
    margin-bottom: 16px;
  }

  .search_box .ant-form-item {
    margin-bottom: 16px;
  }

  .search_box .ant-select {
    width: 178px;
  }

  .right_btn {
    height: 80px;
    padding-left: 16px;
    margin-bottom: 16px;
    border-left: 1px solid rgb(229, 230, 235);
  }
</style>
