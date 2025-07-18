<template>
    <v-app-bar>
        <div>$t('title') {{ $t('title') }}</div>
        <v-spacer></v-spacer>
        <div>$t('$vuetify.dataFooter.itemsPerPageText')：{{ $t('$vuetify.dataFooter.itemsPerPageText') }}</div>
        <v-spacer></v-spacer>
        <v-select v-model="$i18n.locale" :items="locales" item-title="text" item-value="value" density="compact"
            style="max-width: 160px"></v-select>
    </v-app-bar>

    <!-- vuetify -->
    vuetify:
    <v-data-table :items="items" :headers="headers"></v-data-table>

    <!-- hc-component -->
    hc-component:
    <hc-checkbox-group :options="checkBoxs" v-model="selectedCheckBoxs" :all-label="$t('all')" :inline="false">
    </hc-checkbox-group>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const items = ref([
    {
        name: 'African Elephant',
        species: 'Loxodonta africana',
        diet: 'Herbivore',
        habitat: 'Savanna, Forests',
    },
]);

const headers = computed(() => [
    { title: t('name'), key: 'name' },
    { title: t('species'), key: 'species' },
    { title: t('diet'), key: 'diet' },
    { title: t('habitat'), key: 'habitat' },
]);

// 非模板绑定需要使用computed侦听语言切换
const checkBoxs = computed(() => [
    { label: t('checkboxLabel'), value: 'CheckboxLabel1' },
    { label: t('checkboxLabel'), value: 'CheckboxLabel2' },
    { label: t('checkboxLabel'), value: 'CheckboxLabel3' },
]);

const selectedCheckBoxs = ref(['CheckboxLabel1']);

// 可选语言列表
const locales = ref([
    { text: 'English', value: 'en' },
    { text: '简体中文', value: 'zhHans' },
]);
</script>