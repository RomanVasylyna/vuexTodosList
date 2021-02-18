<template>
  <div id="app">
  <div class="container">  
   <AddTodo/>
   <FilterTodos/>
   <Todos/>
  </div>  
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'

export default {
  name: 'App',
  components: {
  Todos,
  AddTodo,
  FilterTodos  
  }
}
</script>

<style>

*{
box-sizing: border-box;
margin: 0;
padding: 0;
}

body{
background: rgb(226, 255, 243);    
}

.container{
text-align: center; 
margin: 30px auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
