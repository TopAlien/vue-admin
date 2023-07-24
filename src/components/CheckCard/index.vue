<script setup>
  const props = defineProps({
    modelValue: {
      type: [Array, String, Number, Boolean]
    },
    multiple: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    fieldNames: {
      type: Object,
      default: () => ({
        id: 'id',
        title: 'title',
        desc: 'desc',
        image: 'image',
        icon: 'icon',
        value: 'value',
        disabled: 'disabled'
      })
    }
  })

  const emit = defineEmits(['onChange', 'update:modelValue'])

  if (props.multiple) {
    typeof props.modelValue !== 'object' && console.error('多选时 v-model 应当绑定数组')
  } else {
    typeof props.modelValue === 'object' && console.error('单选时 v-model 应当绑定值类型')
  }

  const handleCheck = (it, index) => {
    if (it.disabled || props.disabled) {
      return
    }

    const curVal = it[props.fieldNames.id]

    if (props.multiple) {
      const hasIndex = props.modelValue.indexOf(curVal)
      if (hasIndex !== -1) {
        props.modelValue.splice(hasIndex, 1)
        emit('update:modelValue', props.modelValue)
      } else {
        emit('update:modelValue', [...props.modelValue, curVal])
      }
    } else {
      emit('update:modelValue', curVal !== props.modelValue ? curVal : null)
    }

    emit('onChange', it, index)
  }
</script>

<template>
  <div class="card">
    <div
      :class="[
        (multiple ? (modelValue || []).includes(it.id) : modelValue === it.id)
          ? 'card_item_active card_item'
          : 'card_item',
        disabled || it.disabled ? 'card_item_display' : ''
      ]"
      v-for="(it, index) in options"
      :key="it.title"
      @click="handleCheck(it, index)"
    >
      <div>
        <i :class="[it.icon, 'block']" />
        <div class="item_title">{{ it.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .card {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;

    &_item {
      position: relative;
      flex-shrink: 0;
      width: 320px;
      min-height: 80px;
      padding: 16px;
      border-radius: 6px;
      border: 1px solid #d9d9d9;
      background-color: #ffffff;
      cursor: pointer;
      user-select: none;

      & .item_title {
        color: black;
      }

      &:hover {
        border-color: @primary-color;
      }

      &_active {
        background-color: #d2e5ff;
        border-color: @primary-color;

        &:after {
          position: absolute;
          inset-block-start: 2px;
          inset-inline-end: 2px;
          width: 0;
          height: 0;
          border: 6px solid @primary-color;
          border-block-end: 6px solid transparent;
          border-inline-start: 6px solid transparent;
          border-start-end-radius: 2px;
          content: '';
        }

        &.card_item_display:after {
          position: absolute;
          inset-block-start: 2px;
          inset-inline-end: 2px;
          width: 0;
          height: 0;
          border: 6px solid rgba(42, 46, 54, 0.25);
          border-block-end: 6px solid transparent;
          border-inline-start: 6px solid transparent;
          border-start-end-radius: 2px;
          content: '';
        }
      }

      &_display {
        background-color: rgba(42, 46, 54, 0.04);
        border-color: #d9d9d9;
        cursor: not-allowed;

        & .item_title {
          color: rgba(42, 46, 54, 0.25);
        }
      }
    }
  }
</style>
