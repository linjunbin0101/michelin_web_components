<template>
  <v-row>
    <v-col cols="6">
      <v-alert
        text="Lorem ipsum dolor sit amet, consectetur adi"
        type="success"
        variant="tonal"
        closable
      />
    </v-col>
    <v-col cols="6">
      <v-alert
        title="I’m an alert"
        type="warning"
        variant="tonal"
        closable
      />
    </v-col>
  </v-row>
  <v-row style="margin-top: 15px">
    <v-col cols="6">
      <v-alert
        text="Lorem ipsum dolor sit amet, consectetur adi"
        title="I’m an alert"
        type="info"
        variant="tonal"
      />
    </v-col>
    <v-col cols="6">
      <v-alert
        text="Lorem ipsum dolor sit amet, consectetur adi"
        title="I’m an alert"
        type="error"
        variant="tonal"
        closable
      />
    </v-col>
  </v-row>
  <div style="margin-top: 50px;">
    <h3>Style that cannot be modified</h3>
    <p>1.The icon icon automatically displays the corresponding status icon based on its type. The icon used by the component does not match the prototype and cannot be changed</p>
    <h3>无法修改的样式</h3>
    <p>1.icon图标根据类型自动显示对应状态图标，组件使用的icon和原型不匹配，无法更改</p>
  </div>

</template>

<script setup>

</script>

<style scoped lang="less">

</style>
