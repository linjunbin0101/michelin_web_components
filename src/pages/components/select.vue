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
      ]" label="Label" variant="outlined" clearable :inputAble="false" tabindex="-1" />
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
        closable-chips multiple :inputAble="false" />
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
      ]" label="Label" variant="outlined" disabled :inputAble="false" />
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
      ]" label="Label" variant="outlined" disabled v-model="Disabled" :inputAble="false" />
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
        multiple disabled v-model="Disableds" :inputAble="false" />
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
        multiple error clear-icon="error_outline" error-messages="There is an error message" :inputAble="false" />
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
        clear-icon="error_outline" :inputAble="false" />
    </div>
    <div style="flex: 1">
      <h4>No Data</h4>
      <hc-autocomplete label="Label" :items="[]" no-data-text="No result" variant="outlined" clearable
        :inputAble="false" />
    </div>
  </div>
  <div style="margin-top: 50px">
    <h3>问题：</h3>
    <p>1、Chips在输⼊框够宽的情况下，需要展示全部的信息，不要缩略成“…”，只有平铺满输⼊框还不能全部展示时，才显示“……”，无法处理动态长度 现chip的最大宽度调整到200px;（未修复）</p>
    <p>2、Icon颜⾊应为#666666（已修复）</p>
    <p>3、⽂字区域和icon的间距为8px，现在开发的样式是16px（已修复）</p>
    <p>4、⽂字左边距应为12px，实际开发的左边距现在为16px（已修复）</p>
    <p>5、提示⽂字和输⼊框间距应该为0，⽂字⾏⾼应为14px，开发现在是12px（已修复）</p>
    <p>6、拉下箭头icon颜⾊应该为#1A1A1A。缺少error 的icon（已修复）</p>
    <p>7、ICON丢失（已修复）</p>
    <p>8、禁止输入（已修复）</p>
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
