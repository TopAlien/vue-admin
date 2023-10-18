<script setup>
  import ProTable from '@/components/ProTable/index.vue'
  import { message, Modal } from 'ant-design-vue'
  import { useModal } from '@/hooks/useModal/index.js'
  import FormMenu from './FormMenu.vue'

  const props = defineProps({
    list: {
      type: Array,
      default: () => []
    }
  })

  const columns = [
    { title: '菜单ID', dataIndex: 'id', key: 'id' },
    {
      title: '菜单名称',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '菜单Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '菜单Path',
      dataIndex: 'path',
      key: 'path'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: '操作',
      key: 'action',
      width: '100px'
    }
  ]

  const handleStatus = (record) => {
    const title = record.status === 1 ? '停用' : '启用'
    Modal.confirm({
      title: '提示',
      content: `此操作将${title}此菜单，是否继续？`,
      okText: '确定',
      centered: true,
      onOk() {
        message.success(`${title}成功`)
      }
    })
  }

  const modal = useModal({ title: '菜单操作', width: '600px' })
  const handleFormModal = (record) => {
    modal.open(FormMenu, {
      initForm: record,
      ok: (val) => {
        console.log('=>(List.vue:61) val', val)
        message.success('新增成功')
      }
    })
  }
</script>

<template>
  <ProTable
    rowKey="id"
    :data-source="props.list"
    :columns="columns"
    :pagination="false"
  >
    <template #extraR>
      <a-button
        type="primary"
        @click="handleFormModal"
      >
        新增菜单
      </a-button>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'status'">
        <a-badge
          :color="['red', 'green'][record.status]"
          :text="record.status ? '启用' : '停用'"
        />
      </template>

      <template v-if="column.key === 'action'">
        <span>
          <a @click="handleStatus(record)">{{ record.status === 1 ? '停用' : '启用' }}</a>
          <a-divider type="vertical" />
          <a @click="handleFormModal(record)">编辑</a>
        </span>
      </template>
    </template>
  </ProTable>
</template>
