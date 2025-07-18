<template>
  <div class="tooltips">
    <div class="text-subtitle-2 mb-2">Tooltips</div>
    <div class="tooltips-content">
      <span>
        Top
        <v-tooltip
          activator="parent"
          location="top"
        >Tooltip example</v-tooltip>
      </span>
      <span>
        right
        <v-tooltip
          activator="parent"
          location="right"
        >Tooltip example</v-tooltip>
      </span>
      <span>
        bottom
        <v-tooltip
          activator="parent"
          location="bottom"
        >Tooltip example</v-tooltip>
      </span>
      <span>
        left
        <v-tooltip
          activator="parent"
          location="left"
        >Tooltip example</v-tooltip>
      </span>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .tooltips {
    margin-top: 15px;
  }

  .tooltips-content {
    background-color: #F9F9F9;
    padding:50px;
    display: flex;
    justify-content: space-between;
  }
</style>
