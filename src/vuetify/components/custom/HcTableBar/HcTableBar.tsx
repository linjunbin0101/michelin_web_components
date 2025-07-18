import { ref, defineComponent, watch, toRef } from 'vue'
import './HcTableBar.scss'

interface ColumnItem {
	key: string
	title: string
	disabled?: boolean
}

export const HcTableBar = defineComponent({
	name: 'HcTableBar',
	props: {
		filterCount: {
			type: Number,
			default: 0,
		},
		total: {
			type: Number,
			default: 0,
		},
		columnList: {
			type: Array as () => ColumnItem[],
			default: () => [],
		},
		value: {
			type: Array as () => string[],
			default: () => [],
		},
		by_module: {
			type: String,
			default: 'table-bar',
		},
	},
	emits: ['update:value'],
	setup(props, { emit }) {
		
		const checkAll = ref(true)
		const indeterminate = ref(false)
		const showColumnList = ref<string[]>([])

		const stateValue = toRef(props, 'value')

		const onCheckAllChange = (checked: boolean) => {
			if (checked) {
				showColumnList.value = props.columnList.map(item => item.key)
				indeterminate.value = false
			} else {
				showColumnList.value = props.columnList.filter(item => item.disabled).map(item => item.key)
			}
		}

		const showColumnChange = () => {
			// 移除缓存相关代码
		}

		const initCheckAll = () => {
			const allCheck = props.columnList.every(item => showColumnList.value.findIndex(i => i === item.key) !== -1)
			if (allCheck) {
				checkAll.value = true
				indeterminate.value = false
			} else if (showColumnList.value.length === 0) {
				checkAll.value = false
				indeterminate.value = false
			} else {
				indeterminate.value = true
			}
		}

		watch(stateValue, newValue => {
			showColumnList.value = newValue
		})

		watch(showColumnList, newValue => {
			emit('update:value', newValue)
			initCheckAll()
		})

		// 初始化时直接使用所有列
		showColumnList.value = props.columnList.map(item => item.key)

		return () => (
			<div class="table-total-column-config flex justify-between items-center">
				<div class="flex-1 text-left flex items-center">
					{props.filterCount !== props.total && (
						<div class="filter-result" key="filter-result">
							Filter results
							<span class="table-total">{props.filterCount}</span>
							Items
						</div>
					)}
					Total
					<span class="table-total">{props.total}</span>
					Items
				</div>
				<div class="flex-1 text-right">
					<v-menu
						class="show-columns"
						location="bottom end"
						closeOnContentClick={false}
						v-slots={{
							activator: ({ props: menuProps }: { props: any }) => (
								<v-btn
									{...menuProps}
									variant="text"
									size="small"
									class="show-columns-btn"
								>
									<v-icon icon="brightness_5" />
								</v-btn>
							),
						}}
					>
						<v-card minWidth={200}>
							<v-card-text class="pa-3">
								<div class="flex flex-col">
									<div style={{ height: '36px' }} class="flex items-center">
										<v-checkbox
											v-model={checkAll.value}
											indeterminate={indeterminate.value}
											onUpdate:modelValue={onCheckAllChange}
											density="compact"
											hideDetails
											v-slots={{
												label: () => <span>All</span>,
											}}
										/>
									</div>
									{props.columnList.map(item => (
										<div key={item.key} class="flex items-center" style={{ height: '36px' }}>
											<v-checkbox
												v-model={showColumnList.value}
												value={item.key}
												disabled={item.disabled}
												onUpdate:modelValue={showColumnChange}
												density="compact"
												hideDetails
												v-slots={{
													label: () => <span>{item.title}</span>,
												}}
											/>
										</div>
									))}
								</div>
							</v-card-text>
						</v-card>
					</v-menu>
				</div>
			</div>
		)
	},
})