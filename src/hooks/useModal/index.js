import { h } from 'vue'
import { Modal, message } from 'ant-design-vue'
import { isVueComponent } from '@/utils/index.js'

export const useModal = (modalProps) => {
  const open = (component, props) => {
    if (!isVueComponent(component)) {
      message.warn('这里强制是VueComponent，否则你不应该使用它！')
    }

    const modal = Modal.confirm({
      title: 'useModal 请设置title覆盖',
      content: h(
        component,
        {
          ...props,
          ok: (val) => {
            props.ok && props.ok(val)
            modal.destroy()
          },
          cancel: () => {
            modal.destroy()
          }
        },
        () => null
      ),
      icon: null,
      closable: true,
      ...modalProps,
      footer: null,
      wrapClassName: 'use-modal'
    })
  }

  return {
    open
  }
}
