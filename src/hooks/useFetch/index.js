import { createFetch } from '@vueuse/core'
import { isRef } from 'vue'

// useFetch 没有很方便的query传参
const montageUrl = (originUrl, query) => {
  const params = new URLSearchParams()
  for (let q in query) {
    const val = query[q]

    if ((val ?? '') !== '') {
      params.append(q, val)
    }
  }

  const connector = originUrl.includes('?') ? '&' : '?'

  return `${originUrl}${connector}${params.toString()}`
}

const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_BASE_API,
  options: {
    async beforeFetch(ctx) {
      const { options } = ctx

      options.headers.Authorization = `Bearer custom`

      const { method, query, body } = options
      if (method === 'GET' && query) {
        // 1、只初始化一次传普通对象
        // 2、像列表查询直接传ref，会响应式变化参数。 暴露execute直接调用即可
        const queryData = isRef(query) ? query._value : query

        ctx.url = montageUrl(ctx.url, queryData || {})
      }

      // 一般用不到ref的body, 如果遇到post列表查询，这里会用到
      if (method === 'POST' && body && typeof body !== 'string' && isRef(body)) {
        options.body = JSON.stringify(body._value)
      }

      return ctx
    },

    async afterFetch(ctx) {
      // if(code !== 200) {
      //   message.error('服务器错误！')
      // }
      return ctx
    },

    async onFetchError(err) {
      console.log('🚀 ~ file: index.js:13 ~ onFetchError ~ onFetchError:', err)
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

export default useFetch
