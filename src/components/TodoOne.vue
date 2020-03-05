<template>
  <div>
    <span :class="{completed:TodoOne.completed}" @click="todoCompleted(TodoOne)">{{TodoOne.title}}</span>
    <button @click="removeTodo(TodoOne)">Delete</button>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  props:["TodoOne"],
  methods:{
    /*deleteTodo(){
      this.$store.dispatch('deleteTodo',this.TodoOne)
    },
    todoCompleted(){
      this.$store.dispatch('todoCompleted',this.TodoOne)
    },*/
    ...mapActions({
      removeTodo:'deleteTodo',/*冒號前可自由更改其他名稱*/
      todoCompleted:'todoCompleted'
    })
  }
}
</script>

<style scoped>
.completed{
  text-decoration: line-through
}

</style>
