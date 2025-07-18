import { defineComponent, computed, ref, PropType } from 'vue';
import { VCheckbox } from 'vuetify/components';
import './HcCheckboxGroup.scss';

interface CheckboxOption {
  label: string;
  value: string | number;
}

interface Props {
  options: CheckboxOption[];
  modelValue: Array<string | number>;
  allLabel: string;
  showAll: boolean;
  inline: boolean;
  indeterminate?: boolean;
  label?: string;
  key?: string | number;
  'onUpdate:modelValue'?: (value: Array<string | number>) => void;
}

export const HcCheckboxGroup = defineComponent({
  name: 'HcCheckboxGroup',
  props: {
    ...VCheckbox.props,
    options: {
      type: Array as PropType<CheckboxOption[]>,
      required: true,
    },
    modelValue: {
      type: Array as PropType<Array<string | number>>,
      default: () => [],
    },
    allLabel: {
      type: String,
      default: "All" // Default label for the "All" checkbox
    },
    showAll: {
      type: Boolean,
      default: true, // Show the "All" checkbox by default
    },
    inline: {
      type: Boolean,
      default: false, // Default vertical layout
    }
  },
  emits: ['update:modelValue'],
  setup(props: Props, { emit, attrs }) {
    const selectedValues = ref([...props.modelValue]);

    // Compute the state of the "All" checkbox
    const isAllChecked = computed(() => {
      if (selectedValues.value.length === props.options.length) return true;
      if (selectedValues.value.length === 0) return false;
      return null; // Indeterminate state
    });

    // Handle "All" checkbox toggle
    const toggleAll = () => {
      if (isAllChecked.value === true) {
        selectedValues.value = [];
      } else {
        selectedValues.value = props.options.map((option: { label: string; value: string | number }) => option.value);
      }
      emit('update:modelValue', selectedValues.value);
    };

    // Handle individual checkbox toggle
    const toggleCheckbox = (value: string | number) => {
      if (selectedValues.value.includes(value)) {
        selectedValues.value = selectedValues.value.filter(v => v !== value);
      } else {
        selectedValues.value.push(value);
      }
      emit('update:modelValue', selectedValues.value);
    };

    const filteredProps = computed(() => {
      const { modelValue, indeterminate, label, key, 'onUpdate:modelValue': onUpdateModelValue, ...rest } = props;
      return rest;
    });

    return {
      selectedValues,
      isAllChecked,
      toggleAll,
      toggleCheckbox,
      filteredProps,
    };
  },
  render() {
    return (
      <div
        class={[
          'hc-checkbox-group',
          { 'checkbox-group--horizontal': this.inline },
        ]}
      >
        {/* "All" Checkbox */}
        {this.showAll && <VCheckbox
          modelValue={this.isAllChecked}
          onUpdate:modelValue={this.toggleAll}
          label={this.allLabel}
          indeterminate={this.isAllChecked === null}
          {...this.filteredProps}
          {...this.$attrs}
        />}

        {/* Individual Checkboxes */}
        {this.options.map((option: { label: string; value: string | number }) => (
          <VCheckbox
            key={option.value}
            modelValue={this.selectedValues.includes(option.value)}
            onUpdate:modelValue={() => this.toggleCheckbox(option.value)}
            label={option.label}
            {...this.filteredProps}
            {...this.$attrs}
          />
        ))}
      </div>
    );
  },
});