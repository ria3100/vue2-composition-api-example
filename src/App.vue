<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueCompositionAPI, { defineComponent } from '@vue/composition-api'

import TodoList from './components/TodoList.vue'

Vue.use(VueCompositionAPI)

export default defineComponent({
  components: {
    TodoList,
  },
})
</script>
