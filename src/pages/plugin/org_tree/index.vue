<script setup>
  const data = {
    id: 1,
    label: 'xxx科技有限公司',
    children: [
      {
        id: 2,
        pid: 1,
        label: '产品研发部',
        style: { color: '#fff', background: '#108ffe' },
        children: [
          { id: 6, pid: 2, label: '禁止编辑节点', disabled: true },
          { id: 8, pid: 2, label: '禁止拖拽节点', noDragging: true },
          { id: 10, pid: 2, label: '测试' }
        ]
      },
      {
        id: 3,
        pid: 1,
        label: '客服部',
        children: [
          { id: 11, pid: 3, label: '客服一部' },
          { id: 12, pid: 3, label: '客服二部' }
        ]
      },
      { id: 4, pid: 1, label: '业务部' }
    ]
  }
</script>

<template>
  <div class="h400px">
    <vue3TreeOrg
      :data="data"
      center
    />
  </div>
  <a
    href="https://sangtian152.github.io/vue3-tree-org/guide/"
    target="_blank"
  >
    https://sangtian152.github.io/vue3-tree-org/guide/
  </a>
</template>
