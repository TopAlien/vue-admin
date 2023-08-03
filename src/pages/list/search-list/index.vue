<script setup>
  import { ref } from 'vue'
  import SearchBox from '@/components/SearchBox/index.vue'

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags'
    },
    { title: '操作', key: 'action', width: '170px' }
  ]

  const list = ref([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer']
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher']
    }
  ])

  // 必须初始化，否则Form.useForm 无法resetFields
  const searchForm = ref({ name: null, sex: null, age: null, tag: null, class: null })

  const handleSearch = () => {
    console.log(searchForm.value)
  }
</script>

<template>
  <SearchBox
    :model="searchForm"
    @search="handleSearch"
  >
    <a-form layout="inline">
      <a-form-item label="姓名">
        <a-input
          placeholder="请输入..."
          v-model:value="searchForm.name"
        />
      </a-form-item>
      <a-form-item label="性别">
        <a-input
          placeholder="请输入..."
          v-model:value="searchForm.sex"
        />
      </a-form-item>
      <a-form-item label="年龄">
        <a-input
          placeholder="请输入..."
          v-model:value="searchForm.age"
        />
      </a-form-item>
      <a-form-item label="标签">
        <a-input
          placeholder="请输入..."
          v-model:value="searchForm.tag"
        />
      </a-form-item>
      <a-form-item label="分类">
        <a-input
          placeholder="请输入..."
          v-model:value="searchForm.calss"
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

  <a-table
    size="middle"
    :data-source="list"
    :columns="columns"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <i class="i-carbon-group-security inline-block v-sub" />
        名称
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'tags'">
        <a-tag
          v-for="tag in record.tags"
          :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
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
              更多
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
  </a-table>
</template>
