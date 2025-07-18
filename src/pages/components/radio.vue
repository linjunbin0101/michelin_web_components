<template>
  <v-row style="margin: 50px 0">
    <v-col>
      <v-radio-group :disabled="disabled" :inline="orientation">
        <v-radio label="Radio One" value="one" />
        <v-radio label="Radio Two" value="two" />
        <v-radio label="Radio Three" value="three" />
      </v-radio-group>
    </v-col>
    <v-col>
      <h3>Orientation</h3>
      <v-row>
        <v-col>
          <v-btn @click="orientation = true">Horizontal</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="orientation = false">Vertical</v-btn>
        </v-col>
      </v-row>
      <h3 style="margin-top: 50px">Disabled</h3>
      <v-row>
        <v-col>
          <v-btn @click="disabled = true">Disabled</v-btn>
        </v-col>
        <v-col>
          <v-btn @click="disabled = false">Abled</v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue'
const orientation = ref(true)
const disabled = ref(false)

</script>

<style scoped lang="less"></style>
