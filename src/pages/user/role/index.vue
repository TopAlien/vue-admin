<script setup>
  import { message, Modal } from 'ant-design-vue'
  import RoleFormModal from './components/RoleFormModal.vue'
  import useFetch from '@/hooks/useFetch/index.js'
  import { useModal } from '@/hooks/useModal/index.js'
  import { API_USER } from '@/service/user/index.js'

  const columns = [
    { id: 'ID' },
    { name: '角色名称' },
    {
      cover: '权限覆盖率'
    },
    { status: '角色状态' },
    {
      action: {
        title: '操作',
        width: '90px'
      }
    }
  ]

  const { data, isFetching } = useFetch(API_USER.roleList).json()

  const handleStatus = (record) => {
    const title = record.status === 1 ? '禁用' : '启用'
    Modal.confirm({
      title: '提示',
      content: `此操作将${title}此角色，是否继续？`,
      okText: '确定',
      centered: true,
      onOk() {
        message.success(`${title}成功`)
      }
    })
  }

  const modal = useModal({ title: '用户角色', width: '750px' })
  const handleRoleModal = (record) => {
    modal.open(RoleFormModal, {
      initForm: record,
      ok(val) {
        console.log(val)
        console.log('ok')
      }
    })
  }
</script>

<template>
  <ProTable
    :columns="columns"
    :data-source="data"
    :loading="isFetching"
  >
    <template #extraR>
      <a-button
        type="primary"
        @click="handleRoleModal"
      >
        新增角色
      </a-button>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'status'">
        <a-badge
          :color="['red', 'green'][record.status]"
          :text="record.status ? '启用' : '禁用'"
        />
      </template>

      <template v-if="column.dataIndex === 'action'">
        <span>
          <a @click="handleStatus(record)">{{ record.status === 1 ? '禁用' : '启用' }}</a>
          <a-divider type="vertical" />
          <a @click="handleRoleModal(record)">编辑</a>
        </span>
      </template>
    </template>
  </ProTable>
</template>
