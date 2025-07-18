import { ref, defineComponent, Transition } from 'vue'
import './HcFilter.scss'

export const HcFilter = defineComponent({
  name: 'HcFilter',
  emits: ['reset', 'search'],
  setup(props, { emit, slots }) {
    const expand = ref(false)

    const handleReset = () => {
      emit('reset')
    }

    const handleSearch = () => {
      emit('search')
    }

    return () => (
      <div>
        <div class="modal-filter-content">
          <div class="modal-filter-box">
            <div class="modal-filter-text">Filters</div>
            <div class="modal-filter-box-right">
              <v-btn
                class="filter-btn-box filter-btn-box-reset"
                color="primary"
                icon="replay"
                variant="outlined"
                onClick={handleReset}
              />
              <v-btn
                class="filter-btn-box filter-btn-box-search"
                color="primary"
                icon="search"
                onClick={handleSearch}
              />
              <v-btn variant="text" color="primary" onClick={() => expand.value = !expand.value} ripple="false">
                <v-icon icon={expand.value ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} />
                {expand.value ? 'Retract' : 'Expand'}
              </v-btn>
            </div>
          </div>

          <Transition name="expand">
            {expand.value && (
              <div class="modal-filter-input-box">
                {slots['filter-input']?.()}
              </div>
            )}
          </Transition>
        </div>
      </div>
    )
  },
}) 