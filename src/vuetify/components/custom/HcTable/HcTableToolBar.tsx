import { ref, watch, defineComponent } from 'vue'
import { Header } from './types'
import './HcTableToolBar.scss'

export const HcTableToolBar = defineComponent({
  name: 'HcTableToolBar',
  props: {
    headers: {
      type: Array as () => Header[],
      required: true
    }
  },
  emits: ['update:headers'],
  setup(props, { emit, slots }) {
    const menu = ref(false)
    const localHeaders = ref<Header[]>(props.headers)

    watch(() => props.headers, (newVal) => {
      localHeaders.value = newVal
    }, { immediate: true })

    watch(localHeaders, (val) => {
      emit('update:headers', val)
    }, { deep: true })

    return () => (
      <div class="table-toolbar">
        <div class="table-toolbar-left">
          {slots['toolbar-left']?.()}
        </div>
        <div class="table-toolbar-right">
          {slots['toolbar-right']?.() || (
            <v-menu v-model={menu.value} closeOnContentClick={false} offsetY>
              {{
                activator: ({ props: activatorProps }: { props: Record<string, any> }) => (
                  <v-icon icon="settings" {...activatorProps} size={20} />
                ),
                default: () => (
                  <v-list>
                    {localHeaders.value.map(col => (
                      <v-list-item key={col.key}>
                        <v-checkbox
                          modelValue={!col.hide}
                          onUpdate:modelValue={(val: boolean) => col.hide = !val}
                          disabled={col.locked}
                          label={col.title}
                          hideDetails
                        />
                      </v-list-item>
                    ))}
                  </v-list>
                )
              }}
            </v-menu>
          )}
        </div>
      </div>
    )
  }
})