<markdown>
# 级联选择

设定 `cascade` 进行级联选择。
</markdown>

<script lang="ts" setup>
import type { TreeOption } from 'naive-ui'
import { repeat } from 'seemly'
import { ref } from 'vue'

function createData(level = 4, baseKey = ''): TreeOption[] | undefined {
  if (!level)
    return undefined
  return repeat(6 - level, undefined).map((_, index) => {
    const key = `${baseKey}${level}${index}`
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key)
    }
  })
}

function createLabel(level: number): string {
  if (level === 4)
    return '道生一'
  if (level === 3)
    return '一生二'
  if (level === 2)
    return '二生三'
  if (level === 1)
    return '三生万物'
  return ''
}

const data = createData()
const defaultExpandedKeys = ref(['40', '4030', '403020'])
const defaultCheckedKeys = ref(['40302010'])

function updateCheckedKeys(
  keys: Array<string | number>,
  options: Array<TreeOption | null>,
  meta: {
    node: TreeOption | null
    action: 'check' | 'uncheck'
  }
) {
  console.log('updateCheckedKeys', keys, options, meta)
}
</script>

<template>
  <n-tree
    block-line
    cascade
    checkable
    :selectable="false"
    :data="data"
    :default-expanded-keys="defaultExpandedKeys"
    :default-checked-keys="defaultCheckedKeys"
    @update:checked-keys="updateCheckedKeys"
  />
</template>
