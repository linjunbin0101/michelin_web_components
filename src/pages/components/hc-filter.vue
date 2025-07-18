<template>
    <div>
        <HcFilter>
            <template #filter-input>
                <div>
                    <v-text-field label="111" v-model="a"></v-text-field>
                </div>
                <div>
                    <v-text-field label="111" v-model="a"></v-text-field>
                </div>
                <div>
                    <v-text-field label="111" v-model="a"></v-text-field>
                </div>
            </template>
        </HcFilter>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    const a = ref('111')
  </script>
  
  <style scoped lang="scss">
  </style>
  