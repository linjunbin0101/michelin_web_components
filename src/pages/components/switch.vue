<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-08 13:29:56
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/switch.vue
 * @Description  :
-->
<template>
	<v-expansion-panels v-model="isShow">
		<v-expansion-panel value="state">
			<template #title>
				<h2>States</h2>
			</template>
			<template #text>
				<v-row>
					<v-col cols="3"> Default </v-col>
					<v-col cols="3">
						<v-switch :model-value="false" label="Switch" inset />
					</v-col>
					<v-col cols="3">
						<v-switch :model-value="true" label="Switch" inset />
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="3"> Disabled </v-col>
					<v-col cols="3">
						<v-switch :model-value="false" label="Switch" disabled inset />
					</v-col>
					<v-col cols="3">
						<v-switch :model-value="true" label="Switch" disabled inset />
					</v-col>
				</v-row>
			</template>
		</v-expansion-panel>
	</v-expansion-panels>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref([
	'type',
	'orientation',
	'variant',
	'size',
	'state',
	'position',
	'menu',
])
</script>

<style scoped lang="scss">
.v-expansion-panels {
	margin-bottom: 10px;
}

.btn-control {
	border-color: #cccccc;
	background-color: #f2f2f2 !important;
}

.description {
	padding: 15px;
	color: #ff0000;
}

.not-supported {
	padding: 15px 0;
	color: #ff0000;
}
</style>
