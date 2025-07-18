<template>
	<v-data-table :headers="headers" :items="sortedItems" @update:sort-by="onSortChange">
		<!-- 自定义全选功能 -->
		<template #[`header.selection`]>
			<div class="select-header-container">
				<v-checkbox :model-value="isAllSelected" :indeterminate="isIndeterminate"
					style="margin-top: 8px !important;" @update:model-value="toggleSelectAll" />
				<div class="sort-icon-container" @click="toggleSelectedSort">
					<v-icon v-if="selectedSortOrder === 'default'" class="default-sort-icon">
						arrow_upward
					</v-icon>
					<v-icon v-else class="active-sort-icon">
						{{ sortIcon }}
					</v-icon>
				</div>
			</div>
		</template>

		<!-- 自定义行选择 -->
		<template #[`item.selection`]="{ item }">
			<v-checkbox :model-value="isItemSelected(item)" style="margin-top: 8px !important;"
				@update:model-value="(val) => toggleItemSelection(item, val)" />
		</template>
	</v-data-table>
	<div style="margin-top: 50px">
		<h3>问题</h3>
		<p>1、分页（后续分页组件完成修改）</p>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selected = ref([]);
const selectedSortOrder = ref('default'); // 'default' | 'asc' | 'desc'

// 添加选择列头
const headers = [
	{ title: '', key: 'selection', sortable: false, width: '56px' }, // 选择列
	{ title: 'Name', key: 'name', sortable: true },
	{ title: 'Location', key: 'location', sortable: true },
	{ title: 'Height', key: 'height', sortable: true },
	{ title: 'Base', key: 'base', sortable: true },
	{ title: 'Volume', key: 'volume', sortable: true },
];

const items = [
	{ name: 'Apple', location: 'Washington', height: '0.1', base: '0.07', volume: '0.0001' },
	{ name: 'Banana', location: 'Ecuador', height: '0.2', base: '0.05', volume: '0.0002' },
	{ name: 'Grapes', location: 'Italy', height: '0.02', base: '0.02', volume: '0.00001' },
	{ name: 'Watermelon', location: 'China', height: '0.4', base: '0.3', volume: '0.03' },
	{ name: 'Pineapple', location: 'Thailand', height: '0.3', base: '0.2', volume: '0.005' },
	{ name: 'Cherries', location: 'Turkey', height: '0.02', base: '0.02', volume: '0.00001' },
	{ name: 'Mango', location: 'India', height: '0.15', base: '0.1', volume: '0.0005' },
	{ name: 'Strawberry', location: 'USA', height: '0.03', base: '0.03', volume: '0.00002' },
	{ name: 'Peach', location: 'China', height: '0.09', base: '0.08', volume: '0.0004' },
	{ name: 'Kiwi', location: 'New Zealand', height: '0.05', base: '0.05', volume: '0.0001' },
];

const sortIcon = computed(() => {
	if (selectedSortOrder.value === 'asc') return 'arrow_upward';
	if (selectedSortOrder.value === 'desc') return 'arrow_downward';
	return 'arrow_upward';
});

const sortedItems = computed(() => {
	const itemsWithSelection = items.map(item => ({
		...item,
		_selected: selected.value.includes(item.name),
	}));
	const sorted = [...itemsWithSelection].sort((a, b) => {
		if (selectedSortOrder.value === 'default') return 0;
		if (a._selected !== b._selected) {
			return selectedSortOrder.value === 'asc'
				? a._selected ? -1 : 1
				: a._selected ? 1 : -1;
		}
		return 0;
	});
	return sorted;
});

// 修复计算属性，使用sortedItems而不是items
const isAllSelected = computed(() => {
	const displayedItems = sortedItems.value;
	return displayedItems.length > 0 && displayedItems.every(item => item._selected);
});

const isIndeterminate = computed(() => {
	const displayedItems = sortedItems.value;
	const selectedCount = displayedItems.filter(item => item._selected).length;
	return selectedCount > 0 && selectedCount < displayedItems.length;
});

const isItemSelected = (item) => {
	return selected.value.includes(item.name);
};

const toggleItemSelection = (item, isSelected) => {
	if (isSelected) {
		if (!selected.value.includes(item.name)) {
			selected.value = [...selected.value, item.name];
		}
	} else {
		selected.value = selected.value.filter(name => name !== item.name);
	}
};

const toggleSelectAll = (checked) => {
	selected.value = checked ? items.map(item => item.name) : [];
};

const toggleSelectedSort = () => {
	const orders = ['default', 'asc', 'desc'];
	const currentIndex = orders.indexOf(selectedSortOrder.value);
	const nextIndex = (currentIndex + 1) % orders.length;
	selectedSortOrder.value = orders[nextIndex];
};

const onSortChange = (sortByItems) => {
	// 如果排序不是由我们的自定义排序触发的（即用户点击了其他列）
	if (!sortByItems.some(s => s.key === '_selected')) {
		selectedSortOrder.value = 'default';
	}
};
</script>

<style scoped lang="scss">
.select-header-container {
	min-width: 50px;
	display: flex;
	align-items: center;
	position: relative;
}

.sort-icon-container {
	position: relative;
	width: 24px;
	height: 24px;
	cursor: pointer;
}

.default-sort-icon {
	opacity: 0;
	color: #999;
	transition: opacity 0.2s;
}

.sort-icon-container:hover .default-sort-icon {
	opacity: 1;
}

.active-sort-icon {
	opacity: 1;
}
</style>