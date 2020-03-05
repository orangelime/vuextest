<template>
  <div>
    <TodoOne v-for="(TodoOne,index) in todos" :key="index" :TodoOne="TodoOne"/>
  </div>
</template>
<script>
import TodoOne from './TodoOne'
import {mapState} from 'vuex'
export default {
  components:{
    TodoOne
  },
  computed:{
    /*todos(){
      return this.$store.state.todos;
    }*/
    ...mapState({
      todos:'todos'
    })
  }
}
</script>
<style>

</style>
