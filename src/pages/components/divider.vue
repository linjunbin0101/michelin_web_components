<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-03-21 14:29:11
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/divider.vue
 * @Description  :
-->
<template>
  <v-row>
    <v-col cols="6">
      <div style="margin: 50px 0">
        <v-divider
          :class="classRef"
          :color="colorRef"
          :inset="insetRef"
          :thickness="thicknessRef"
          :vertical="verticalRef"
          length="200"
        />
      </div>
    </v-col>
    <v-col cols="6">
      <div style="margin: 15px 0">Configuration</div>
      <v-slider v-model="thicknessRef" label="Thickness" />
      <v-select v-model="classRef" :items="classItems" label="Opacity" />
      <v-select
        v-model="colorRef"
        :items="['success', 'info', 'warning', 'error']"
        label="Color"
      />
      <v-switch v-model="verticalRef" label="Vertical" />
    </v-col>
  </v-row>
</template>

<script setup>
  import { ref } from 'vue'

  const thicknessRef = ref(1)
  const insetRef = ref(false)
  const colorRef = ref('')
  const classRef = ref('')
  const verticalRef = ref(false)

  const classItems = [
    { title: '100', value: 'border-opacity-100' },
    { title: '75', value: 'border-opacity-75' },
    { title: '50', value: 'border-opacity-50' },
    { title: '25', value: 'border-opacity-25' },
    { title: 'default', value: '' },
    { title: '0', value: 'border-opacity-0' },
  ]
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
