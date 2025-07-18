<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2025-03-19 10:56:30
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-04-18 16:22:34
 * @FilePath     : /hc_web_component/packages/vuetify/dev/pages/home.vue
 * @Description  :
-->
<template>
  <v-app>
    <v-navigation-drawer permanent>
      <v-card style="height: 100%">
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <h3>Vuetify</h3>
            </v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list :items="items" item-title="name" item-value="id"
          style="overflow-y: auto;height: 100%;padding-bottom: 100px" @click:select="select">
          <template #prepend="{ item }">
            <v-icon :color="item.color" :icon="item.icon" fill />
          </template>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar :title="name" />
    <v-main>
      <v-container style="width: 100%;height: 100%; margin: 0;">
        <component :is="list[key]" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { computed, ref } from 'vue'
import EmptyState from './components/empty-state.vue'
import Alert from './components/alert.vue'
import Snackbar from './components/snackbar.vue'
import Radio from './components/radio.vue'
import AutoComplete from './components/autocomplete.vue'
import Chip from './components/chip.vue'
import ExpansionPanels from './components/expansion-panels.vue'
import Button from './components/button.vue'
import Badge from './components/badge.vue'
import Divider from './components/divider.vue'
import Tooltips from './components/tooltips.vue'
import Textareas from './components/textareas.vue'
import Tabs from './components/tabs.vue'
import Icons from './components/icons.vue'
import Checkbox from './components/checkbox.vue'
import Select from './components/select.vue'
import Switch from './components/switch.vue'
import TextFields from './components/text-fields.vue'
import TextFieldsShow from './components/text-fields-show.vue'
import Pagination from './components/pagination.vue'
import Menu from './components/menu.vue'
import DateInput from './components/date-input.vue'
import HcTable from './components/hc-table.vue'
import HcFilter from './components/hc-filter.vue'
import HcTableBar from './components/hc-table-bar.vue'
import Translation from './components/translation.vue'

const items = ref([
  { name: 'EmptyState (空状态)', id: 'EmptyState', icon: 'circle', color: 'blue' },
  // { name: 'TextFieldsDisplay (文本显示)', id: 'TextFieldsShow', icon: 'circle', color: 'green' },
  { name: 'Alert (警告框)', id: 'Alert', icon: 'circle', color: 'green' },
  { name: 'Snackbar (消息条)', id: 'Snackbar', icon: 'circle', color: 'green' },
  { name: 'Radio (单选按钮)', id: 'Radio', icon: 'circle', color: 'green' },
  { name: 'AutoComplete (自动补全)', id: 'AutoComplete', icon: 'circle', color: '#b80b0b' },
  { name: 'Icons (图标)', id: 'Icons', icon: 'circle', color: 'green' },
  { name: 'Chip (纸片)', id: 'Chip', icon: 'circle', color: 'green' },
  { name: 'ExpansionPanels (扩展面板)', id: 'ExpansionPanels', icon: 'circle', color: 'green' },
  { name: 'Button (按钮)', id: 'Button', icon: 'circle', color: 'green' },
  { name: 'Badge (徽章)', id: 'Badge', icon: 'circle', color: 'green' },
  { name: 'Divider (分隔线)', id: 'Divider', icon: 'circle', color: 'green' },
  { name: 'Tooltips (提示)', id: 'Tooltips', icon: 'circle', color: 'green' },
  { name: 'Textareas (多行文本框)', id: 'Textareas', icon: 'circle', color: '#b80b0b' },
  { name: 'Tabs (选项卡)', id: 'Tabs', icon: 'circle', color: '#b80b0b' },
  { name: 'Checkboxs (复选框)', id: 'Checkbox', icon: 'circle', color: 'green' },
  { name: 'Selects (下拉选择框)', id: 'Select', icon: 'circle', color: '#b80b0b' },
  { name: 'Switch (开关)', id: 'Switch', icon: 'circle', color: 'green' },
  { name: 'TextFields (单行文本框)', id: 'TextFields', icon: 'circle', color: '#b80b0b' },
  { name: 'Pagination (分页)', id: 'Pagination', icon: 'circle', color: '#615ced' },
  { name: 'Menu (菜单)', id: 'Menu', icon: 'circle', color: '#615ced' },
  { name: 'DateInput (日期选择)', id: 'DateInput', icon: 'circle', color: 'green' },
  { name: 'HcTable (统计)', id: 'HcTable', icon: 'circle', color: '#615ced' },
  { name: 'HcFilter (筛选)', id: 'HcFilter', icon: 'circle', color: '#615ced' },
  { name: 'HcTableBar (表格工具栏)', id: 'HcTableBar', icon: 'circle', color: '#615ced' },
  { name: 'Translation (翻译)', id: 'Translation', icon: 'circle', color: '#615ced' },
])

const list = {
  EmptyState,
  Alert,
  Snackbar,
  Radio,
  Chip,
  ExpansionPanels,
  AutoComplete,
  Button,
  Badge,
  Divider,
  Tooltips,
  Textareas,
  Tabs,
  Icons,
  Checkbox,
  Select,
  Switch,
  TextFields,
  TextFieldsShow,
  Pagination,
  Menu,
  DateInput,
  HcTable,
  HcFilter,
  HcTableBar,
  Translation,
}
const savedId = localStorage.getItem('selectedId')
const key = ref(savedId || 'AutoComplete')

const select = ({ id }) => {
  key.value = id
  localStorage.setItem('selectedId', id)
}
const name = computed(() => {
  return items.value.find(item => item.id === key.value).name
})

</script>

<style scoped lang="less"></style>
