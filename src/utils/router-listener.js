/**
 * 单独监听路由会浪费渲染性能。使用发布订阅模式去进行分发管理。
 */
import mitt from 'mitt'

const emitter = mitt()

const EMIT_KEY = 'ROUTE_CHANGE'

let latestRoute

export function setRouteEmitter(to) {
  emitter.emit(EMIT_KEY, to)
  latestRoute = to
}

export function listenerRouteChange(handler, immediate = true) {
  emitter.on(EMIT_KEY, handler)
  if (immediate && latestRoute) {
    handler(latestRoute)
  }
}

export function removeRouteListener() {
  emitter.off(EMIT_KEY)
}
