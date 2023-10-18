<script setup>
  import { computed, reactive, ref } from 'vue'
  import SearchBox from '@/components/SearchBox/index.vue'
  import ProTable from '@/components/ProTable/index.vue'
  import { tableData } from '@/mock/data.js'
  import { message } from 'ant-design-vue'

  const columns = [
    {
      title: '集合编号',
      dataIndex: 'no',
      key: 'no'
    },
    {
      title: '集合名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '内容体裁',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: '筛选方式',
      dataIndex: 'fs',
      key: 'fs'
    },
    {
      title: '内容量',
      dataIndex: 'num',
      key: 'num'
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status'
    },
    { title: '操作', key: 'action', width: '130px' }
  ]

  const pagination = reactive({
    total: 100,
    current: 1,
    pageSize: 10
  })

  // 必须初始化，否则Form.useForm 无法resetFields
  const searchForm = ref({ no: null, name: null, fs: null, status: null, num: null })

  const handleSearch = () => {
    console.log('🚀 ~ file: index.vue:56 ~ handleSearch ~ searchForm.value:', searchForm.value)
    pagination.current = 1
  }

  const list = computed(() => {
    const { current, pageSize } = pagination
    return tableData.slice(pageSize * (current - 1), pageSize * current)
  })

  const handleTableChange = ({ current, pageSize }) => {
    pagination.current = current
    pagination.pageSize = pageSize
  }

  message.success('已加载！')
</script>

<template>
  <SearchBox
    :model="searchForm"
    @search="handleSearch"
  >
    <a-form
      layout="inline"
      :label-col="{ style: { width: '75px' } }"
    >
      <a-form-item label="集合编号">
        <a-input
          placeholder="请输入集合编号"
          v-model:value="searchForm.no"
        />
      </a-form-item>
      <a-form-item label="集合名称">
        <a-input
          placeholder="请输入集合名称"
          v-model:value="searchForm.name"
        />
      </a-form-item>
      <a-form-item label="筛选方式">
        <a-select
          v-model:value="searchForm.fs"
          placeholder="请选择状态"
        >
          <a-select-option value="人工筛选">人工筛选</a-select-option>
          <a-select-option value="规则筛选">规则筛选</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="状态">
        <a-select
          v-model:value="searchForm.status"
          placeholder="请选择状态"
        >
          <a-select-option value="已上线">已上线</a-select-option>
          <a-select-option value="已下线">已下线</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="内容量">
        <a-input
          placeholder="请输入内容量"
          v-model:value="searchForm.num"
        />
      </a-form-item>
    </a-form>

    <template #extraL>
      <a-button type="primary">新建</a-button>
      <a-button>批量导入</a-button>
    </template>

    <template #extraR>
      <a-button type="primary">导出</a-button>
    </template>
  </SearchBox>

  <ProTable
    :data-source="list"
    :columns="columns"
    :pagination="pagination"
    @change="handleTableChange"
  >
    <template #headerCell="{ column, title }">
      <template v-if="column.key === 'name'">
        <i class="i-carbon-data-collection inline-block v-sub" />
        {{ title }}
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'type'">
        <div class="flex items-center">
          <img
            :src="record.icon"
            class="mr4px"
            alt=""
          />
          <span>{{ record.type }}</span>
        </div>
      </template>

      <template v-if="column.key === 'status'">
        <a-badge
          :color="record.status === '已下线' ? '#cccccc' : 'green'"
          :text="record.status"
        />
      </template>

      <template v-if="column.key === 'action'">
        <span>
          <a>失效</a>
          <a-divider type="vertical" />
          <a>删除</a>
          <a-divider type="vertical" />
          <a-dropdown>
            <a
              class="ant-dropdown-link"
              @click.prevent
            >
              <i class="i-carbon-chevron-down inline-block v-sub" />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item>操作一</a-menu-item>
                <a-menu-item>操作二</a-menu-item>
                <a-menu-item>操作三</a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </span>
      </template>
    </template>
  </ProTable>
</template>
