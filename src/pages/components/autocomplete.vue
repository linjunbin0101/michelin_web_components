<template>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style="flex: 1">
      <h4>单选</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" label="Label" variant="outlined" clearable />
    </div>
    <div style="flex: 1">
      <h4>多选,内容纸片显示,max-lenght控制数量</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" :menu-icon="null" append-inner-icon="search" label="Label" variant="outlined" chips :maxLength="2" clearable
        closable-chips multiple />
      <!-- <h4>多选,增加checkbox效果，max-lenght控制数量</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" label="Label" variant="outlined" clearable multiple :maxLength="2" /> -->
    </div>
  </div>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style="flex: 1">
      <h4>Disabled1</h4>
      <v-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" label="Label" variant="outlined" disabled />
    </div>
    <div style="flex: 1">
      <h4>Disabled2</h4>
      <v-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" label="Label" variant="outlined" disabled v-model="Disabled" />
    </div>
  </div>
  <div class="d-flex" style="width: 100%; gap: 20px; margin-bottom: 20px">
    <div style="flex: 1">
      <h4>Disabled3</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" :menu-icon="null" append-inner-icon="search" label="Label" variant="outlined" chips :maxLength="2" clearable
        multiple disabled v-model="Disableds" />
    </div>
    <div style="flex: 1">
      <h4>多选 Error</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" :menu-icon="null" append-inner-icon="search" label="Label" variant="outlined" chips :maxLength="2" clearable
        multiple error clear-icon="error_outline" error-messages="There is an error message" />
    </div>
  </div>
  <div class="d-flex" style="width: 100%; gap: 20px;">
    <div style=" flex: 1">
      <h4>Error</h4>
      <hc-autocomplete :items="[
        'California',
        'Colorado',
        'Florida',
        'Georgia',
        'Texas',
        'Wyoming',
      ]" error-messages="There is an error message" label="Label" variant="outlined" clearable error
        clear-icon="error_outline" />
    </div>
    <div style="flex: 1">
      <h4>No Data</h4>
      <hc-autocomplete label="Label" :items="[]" no-data-text="No result" variant="outlined" clearable />
    </div>
  </div>
  <div style="margin-top: 50px">
    <h3>无法修改的样式</h3>
    <p>1、Chips在输⼊框够宽的情况下，需要展示全部的信息，不要缩略成“…”，只有平铺满输⼊框还不能全部展示时，才显示“……”，无法处理动态长度 现chip的最大宽度调整到200px;</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const Disabled = ref("Disabled");
const Disableds = ref(["Disabled1", "Disabled2", "Disabled3", "Disabled4"]);
</script>

<style scoped lang="scss">
h4 {
  margin-bottom: 10px;
}
</style>
