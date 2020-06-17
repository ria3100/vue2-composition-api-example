<template>
  <div>
    <TodoItemCreator />

    <TodoItem
      v-for="todoItem in todoList"
      :item="todoItem"
      :key="todoItem.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

import store from '@/store'

import TodoItemCreator from '@/components/TodoItemCreator.vue'
import TodoItem from '@/components/TodoItem.vue'

export default defineComponent({
  setup() {
    const todoList = computed(() => store.getters.allTodoList)

    return {
      todoList,
    }
  },
  components: {
    TodoItemCreator,
    TodoItem,
  },
})
</script>
