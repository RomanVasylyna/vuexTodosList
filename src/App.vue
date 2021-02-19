<template>
  <div id="app">
  <div class="container">
   <AddTodo/>
   <FilterTodos/>
   <h3>All Todos</h3>
   <legend>
     <p>Click to Mark Completed</p>

     <div class="wrapper">
     <div class="green"></div> 
     <p>=Incomplete</p>
     </div>
     
     <div class="wrapper">
     <div class="black"></div>
     <p>=Complete</p>
     </div>
   </legend>
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

legend{
display: flex;  
justify-content: space-around;
align-items: center;
width: 30vw;
margin: 20px auto;
}

legend .green{
background: rgb(11, 175, 134);
height: 12px;
width: 12px;
}

legend .black{
background: rgb(37, 37, 37);
height: 10px;
width: 10px;
}

legend .wrapper{
display: flex;  
justify-content: center;
align-items: center;
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
