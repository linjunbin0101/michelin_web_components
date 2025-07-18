<template>
  <div style="width: 1000px;display: flex;justify-content: space-between">
    <v-text-fields-display
      style="width: 300px"
      label="Label"
      text="Lorem ipsum"
    />
    <v-text-fields-display
      append-label-icon="info"
      append-text-icon="content_copy"
      label="Label"
      style="width: 300px"
      text="Lorem ipsum"
    />
    <v-text-fields-display
      append-text-icon="edit"
      label="Label"
      style="width: 300px"
      text="Lorem ipsum"
    />
  </div>
  <div style="width: 1000px;display: flex;justify-content: space-between;margin-top: 50px">
    <v-text-fields-display
      append-text-icon="edit"
      label="Label"
      style="width: 300px"
      text="The white dog eats white flowers when it is sunny."
    />
    <v-text-fields-display
      append-label-icon="info"
      append-text-icon="edit"
      label="Label"
      style="width: 300px"
      text="The white dog eats white flowers when it is sunny.The white dog eats white flowers when it is sunny."
    />
    <v-text-fields-display
      append-label-icon="info"
      label="Label"
      style="width: 300px"
    >
      The white dog eats white flowers when it is sunny.The white dog eats white flowers when it is sunny.
    </v-text-fields-display>
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">

</style>
