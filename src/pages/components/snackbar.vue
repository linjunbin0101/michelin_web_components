<template>
  <div class="text-center ma-2">
    <v-btn
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>
    <v-snackbar
      v-model="snackbar"
      icon="$hc-hollowInfo"
    >
      {{ text }}
      <template #actions>
        <div style="display: flex;column-gap: 24px;font-weight: 600">
          <div>ACTION</div>
          <div>CLOSE</div>
        </div>
      </template>
    </v-snackbar>
  </div>
  <div style="margin-top: 50px;">
    <h3>Style that cannot be modified</h3>
    <p>1.Component does not support customizing icon labels before text through attributes</p>
    <h3>无法修改的样式</h3>
    <p>1.组件不支持通过属性在文本前自定义icon标签</p>
  </div>
</template>
<!-- 增加icon属性用来增加content前的icon显示 -->
<script setup>
  import { ref } from 'vue'
  const snackbar = ref(true)
  const text = ref('Hello, I\'m a snackbar')

</script>

<style scoped lang="less">

</style>
