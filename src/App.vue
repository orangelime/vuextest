<template>
  <div id="app">
    <h1>TodoList</h1>
    <h3>Completed:{{completedTodo}}</h3>
    <h3>Pending:{{pendingTodo}}</h3>
    <todo-list/>
    <todo-two/>
  </div>
</template>

<script>
import TodoList from './components/TodoList'
import TodoTwo from './components/TodoTwo'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    TodoList,
    TodoTwo
  },
  computed:{
    /*completedTodo(){
      return this.$store.getters.completedTodo;
    },
    pendingTodo(){
      return this.$store.getters.pendingTodo;
    },*/
    ...mapGetters({
      completedTodo:'completedTodo',
      pendingTodo:'pendingTodo'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
