/**
 *  const columns = setTableColumn([
 *     { no: '集合编号' },
 *     { name: '集合名称' },
 *     { type: '内容体裁' },
 *     { fs: '筛选方式' },
 *     { action: { title: '操作', width: '130px', ... } }
 *   ])
 * @param simpleArr
 */
export const setTableColumn = (simpleArr = []) => {
  if (!simpleArr || !Array.isArray(simpleArr) || !simpleArr?.length) {
    return []
  }

  return simpleArr.map((it) => {
    const key = Object.keys(it)[0]
    const val = it[key]

    return typeof val === 'string'
      ? {
          title: val,
          dataIndex: key,
          key
        }
      : {
          dataIndex: key,
          key,
          ...val
        }
  })
}
