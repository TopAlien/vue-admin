/**
 * 设计场景
 *
 * 1、后台新增权限时选择类型是否是按钮，选择按钮类型。登录后调取接口查出所有按钮类型权限：(我使用接口作为唯一标识)
 * response = ['/user/list', '/user/add', '/user/detail/add', '/user/detail/edit']
 *
 * 指令使用格式
 * v-auth="'/user/list'"
 * v-auth="['/user/list', '/user/detail/edit']"
 *
 *
 * 2、按照菜单权限层级返回。类似 mock 中的 adminRoutes，再增加类型区分是否是按钮权限即可。
 * response = [{ key: 'user', children: [{ key: 'user/list', children: [{ type: 'btn', key: 'api/user/list' }] }] }]
 *
 * 使用（.[user]修饰符用来快速定位查找，也可以起到命名空间的作用）
 *
 * 找到命名空间内的
 * v-auth.user="'api/user/list'"
 * v-auth.user="['api/user/list', 'api/user/list']"
 * v-auth="{ user: ["api/user/list", "api/user/add"], setting: [""] }"
 * v-auth="{ user: "", setting: "" }"
 *
 * user和setting模块中任意找到
 * v-auth.user.setting="api/user/list"
 * v-auth.user.setting="['api/user/list', 'api/user/add']"
 *
 * tip：要是有 user下面，或者setting下面有某个权限都可以显示按钮这种场景该怎么办
 *
 * <button v-auth="{ user: "", setting: "" }"></button>
 * <button v-auth="{ user: ["api/user/list", "api/user/add"], setting: [""] }"></button>
 */

import { isArray, isString, isPlainObject } from 'lodash-es'

const _mockResRouteData = [
  {
    key: 'user',
    name: '用户管理',
    children: [
      {
        key: 'user/list',
        name: '用户列表',
        children: [
          { type: 'btn', key: 'api/user/list', name: '用户列表查看' },
          { type: 'btn', key: 'api/user/detail', name: '用户详情' },
          { type: 'btn', key: 'api/user/auth-edit', name: '用户权限编辑' }
        ]
      },
      {
        key: 'user/list1',
        name: '用户列表1',
        children: [
          { type: 'btn', key: 'api/user/list1', name: '用户列表查看1' },
          { type: 'btn', key: 'api/user/detail1', name: '用户详情1' },
          { type: 'btn', key: 'api/user/auth-edit1', name: '用户权限编辑1' }
        ]
      }
    ]
  },
  {
    key: 'setting',
    name: '设置',
    children: [
      {
        key: 'setting/auth',
        name: '权限设置',
        children: [
          { type: 'btn', key: 'api/auth/add', name: '新增权限' },
          { type: 'btn', key: 'api/auth/edit', name: '编辑权限' },
          { type: 'btn', key: 'api/auth/list', name: '权限列表' }
        ]
      }
    ]
  },
  {
    key: '404',
    name: '异常页面',
    children: [
      {
        key: 'exception/404',
        name: '404页面',
        children: [
          { type: 'btn', key: 'api/exception/add', name: '新增' },
          { type: 'btn', key: 'api/exception/edit', name: '编辑' }
        ]
      },
      {
        key: 'exception/503',
        name: '503页面'
      }
    ]
  }
]

const findNamesRoutes = (moduleName) => {
  return (_mockResRouteData.find((route) => route.key === moduleName) || {}).children || []
}

const BTN_TYPE = 'btn'
const btnKeys = (routes) => {
  const keys = []

  function find(arr) {
    arr.forEach((it) => {
      if (it.type === BTN_TYPE) {
        keys.push(it.key)
      }

      if (it.children && it.children.length) {
        find(it.children)
      }
    })
  }
  find(routes)

  return keys
}

/**
 * 比对是否有相同项，只要找到一个有相同的，就立即返回（或的关系，所以可以提前返回）
 *
 * arrModuleValue 必然存在
 */
const hasDuplicates = (arr1, arrModuleValue) => {
  for (let i = 0, len = arrModuleValue.length; i < len; i++) {
    if (arr1.includes(arrModuleValue[i])) {
      return true
    }
  }

  return false
}

const hasPer = (moduleName, moduleValue) => {
  const keys = btnKeys(findNamesRoutes(moduleName))

  if (isString(moduleValue)) {
    return keys.includes(moduleValue)
  }

  if (isArray(moduleValue) && value.length > 0) {
    return hasDuplicates(keys, moduleValue)
  }

  return false
}

const DOM_MARK = 'data-auth'
const hasMark = (el) => {
  return el.getAttribute(DOM_MARK) !== 'true'
}

const setMark = (el) => {
  el.setAttribute(DOM_MARK, true)
}

const removeEl = (el) => {
  el && el.parentNode && el.parentNode.removeChild(el)
}

/**
 * 场景2方式实现
 */
export default {
  mounted(el, binding) {
    const { modifiers, value } = binding

    const valueIsPlainObj = isPlainObject(value)
    const routeModules = Object.keys(valueIsPlainObj ? value : modifiers)

    if (routeModules.length) {
      routeModules.forEach((module) => {
        const curModuleValue = valueIsPlainObj ? value[module] : value
        if (hasPer(module, curModuleValue)) {
          setMark(el)
        }
      })
    } else {
      // 没有命名空间之间删除，例：v-auth='api/list'
      removeEl(el)
    }

    // 无标记删除
    if (hasMark(el)) {
      removeEl(el)
    }
  },

  updated() {},

  unmounted() {}
}
