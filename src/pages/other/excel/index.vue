<script setup>
  import { export_json_to_excel, formatJson } from '@/vendor/excel.js'

  const columns = [{ id: 'ID' }, { name: '姓名' }, { age: '年龄' }]

  const list = [
    { id: 1, name: 'ealien', age: 18 },
    { id: 2, name: '哇咔咔', age: 99 },
    { id: 3, name: '124', age: 18 },
    { id: 4, name: '1', age: 99 },
    { id: 5, name: 'nihao', age: 18 },
    { id: 6, name: '1838', age: 99 }
  ]

  const handleExportExcel = () => {
    const tHeader = ['ID', '姓名', '年龄']
    const filterVal = ['id', 'name', 'age']

    const data = formatJson(filterVal, list)

    console.log(data)

    export_json_to_excel({
      header: tHeader,
      data,
      filename: '哇咔咔'
    })
  }
</script>

<template>
  <div class="header_title">Excel导出示例</div>
  <a-button
    v-loading
    type="primary"
    class="mb16px"
    @click="handleExportExcel"
  >
    导出excel
  </a-button>
  <ProTable
    :columns="columns"
    :data-source="list"
  />
</template>
