import { createFetch } from '@vueuse/core'
import { unref } from 'vue'

// useFetch 没有很方便的query传参
export const montageUrl = (originUrl, query) => {
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
        ctx.url = montageUrl(ctx.url, unref(query))
      }

      // 一般用不到ref的body, 如果遇到post列表查询，这里会用到
      if (method === 'POST' && body && typeof body !== 'string') {
        options.body = JSON.stringify(unref(body))
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
