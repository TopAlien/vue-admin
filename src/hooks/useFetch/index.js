import { unref } from 'vue'
import { createFetch } from '@vueuse/core'
import { message } from 'ant-design-vue'

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

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

const useFetch = createFetch({
  baseUrl: import.meta.env.VITE_BASE_API,
  options: {
    async beforeFetch(ctx) {
      const { options } = ctx

      options.headers.Authorization = `Bearer custom`
      options.headers.apifoxToken = 'IbvbVFA8uGdREezk4bfv9'

      const { params } = options
      // 自定义 Query String Parameters 携带请求参数。 一般是get请求
      if (params && typeof params !== 'string') {
        ctx.url = montageUrl(ctx.url, unref(params))
      }

      return ctx
    },

    async afterFetch(ctx) {
      const { code, msg } = ctx.data

      if (code === 200) {
        return ctx.data
      }

      // 兼容多个api
      if (code !== 200 && msg) {
        message.error(msg || '服务器错误！')
      }

      return ctx
    },

    async onFetchError({ response }) {
      message.error(codeMessage[response.status] || '服务器错误，请联系管理员！')
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

export default useFetch
