<template>

 <div class="todos">
  
   <div class="todo"
   :class="{ 'completed': todo.completed }"
   v-for="(todo, index) in allTodos"
   @click="changeStatus(todo.id)"
   :key="todo.id">

    {{ todo.title }}

    <!-- Font-Awesome Icon -->
    <i class="fas fa-trash-alt" @click="deleteTodo(index)"></i>

    </div>


</div>
</template>

<script>
// Importing Vuex
import { mapActions, mapGetters } from 'vuex'

export default {
name: 'Todos',

// Getting All Todos from store
computed: mapGetters(["allTodos"]),

methods: {

...mapActions(["fetchTodos", "removeTodo"]),

deleteTodo(index) {
this.$store.dispatch('removeTodo', index);
},

changeStatus(id) {
// let current = this.allTodos.find(todo => todo.id === id);  
// current.completed = true; 
this.$store.dispatch('todoStatus', id);
// console.log(current);
}


},

created() {
this.$store.dispatch('fetchTodos');
},

}
</script>

<style>

.todos{
display: flex;
align-items: center;
justify-content: center;
text-align: center;
margin: 30px auto;
width: 60vw;
/* background: gold; */
flex-wrap: wrap;
}

.todo{
display: flex;
flex-direction: column;
background: rgb(11, 175, 134);
border-radius: 5px;
padding: 20px 10px;
margin: 7px;
flex-grow: 1;
width:15vw;
height: 12.5vh;
word-wrap: break-word;
cursor: pointer;
}

/* .todo:hover{
background: rgb(37, 37, 37);
color: #fff;
cursor: pointer;
} */

.fas{
position: absolute;
margin: 6vh 8.3vw;
}

.completed{
background: rgb(37, 37, 37);
color: #fff;
}


</style>
