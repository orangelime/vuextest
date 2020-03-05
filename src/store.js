import Vue from 'vue';
import Vuex from "vuex";
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    //this state will be shared among these all four components
    todos:[
      {
        title:"todo item a",
        completed:false
      },
      {
        title:"todo item b",
        completed:false
      },
    ]
  },
  getters:{
    completedTodo(state){
      return state.todos.filter(TodoOne => {
        return TodoOne.completed === true;
      }).length;
    },
    pendingTodo(state){
      return state.todos.filter(TodoOne => {
        return TodoOne.completed === false;
      }).length;
    }
  },
  mutations:{
    NEW_TODO(state,todoItem){
      state.todos.push({
        title:todoItem,
        completed:false
      })
    },
    DELETE_TODO(state,todoItem){
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index,1);
    },
    TODO_COMPLETED(state,todoItem){
      todoItem.completed = !todoItem.completed;
    }
  },
  actions:{
    addNewTodo({commit},todoItem){
      commit('NEW_TODO',todoItem);
    },
    deleteTodo({commit},todoItem){
      commit('DELETE_TODO',todoItem)
    },
    todoCompleted({commit},todoItem){
      commit('TODO_COMPLETED',todoItem)
    }
  }
})
