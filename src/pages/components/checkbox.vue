<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-02 11:37:47
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/checkbox.vue
 * @Description  :
-->
<template>
  <v-expansion-panels v-model="isShow">
    <v-expansion-panel value="orientation">
      <template #title>
        <h2>Orientation</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="3"> Horizontal </v-col>
          <v-col cols="3">
            <v-checkbox :model-value="true" label="Checkbox label" />
          </v-col>
          <v-col cols="3">
            <v-checkbox :model-value="true" label="Checkbox label" />
          </v-col>
          <v-col cols="3">
            <v-checkbox :model-value="true" label="Checkbox label" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> Vertical </v-col>
          <v-col cols="9">
            <v-checkbox :model-value="true" label="Checkbox label" />
            <v-checkbox :model-value="true" label="Checkbox label" />
            <v-checkbox :model-value="true" label="Checkbox label" />
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>
    <v-expansion-panel value="state">
      <template #title>
        <h2>States</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="3" />
          <v-col cols="3"> on </v-col>
          <v-col cols="3"> off </v-col>
          <v-col cols="3"> indeterminate </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> default </v-col>
          <v-col cols="3">
            <v-checkbox :model-value="true" label="Checkbox label" />
          </v-col>
          <v-col cols="3">
            <v-checkbox :model-value="false" label="Checkbox label" />
          </v-col>
          <v-col cols="3">
            <v-checkbox label="Checkbox label" indeterminate />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3"> disabled </v-col>
          <v-col cols="3">
            <v-checkbox :model-value="true" label="Checkbox label" disabled />
          </v-col>
          <v-col cols="3">
            <v-checkbox :model-value="false" label="Checkbox label"  disabled />
          </v-col>
          <v-col cols="3">
            <v-checkbox label="Checkbox label" disabled indeterminate />
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>
    <v-expansion-panel value="form">
      <template #title>
        <h2>Form</h2>
      </template>
      <template #text>
        <hc-checkbox-group :options="checkBoxs" v-model="selectedCheckBoxs" all-label="all" :inline="false">
        </hc-checkbox-group>
      </template>
    </v-expansion-panel>
    <v-expansion-panel value="message">
      <template #title>
        <h2>Error message</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="12">
            <v-checkbox :model-value="true" label="I agree Terms and Conditions"
              error-messages="You have to agree the conditions" />
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
  'message',
  'form'
])

const checkBoxs = ref([
  { label: 'Checkbox label', value: 'CheckboxLabel1' },
  { label: 'Checkbox label', value: 'CheckboxLabel2' },
  { label: 'Checkbox label', value: 'CheckboxLabel3' },
]);

const selectedCheckBoxs = ref(['CheckboxLabel1']);
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
