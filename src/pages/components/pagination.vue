<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-18 10:25:41
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/pagination.vue
 * @Description  :
-->
<template>
  <v-expansion-panels v-model="isShow">
    <v-expansion-panel value="type">
      <template #title>
        <h2>Types</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="3"> Default </v-col>
          <v-col cols="12">
            <v-pagination :length="3" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Disabled </v-col>
          <v-col cols="12">
            <v-pagination :length="3" disabled />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Length </v-col>
          <v-col cols="8">
            <v-pagination
              v-model="page"
              :length="20"
              rounded="0"
            />
          </v-col>
        </v-row>
      </template>
      <div class="description">
        <ul>
          <li>pagination 组件不支持显示每页项目数。</li>
          <li>The pagination component does not support displaying the number of items per page.</li>
        </ul>
      </div>
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
  const page = ref(1)
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
