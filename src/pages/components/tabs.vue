<template>
	<div class="tabs">
		<div class="text-subtitle-2 mb-2">Anatomy</div>
		<hc-tabs v-model="tab">
			<hc-tab badge-color="blue" badge-number="99" class="text-none" prepend-icon="list" value="one"
				variant="text">
				<span>Item</span>
			</hc-tab>
			<hc-tab value="two">Card</hc-tab>
			<hc-tab value="three">Schedule</hc-tab>
		</hc-tabs>
		<div class="tab_item">
			<hc-tabs v-model="tabItem">
				<hc-tab badge-color="blue" badge-number="99" class="text-none" value="one" variant="text">
					Item
				</hc-tab>
			</hc-tabs>
			<hc-tabs v-model="tabItem">
				<hc-tab badge-color="grey" badge-number="99" class="text-none" value="one" variant="text">
					Item
				</hc-tab>
			</hc-tabs>
			<hc-tabs v-model="tabItem">
				<hc-tab badge-color="red" badge-number="99" class="text-none" value="one" variant="text">
					Item
				</hc-tab>
			</hc-tabs>
			<hc-tabs v-model="tabItem">
				<hc-tab badge-color="yellow" badge-number="99" class="text-none" value="one" variant="text">
					Item
				</hc-tab>
			</hc-tabs>
			<hc-tabs v-model="tabItem">
				<hc-tab badge-color="green" badge-number="99" class="text-none" value="one" variant="text">
					Item
				</hc-tab>
			</hc-tabs>
		</div>
		<div class="tab_item">
			<div>
				<div class="text-subtitle-2 mb-2">MAX WIDTH</div>
				<hc-tabs v-model="tabItem">
					<hc-tab class="text-none"
						tooltip-text="Tab with truncated text samTab with truncated text samTab with truncated text sa"
						value="one" variant="text">
						<span class="text-overflow">Tab with truncated text samTab with truncated text samTab with
							truncated text
							sam</span>
					</hc-tab>
				</hc-tabs>
			</div>
			<div>
				<div class="text-subtitle-2 mb-2">Text only</div>
				<hc-tabs v-model="tabItem">
					<hc-tab class="text-none" value="one" variant="text">
						Item
					</hc-tab>
				</hc-tabs>
			</div>
			<div>
				<div class="text-subtitle-2 mb-2">Icon + Text</div>
				<hc-tabs v-model="tabItem">
					<hc-tab class="text-none" prepend-icon="list" value="one" variant="text">
						Item
					</hc-tab>
				</hc-tabs>
			</div>
			<div>
				<div class="text-subtitle-2 mb-2">Icon + Text + Count</div>
				<hc-tabs v-model="tabItem">
					<hc-tab class="text-none" prepend-icon="list" value="one" variant="text" badge-color="blue"
						badge-number="99">
						Item
					</hc-tab>
				</hc-tabs>
			</div>
			<div>
				<div class="text-subtitle-2 mb-2">Icon only</div>
				<hc-tabs v-model="tabItem" stacked>
					<hc-tab class="text-none" prepend-icon="list" value="one" variant="text" badge-color="blue" />
				</hc-tabs>
			</div>
			<div>
				<div class="text-subtitle-2 mb-2">disabled</div>
				<hc-tabs v-model="tabItem">
					<hc-tab class="text-none" prepend-icon="list" variant="text" disabled>
						list
					</hc-tab>
				</hc-tabs>
			</div>
		</div>
		<div class="text-subtitle-2 mb-2">Pagination</div>
		<hc-tabs bg-color="white" center-active>
			<hc-tab>One</hc-tab>
			<hc-tab>Two</hc-tab>
			<hc-tab>Three</hc-tab>
			<hc-tab>Four</hc-tab>
			<hc-tab>Five</hc-tab>
			<hc-tab>Six</hc-tab>
			<hc-tab>Seven</hc-tab>
			<hc-tab>Eight</hc-tab>
			<hc-tab>Nine</hc-tab>
			<hc-tab>Ten</hc-tab>
			<hc-tab>Eleven</hc-tab>
			<hc-tab>Twelve</hc-tab>
			<hc-tab>Thirteen</hc-tab>
			<hc-tab>Fourteen</hc-tab>
			<hc-tab>Fifteen</hc-tab>
			<hc-tab>Sixteen</hc-tab>
			<hc-tab>Seventeen</hc-tab>
			<hc-tab>Eighteen</hc-tab>
			<hc-tab>Nineteen</hc-tab>
			<hc-tab>Twenty</hc-tab>
		</hc-tabs>
		<div>
			<div class="text-subtitle-2 mb-2">left alignment</div>
			<hc-tabs align-tabs="start">
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
			</hc-tabs>
		</div>
		<div>
			<div class="text-subtitle-2 mb-2">fill container</div>
			<hc-tabs align-tabs="center">
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
				<hc-tab class="text-none" prepend-icon="list" variant="text">
					list
				</hc-tab>
			</hc-tabs>
		</div>
	</div>
	<div style="margin-top: 50px">
		<h3>问题：</h3>
		<p>1、滑动时的剩余数字无插槽，现通过:before伪元素实现，无法去动态计算数字（未修复）</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tab = ref('one')
const tabItem = ref('two')
</script>

<style scoped>
.tabs {
	background-color: #F9F9F9;
	padding: 20px;
}

.tab_item {
	display: flex;
	margin: 20px 0;

	&>div {
		margin-right: 30px
	}
}
</style>
