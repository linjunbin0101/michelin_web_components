import type { IconOptions, IconSet } from 'vuetify'
import type { HcIconProps, HcIconOptions } from './types'
import { googleAliases } from './iconsets/google'
import { defaultIcons } from './iconsets/default'
import { h } from 'vue'

// Create Google Material Icons configuration
const google: IconSet = {
  component: (props: HcIconProps) => {
    let iconName = props.icon
    let iconClass = 'material-symbols-outlined'
    
    // Check fill property, support boolean, string 'true' and empty value
    if (props.fill === true || props.fill === 'true' || props.fill === '') {
      iconClass = 'material-symbols-filled'
    } else if (String(iconName).endsWith('_fill')) {
      const index = String(iconName).lastIndexOf('_fill')
      iconName = String(iconName).slice(0, index)
      iconClass = 'material-symbols-filled'
    }

    return h('span', {
      class: [iconClass],
      textContent: iconName,
    })
  },
}

export const defaultIconConfig: IconOptions = {
  defaultSet: 'google',
  aliases: {
    ...defaultIcons,
    ...googleAliases,
  },
  sets: {
    google,
  },
}

export function createIconConfig(options?: HcIconOptions): IconOptions {
  // If size is provided, create and insert style
  if (options?.size) {
    const style = document.createElement('style')
    console.log(options.size)
    style.textContent = `
      :root {
        --hc-icon-size: ${typeof options.size === 'number' ? `${options.size}px` : options.size};
      }
    `
    document.head.appendChild(style)
  }

  // Remove size from options as it's not part of Vuetify IconOptions
  const { size, ...vuetifyOptions } = options || {};

  return {
    ...defaultIconConfig,
    ...vuetifyOptions,
  }
}

export * from './types'