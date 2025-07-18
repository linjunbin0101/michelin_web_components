<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 14:05:55
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-17 18:02:56
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/components/badge.vue
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
            <p>Icon</p>
            <v-badge color="grey" icon="add" />
          </v-col>
          <v-col cols="4">
            <p>number</p>
            <v-badge color="grey" content="6" />
          </v-col>
          <v-col cols="4">
            <p>Dot</p>
            <v-badge color="grey" dot />
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <v-expansion-panel value="color">
      <template #title>
        <h2>Colors</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="2">
            <p>Primary(blue)</p>
            <v-badge color="blue" dot />
          </v-col>
          <v-col cols="2">
            <p>Green</p>
            <v-badge color="green" dot />
          </v-col>
          <v-col cols="2">
            <p>Red</p>
            <v-badge color="red" dot />
          </v-col>
          <v-col cols="2">
            <p>Yellow</p>
            <v-badge color="yellow" dot />
          </v-col>
          <v-col cols="2">
            <p>Grey</p>
            <v-badge color="grey" dot />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <p>Primary(blue)</p>
            <v-badge color="blue" icon="add" />
          </v-col>
          <v-col cols="2">
            <p>Green</p>
            <v-badge color="green" icon="add" />
          </v-col>
          <v-col cols="2">
            <p>Red</p>
            <v-badge color="red" icon="add" />
          </v-col>
          <v-col cols="2">
            <p>Yellow</p>
            <v-badge color="yellow" icon="add" />
          </v-col>
          <v-col cols="2">
            <p>Grey</p>
            <v-badge color="grey" icon="add" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <p>Primary(blue)</p>
            <v-badge color="blue" content="14" />
          </v-col>
          <v-col cols="2">
            <p>Green</p>
            <v-badge color="green" content="14" />
          </v-col>
          <v-col cols="2">
            <p>Red</p>
            <v-badge color="red" content="14" />
          </v-col>
          <v-col cols="2">
            <p>Yellow</p>
            <v-badge color="yellow" content="14" />
          </v-col>
          <v-col cols="2">
            <p>Grey</p>
            <v-badge color="grey" content="14" />
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <v-expansion-panel value="size">
      <template #title>
        <h2>Size</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="3">
            <p>0</p>
            <v-badge color="grey" content="0" />
          </v-col>
          <v-col cols="3">
            <p>99</p>
            <v-badge color="grey" content="99" />
          </v-col>
          <v-col cols="3">
            <p>>99</p>
            <v-badge color="grey" content="999" max="99" />
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel>

    <!-- <v-expansion-panel value="usage">
      <template #title>
        <h2>Usage</h2>
      </template>
      <template #text>
        <v-row>
          <v-col cols="3">
            <p>Badge + Button</p>
            <v-btn stacked>
              <v-badge color="error" content="2">
                <v-icon>mdi-bell-outline</v-icon>
              </v-badge>
            </v-btn>
          </v-col>
          <v-col cols="3">
            <p>Badge + Button + Text</p>
            <v-btn stacked>
              <v-badge color="error" dot>
                <v-icon icon="mdi-newspaper-variant-outline" />
              </v-badge>
              News
            </v-btn>
          </v-col>
          <v-col cols="3">
            <p>Badge + Button + Text + Number</p>
            <v-btn stacked>
              <v-badge color="error" content="2">
                <v-icon icon="mdi-newspaper-variant-outline" />
              </v-badge>
              News
            </v-btn>
          </v-col>
        </v-row>
      </template>
    </v-expansion-panel> -->
  </v-expansion-panels>
</template>

<script setup>
  import { ref } from 'vue'
  const isShow = ref(['type', 'color', 'size', 'usage'])
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
