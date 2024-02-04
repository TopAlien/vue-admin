<script setup>
  import { formatJson } from '@/vendor/excel.js'
  import { export_txt_to_zip } from '@/vendor/zip.js'

  const columns = [
    { id: 'ID' },
    {
      fullName: {
        title: '姓名组合',
        children: [
          {
            title: '姓名',
            dataIndex: 'name',
            key: 'name'
          },
          {
            title: '姓氏',
            dataIndex: 'firstName',
            key: 'firstName'
          }
        ]
      }
    },
    { age: '年龄' }
  ]

  const list = [
    { id: 1, name: 'ealien', firstName: '周', age: 18 },
    { id: 2, name: '哇咔咔', firstName: '钱', age: 99 },
    { id: 3, name: '124', firstName: '李', age: 18 },
    { id: 4, name: '1', firstName: '王', age: 99 },
    { id: 5, name: 'nihao', firstName: '孙', age: 18 },
    { id: 6, name: '1838', firstName: '刘', age: 99 }
  ]

  const handleExportExcel = () => {
    const header = ['ID', '姓名', '姓氏', '年龄']
    const filterVal = ['id', 'name', 'firstName', 'age']
    const data = formatJson(filterVal, list)
    export_txt_to_zip(header, data)
  }
</script>

<template>
  <div class="header_title">ZIP示例</div>
  <a-button
    v-loading
    type="primary"
    class="mb16px"
    @click="handleExportExcel"
  >
    导出ZIP
  </a-button>
  <ProTable
    :columns="columns"
    :data-source="list"
  />
</template>
