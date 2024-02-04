<script setup>
  import { export_json_to_excel, formatJson, getFormatDataByColumns } from '@/vendor/excel.js'

  const columns = [{ id: 'ID' }, { name: '姓名' }, { firstName: '姓氏' }, { age: '年龄' }]

  const list = [
    { id: 1, name: 'ealien', firstName: '周', age: 18 },
    { id: 2, name: '哇咔咔', firstName: '钱', age: 99 },
    { id: 3, name: '124', firstName: '李', age: 18 },
    { id: 4, name: '1', firstName: '王', age: 99 },
    { id: 5, name: 'nihao', firstName: '孙', age: 18 },
    { id: 6, name: '1838', firstName: '刘', age: 99 }
  ]

  const handleExportExcel = () => {
    const [header, keys] = getFormatDataByColumns(columns)

    const data = formatJson(keys, list)

    export_json_to_excel({
      header,
      data,
      filename: '哇咔咔'
    })
  }

  const columns2 = [
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

  const handleExportExcel2 = () => {
    const multiHeader = [['ID', '姓名组合', '', '年龄']]
    const header = ['', '姓名', '姓氏', '']
    const filterVal = ['id', 'name', 'firstName', 'age']
    const data = formatJson(filterVal, list)
    const merges = ['A1:A2', 'B1:C1', 'D1:D2']

    export_json_to_excel({
      multiHeader,
      header,
      merges,
      data
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

  <div class="header_title">Excel分组表头导出示例</div>
  <a-button
    v-loading
    type="primary"
    class="mb16px"
    @click="handleExportExcel2"
  >
    导出excel
  </a-button>
  <ProTable
    :columns="columns2"
    :data-source="list"
  />
</template>
