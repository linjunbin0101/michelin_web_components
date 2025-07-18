<template>
	<v-btn @click="showPagination = !showPagination" style="margin-bottom: 20px;">toggle pagination</v-btn>
	<HcTableToolBar :headers="columns" @update:headers="updateHeaders" class="mb-4" />
	<HcTable :headers="columns" :items="dataList" :items-length="total" :items-per-page-options="[10, 20, 50, 100]"
		:show-toolbar="true" :show-pagination="showPagination" @update:items-per-page="pagesizeChange"
		@update:page="pageChange" @update:options="handleSortChange">
		<!-- 自定义工具栏内容 -->
		<template #toolbar-left>
			<div>自定义工具栏内容</div>
		</template>
		<template #item.CAI="{ item }">
			<div>CAI: {{ item.CAI }}</div>
		</template>
	</HcTable>
</template>

<script setup>
import { ref } from 'vue'

const updateHeaders = (value) => {
	console.log(value, 'value------------')
}
const showPagination = ref(true)
const total = ref(30)
const count = ref(12)
const columns = ref([
	{
		title: '111',
		dataIndex: 'CAI',
		key: 'CAI',
		width: 100,
		disabled: true,
	},
	{
		title: '222',
		dataIndex: 'MSPN',
		key: 'MSPN',
		locked: true,
	},
	{
		title: '333',
		dataIndex: 'brand',
		key: 'brand',
		width: 220,
	},
	{
		title: '444',
		dataIndex: 'spec',
		key: 'spec',
	},
	{
		title: '555',
		dataIndex: 'pattern',
		key: 'pattern',
		width: 250,
	},
	{
		title: '666',
		dataIndex: 'name',
		key: 'name',
		width: 300,
	},
	{
		title: '777',
		dataIndex: 'tyre_life',
		key: 'tyre_life',
	},
	{
		title: '888',
		dataIndex: 'otd',
		key: 'otd',
	},
	{
		title: '999',
		dataIndex: 'source',
		key: 'source',
		sortable: false,
	},
])
// const dataList = ref(Array(25).fill({}))
const dataList = ref(Array(10).fill({}))
const dataPagesizeOptions = ref([
	{ title: '10', value: 10 },
	{ title: '20', value: 20 },
	{ title: '50', value: 50 },
	{ title: '100', value: 100 },
])

const pageChange = (page) => {
	console.log(page, 'page------------')
}

const pagesizeChange = (pagesize) => {
	console.log(pagesize, 'pagesize------------')
}

const handleSortChange = (options) => {
	console.log(options, 'options------------')
}
</script>

<style scoped lang="scss"></style>
