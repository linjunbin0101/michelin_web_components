<template>
  <div class="date-input-demo">
    <h2>日期输入框示例</h2>
    <div class="demo-section">
      <h3>基础用法</h3>
      <v-date-input
        v-model="basicDate"
        label="Select a date"
        max-width="368"
      ></v-date-input>
      <div class="value-display">当前值: {{ basicDate }}</div>
    </div>
    <div class="demo-section">
      <h3>日期范围(内嵌图标)</h3>
      <v-date-input
        v-model="rangeDate"
        label="Select range"
        prepend-icon=""
        prepend-inner-icon="$calendar"
        variant="outlined"
        multiple="range"
      ></v-date-input>
      <div class="value-display">当前值: {{ rangeDate }}</div>
    </div>
    <div class="demo-section">
      <h3>多选日期</h3>
      <v-date-input
        v-model="multipleDate"
        label="Select day(s)"
        max-width="368"
        multiple
      ></v-date-input>
      <div class="value-display">当前值: {{ multipleDate }}</div>
    </div>
    <div class="demo-section">
      <h3>多选日期</h3>
      <v-date-input
        v-model="multipleDate"
        label="Select day(s)"
        max-width="368"
        multiple
      ></v-date-input>
      <div class="value-display">当前值: {{ multipleDate }}</div>
    </div>
    <div class="demo-section">
      <h3>ISO Date</h3>
      <v-date-input
        v-model="isoDate"
        :display-format="format"
        max-width="368"
        prefix="ISO Date:"
      ></v-date-input>
    </div>

    <div class="description">
      <ul>
        <li>Vuetify 3.7.16 does not support 'display-format': the format of the date that is displayed in the input</li>
        <li>date-input has error when clearing the value of the date input </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import { useDate } from 'vuetify'
import { VDateInput } from 'vuetify/labs/VDateInput'

const basicDate = shallowRef(null);
const multipleDate = shallowRef(null);
const rangeDate = shallowRef(null);
const adapter = useDate()
const isoDate = shallowRef(adapter.parseISO('2025-02-25'))

function format (date: Date) {
  return adapter.toISO(date)
}
</script>

<style scoped>
.date-input-demo {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
}

h2 {
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
}

h3 {
  margin-bottom: 15px;
  color: #666;
  font-size: 16px;
}

.value-display {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
  padding: 8px;
  background-color: #f5f5f5;
  border-radius: 4px;
}

.description {
  padding: 15px;
  color: #ff0000;
}
</style>
