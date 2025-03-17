<markdown>
# 基础用法
</markdown>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <div>
    <NSearch v-model:show="show" />
    <NButton @click="show = true">
      点击打开
    </NButton>
  </div>
</template>
