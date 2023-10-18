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

  const handleStatus = (record, type) => {
    Modal.confirm({
      title: '提示',
      content: '此操作将停用此菜单，是否继续？',
      okText: '确定',
      centered: true,
      onOk() {
        message.success('停用成功')
      }
    })
  }

  const modal = useModal({ title: '你好', width: '800px' })
  const handleFormModal = () => {
    modal.open(FormMenu, {
      id: 1,
      limit: 10,
      ok: (val) => {
        console.log("=>(List.vue:61) val", val);
        console.log('操作了ok')
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
      <template v-if="column.key === 'action'">
        <span>
          <a @click="handleStatus(record, 2)">停用</a>
          <a-divider type="vertical" />
          <a @click="handleFormModal">编辑</a>
        </span>
      </template>
    </template>
  </ProTable>
</template>
