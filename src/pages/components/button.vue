<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-18 17:24:31
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/button.vue
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
          <v-col cols="4">
            <p>Button / Icon</p>
            <v-btn density="compact" icon="add" variant="elevated" />
          </v-col>
          <v-col cols="4">
            <p>Button / Text</p>
            <v-btn variant="elevated">Button</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <p>Button / Icon + Text</p>
            <v-btn prepend-icon="add" variant="elevated">Button</v-btn>
          </v-col>
          <v-col cols="4">
            <p>Button / Text + Icon</p>
            <v-btn append-icon="$expand" variant="elevated">Button</v-btn>
          </v-col>
          <v-col cols="4">
            <p>Button / Icon + Text + Icon</p>
            <v-btn append-icon="$expand" prepend-icon="add" variant="elevated">Button</v-btn>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <v-expansion-panel value="icon">
      <template #title>
        <h2>Icons</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="2">
            <v-btn icon="add" variant="elevated" />
          </v-col>
          <v-col cols="2">
            <v-btn icon="add" variant="outlined" />
          </v-col>
          <v-col cols="2">
            <v-btn icon="add" variant="text" />
          </v-col>
          <v-col cols="2">
            <v-btn color="grey" icon="add" variant="outlined" />
          </v-col>
          <v-col cols="2">
            <v-btn color="red" icon="add" variant="elevated" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-btn icon="add" variant="elevated" disabled />
          </v-col>
          <v-col cols="2">
            <v-btn icon="add" variant="outlined" disabled />
          </v-col>
          <v-col cols="2">
            <v-btn icon="add" variant="text" disabled />
          </v-col>
          <v-col cols="2">
            <v-btn color="grey" icon="add" variant="outlined" disabled />
          </v-col>
          <v-col cols="2">
            <v-btn color="red" icon="add" variant="elevated" disabled />
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <v-expansion-panel value="variant">
      <template #title>
        <h2>Variations</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="2" />
          <v-col cols="2">
            <h3>elevated</h3>
          </v-col>
          <v-col cols="2">
            <h3>outlined</h3>
          </v-col>
          <v-col cols="2">
            <h3>text</h3>
          </v-col>
          <v-col cols="2">
            <h3>outlined + grey</h3>
          </v-col>
          <v-col cols="2">
            <h3>elevated + red</h3>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <h3>Default</h3>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" prepend-icon="add" variant="elevated">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" prepend-icon="add" variant="outlined">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" prepend-icon="add" variant="text">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" color="grey" prepend-icon="add" variant="outlined">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" color="red" prepend-icon="delete" variant="elevated">Button</v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <h3>Disabled</h3>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" prepend-icon="add" variant="elevated" disabled>Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" prepend-icon="add" variant="outlined" disabled>Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" prepend-icon="add" variant="text" disabled>Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" color="grey" prepend-icon="add" variant="outlined" disabled>Button</v-btn>
          </v-col>
          <v-col cols="2">
            <v-btn append-icon="$expand" color="red" prepend-icon="delete" variant="elevated" disabled>Button</v-btn>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <!-- <v-expansion-panel value="variant">
      <template #title>
        <h2>Variations</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="2">
            <p>text</p>
            <v-btn variant="text">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>flat</p>
            <v-btn variant="flat">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>elevated</p>
            <v-btn variant="elevated">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>tonal</p>
            <v-btn variant="tonal">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>outlined</p>
            <v-btn variant="outlined">Button</v-btn>
          </v-col>
          <v-col cols="2">
            <p>plain</p>
            <v-btn variant="plain">Button</v-btn>
          </v-col>
        </v-row>
        <div class="description">
          <ul>
            <li>组件 variant 属性支持：'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain'。</li>
            <li>如果要支持：Primary｜Secondary｜Control｜Tertiary，<strong>需要修改 css 和 javascript 才能支持</strong>。</li>
          </ul>
        </div>
      </template>
    </v-expansion-panel> -->

    <v-expansion-panel value="size">
      <template #title>
        <h2>Size</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="3">
            <p>Desktop - default</p>
            <v-btn append-icon="$expand" prepend-icon="add" variant="elevated">Button</v-btn>
          </v-col>
          <v-col cols="3">
            <p>Desktop - small</p>
            <v-btn append-icon="$expand" prepend-icon="add" size="small" variant="elevated">Button</v-btn>
          </v-col>
        </v-row>
      </template>
      <div class="description">
        <ul>
          <li>button 组件 width 值为小数</li>
          <li>button component width value is a decimal.</li>
        </ul>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(['type', 'icon', 'variant', 'size', 'state', 'position', 'menu'])
</script>

<style scoped lang="scss">
.v-expansion-panels {
  margin-bottom: 10px;
}

.btn-control {
  border-color: #CCCCCC;
  background-color: #F2F2F2 !important;
}

.description {
  padding: 15px;
  color: #FF0000;
}

.not-supported {
  padding: 15px 0;
  color: #FF0000;
}
</style>
