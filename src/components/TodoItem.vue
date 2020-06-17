<template>
  <div>
    <input type="text" v-model="todoItem.text" @change="editItemText()" />
    <input
      type="checkbox"
      v-model="item.isComplete"
      @change="toggleItemCompletion()"
    />
    <button @click="deleteItem()">X</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

import store, { TodoItem } from '@/store'

export default defineComponent({
  props: {
    item: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: (Object as any) as () => TodoItem,
      required: true,
    },
  },
  setup(props) {
    const todoItem = reactive({ ...props.item })

    const editItemText = () => {
      store.dispatch.editTodoItem(todoItem)
    }

    const toggleItemCompletion = () => {
      store.dispatch.editTodoItem(todoItem)
    }

    const deleteItem = () => {
      store.dispatch.removeTodoItem(todoItem.id)
    }

    return {
      todoItem,
      editItemText,
      toggleItemCompletion,
      deleteItem,
    }
  },
})
</script>
