/**
 * 单独监听路由会浪费渲染性能。使用发布订阅模式去进行分发管理。
 */
import mitt from 'mitt'

const emitter = mitt()

const KEY = Symbol('ROUTE_CHANGE')

let latestRoute

export function setRouteEmitter(to) {
  emitter.emit(KEY, to)
  latestRoute = to
}

export function listenerRouteChange(handler, immediate = true) {
  emitter.on(KEY, handler)
  if (immediate && latestRoute) {
    handler(latestRoute)
  }
}

export function removeRouteListener() {
  emitter.off(KEY)
}
