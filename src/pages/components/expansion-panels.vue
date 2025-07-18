<template>
	<div class="expansion-panels">
		<div class="text-subtitle-2 mb-2">Default</div>
		<div style="background-color: #F9F9F9; padding: 24px; border-radius: 8px;">
			<div style="width: 443px; margin-top: 8px;">
				<v-expansion-panels>
					<v-expansion-panel v-for="i in 3" :key="i"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." title="Title" />
				</v-expansion-panels>
			</div>
		</div>

		<div class="text-subtitle-2 mt-4 mb-2">Accordion</div>
		<div style="padding: 24px;">
			<div style="width: 443px;">
				<v-expansion-panels variant="accordion">
					<v-expansion-panel v-for="i in 3" :key="i"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." title="Title" />
				</v-expansion-panels>
			</div>
		</div>
	</div>
</template>

<script setup>

</script>

<style scoped>
.expansion-panels {
	margin-top: 15px;
	background-color: #f5f5f5;
}
</style>
