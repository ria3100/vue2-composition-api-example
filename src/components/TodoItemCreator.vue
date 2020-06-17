<template>
  <div>
    <input type="text" v-model="newItem.text" />
    <button @click="addItem()">Add</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

import store from '@/store'

export default defineComponent({
  setup() {
    const newItem = reactive({ index: 0, text: '' })

    const addItem = () => {
      newItem.index += 1

      store.dispatch.addTodoItem({
        id: newItem.index,
        text: newItem.text,
        isComplete: false,
      })

      newItem.text = ''
    }

    return {
      newItem,
      addItem,
    }
  },
})
</script>
