<template>
  <v-row
    align="start"
    style="margin-top: 50px"
  >
    <v-col cols="8">
      <hc-empty-state
        :image="type"
        :layout="layout"
        :size="size"
        style="min-height: 0"
        text="There is nothing in there."
        title="Sorry,"
      >
        <template #actions>
          <v-btn append-icon="$expand" prepend-icon="add">Button</v-btn>
        </template>
      </hc-empty-state>
    </v-col>
    <v-col cols="4">
      <h3>Layout</h3>
      <div style="display: flex;justify-content: space-between;margin: 10px 0;">
        <v-btn @click="layout = 'vertical'">Vertical</v-btn>
        <v-btn @click="layout = 'horizontal'">Horizontal</v-btn>
      </div>
      <h3>Types of illustration</h3>
      <div style="display: flex;justify-content: space-between;margin: 10px 0;">
        <v-select
          v-model="type"
          :items="typeList"
          @update:model-value="changeType"
        />
      </div>
      <h3>Size</h3>
      <div style="display: flex;justify-content: space-between;margin: 10px 0;">
        <v-select
          v-model="size"
          :items="sizeList"
          @update:model-value="sizeType"
        />
      </div>
    </v-col>
  </v-row>
  <div style="margin-top: 50px;">
    <h3>Style that cannot be modified</h3>
    <p>1.At present, layout adjustment is not supported. The prototype needs to support up and down and left and right layouts, while the component only supports up and down layouts and does not support left and right layouts</p>
    <p>2.Cannot support built-in status images, unable to embed custom status images related to prototypes</p>
    <h3>无法修改的样式</h3>
    <p>1.目前不支持布局调整，原型需要支持上下和左右布局，组件只支持上下布局，不支持左右布局</p>
    <p>2.不支持状态图片内置，无法内置原型涉及的自定义状态图片</p>
  </div>
</template>

<script setup>
// 增加layout属性，用于控制布局 其中包含horizontal、vertical
// image属性增加 404、no-data、no-data-search、download、no-network、no-permission、system、system-setting属性作为内置状态

  import { ref } from 'vue'

  const layout = ref('vertical')
  const type = ref('404')
  const size = ref(160)
  const typeList = ref([
    { title: '404', value: '404' },
    { title: 'No data', value: 'no-data' },
    { title: 'No data search', value: 'no-data-search' },
    { title: 'Download', value: 'download' },
    { title: 'No network', value: 'no-network' },
    { title: 'No permission', value: 'no-permission' },
    { title: 'System', value: 'system' },
    { title: 'System setting', value: 'system-setting' },
  ])
  const sizeList = ref([
    { title: 'S', value: 106 },
    { title: 'M', value: 160 },
    { title: 'L', value: 240 },
  ])

  const changeType = value => {
    type.value = value
  }

  const sizeType = value => {
    size.value = value
  }

</script>

<style scoped lang="less">

</style>
