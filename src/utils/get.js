/**
 性能对比： at > slice > length
 */
export const getValByIndex = (arr, index) => {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    console.error('arr 不是一个数组！')
    return
  }
  if (arr.at) {
    return arr.at(index)
  }

  return arr.slice(index)[0]
}

export const getLast = (arr) => {
  return getValByIndex(arr, -1)
}

export const getFirst = (arr) => {
  return getValByIndex(arr, 0)
}
