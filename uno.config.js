import { defineConfig, presetUno } from 'unocss'
import presetIcons from '@unocss/preset-icons/browser'
import safelist from './src/components/DynamicIcons/icons.js'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      collections: {
        carbon: () => import('@iconify-json/carbon/icons.json').then((i) => i.default)
      }
    })
  ],
  safelist
})
