import Vue from 'vue'
import Vuex from 'vuex'
import VueCompositionAPI, { reactive, toRefs } from '@vue/composition-api'
import { createDirectStore } from 'direct-vuex'

Vue.use(VueCompositionAPI)
Vue.use(Vuex)

export type TodoItem = {
  id: number
  text: string
  isComplete: boolean
}

const initialState = {
  todoList: [] as TodoItem[],
}

type State = typeof initialState

const { store, rootActionContext, moduleActionContext } = createDirectStore({
  state: toRefs(reactive(initialState)),
  getters: {
    allTodoList: state => state.todoList.value,
  },
  mutations: {
    updateTodoList(state, payload: TodoItem[]) {
      state.todoList.value = payload
    },
  },
  actions: {
    addTodoItem({ state, commit }, payload: TodoItem) {
      const todoList = [...state.todoList.value, payload] as TodoItem[]

      commit('updateTodoList', todoList)
    },
    editTodoItem({ state, commit }, payload: TodoItem) {
      const todoList = state.todoList.value as TodoItem[]
      const editedTodoList = todoList.map(item =>
        item.id === payload.id ? payload : item
      )

      commit('updateTodoList', editedTodoList)
    },
    removeTodoItem({ state, commit }, id: number) {
      const todoList = state.todoList.value as TodoItem[]
      const removedTodoList = todoList.filter(item => item.id !== id)

      commit('updateTodoList', removedTodoList)
    },
  },
})

export default store

export { rootActionContext, moduleActionContext }

export type AppStore = typeof store

declare module 'vuex' {
  interface Store<S> {
    direct: AppStore
  }
}
