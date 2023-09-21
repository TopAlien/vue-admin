export const inBrowser = typeof window !== 'undefined'

// Keep forward compatible
// should be removed in next major version
export const supportsPassive = true

/**
 * @param fn FrameRequestCallback
 * @returns { number }
 */
export function raf(fn) {
  return inBrowser ? requestAnimationFrame(fn) : -1
}

/**
 * @param id { number }
 */
export function cancelRaf(id) {
  if (inBrowser) {
    cancelAnimationFrame(id)
  }
}

/**
 * double raf for animation
 * @param fn { FrameRequestCallback }
 */
export function doubleRaf(fn) {
  raf(() => raf(fn))
}
