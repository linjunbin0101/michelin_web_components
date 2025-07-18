// Styles
import './VEmptyState.sass'

// Components
import { VBtn } from '@/components/VBtn'
import { VDefaultsProvider } from '@/components/VDefaultsProvider'
import status404 from './icons/404.svg'
import download from './icons/download.svg'
import noDataSearch from './icons/no-data-search.svg'
import noData from './icons/no-data.svg'
import noNetwork from './icons/no-network.svg'
import noPermission from './icons/no-permission.svg'
import systemSetting from './icons/system-setting.svg'
import system from './icons/system.svg'
import { VIcon } from '@/components/VIcon'
import { VImg } from '@/components/VImg'

// Composables
import { useBackgroundColor } from '@/composables/color'
import { makeComponentProps } from '@/composables/component'
import { makeDimensionProps, useDimension } from '@/composables/dimensions'
import { useDisplay } from '@/composables/display'
import { IconValue } from '@/composables/icons'
import { makeSizeProps } from '@/composables/size'
import { makeThemeProps, provideTheme } from '@/composables/theme'

// Utilities
import { toRef } from 'vue'
import { convertToUnit, genericComponent, propsFactory, useRender } from '@/util'

// Types
import type { PropType } from 'vue'

// Types

export type VEmptyStateSlots = {
  actions: {
    props: {
      onClick: (e: Event) => void
    }
  }
  default: never
  headline: never
  title: never
  media: never
  text: never
}

export const makeVEmptyStateProps = propsFactory({
  actionText: String,
  bgColor: String,
  color: String,
  icon: IconValue,
  image: String,
  justify: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'center',
  },
  headline: String,
  title: String,
  text: String,
  textWidth: {
    type: [Number, String],
    default: 500,
  },
  href: String,
  to: String,
  layout: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'vertical',
  },

  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeSizeProps({ size: undefined }),
  ...makeThemeProps(),
}, 'VEmptyState')

export const VEmptyState = genericComponent<VEmptyStateSlots>()({
  name: 'HcEmptyState',

  props: makeVEmptyStateProps(),

  emits: {
    'click:action': (e: Event) => true,
  },

  setup (props, { emit, slots }) {
    const { themeClasses } = provideTheme(props)
    const { backgroundColorClasses, backgroundColorStyles } = useBackgroundColor(toRef(props, 'bgColor'))
    const { dimensionStyles } = useDimension(props)
    const { displayClasses } = useDisplay()
    const imageList = ['no-data', '404', 'download', 'no-data-search', 'no-network', 'no-permission', 'system', 'system-setting']
    function onClickAction (e: Event) {
      emit('click:action', e)
    }
    const getBuiltInImage = (name: string) => {
      switch (name) {
        case 'no-data': return noData
        case '404': return status404
        case 'download': return download
        case 'no-network': return noNetwork
        case 'no-permission': return noPermission
        case 'system': return system
        case 'system-setting': return systemSetting
        case 'no-data-search': return noDataSearch
        default: return ''
      }
    }

    useRender(() => {
      const hasActions = !!(slots.actions || props.actionText)
      const hasHeadline = !!(slots.headline || props.headline)
      const hasTitle = !!(slots.title || props.title)
      const hasText = !!(slots.text || props.text)
      const hasMedia = !!(slots.media || props.image || props.icon)
      const size = props.size || (props.image ? 200 : 96)
      return (
        <div
          class={[
            'v-empty-state',
            {
              [`v-empty-state--${props.justify}`]: true,
              [`v-empty-state--layout--${props.layout}`]: true,
            },
            themeClasses.value,
            backgroundColorClasses.value,
            displayClasses.value,
            props.class,
          ]}
          style={[
            backgroundColorStyles.value,
            dimensionStyles.value,
            props.style,
          ]}
        >
          { hasMedia && (
            <div key="media" class="v-empty-state__media">
              { !slots.media ? (
                <>
                  { props.image ? (
                    (
                      <VImg
                        key="image"
                        src={ imageList.includes(props.image) ? getBuiltInImage(props.image) : props.image }
                        height={ size }
                      />
                    )
                  ) : props.icon ? (
                    <VIcon
                      key="icon"
                      color={ props.color }
                      size={ size }
                      icon={ props.icon }
                    />
                  ) : undefined }
                </>
              ) : (
                <VDefaultsProvider
                  key="media-defaults"
                  defaults={{
                    VImg: {
                      src: props.image,
                      height: size,
                    },
                    VIcon: {
                      size,
                      icon: props.icon,
                    },
                  }}
                >
                  { slots.media() }
                </VDefaultsProvider>
              )}
            </div>
          )}

          { hasHeadline && (
            <div key="headline" class="v-empty-state__headline">
              { slots.headline?.() ?? props.headline }
            </div>
          )}

          { hasTitle && (
            <div key="title" class="v-empty-state__title">
              { slots.title?.() ?? props.title }
            </div>
          )}

          { hasText && (
            <div
              key="text"
              class="v-empty-state__text"
              style={{
                maxWidth: convertToUnit(props.textWidth),
              }}
            >
              { slots.text?.() ?? props.text }
            </div>
          )}

          { slots.default && (
            <div key="content" class="v-empty-state__content">
              { slots.default() }
            </div>
          )}

          { hasActions && (
            <div key="actions" class="v-empty-state__actions">
              <VDefaultsProvider
                defaults={{
                  VBtn: {
                    class: 'v-empty-state__action-btn',
                    color: props.color ?? 'surface-variant',
                    text: props.actionText,
                  },
                }}
              >
                {
                  slots.actions?.({ props: { onClick: onClickAction } }) ?? (
                    <VBtn onClick={ onClickAction } />
                  )
                }
              </VDefaultsProvider>
            </div>
          )}
        </div>
      )
    })

    return {}
  },
})

export type VEmptyState = InstanceType<typeof VEmptyState>
