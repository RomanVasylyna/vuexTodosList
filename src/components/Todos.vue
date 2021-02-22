<template>

 <div class="todos">
  
   <div class="todo"
   :class="{ 'completed': todo.completed }"
   v-for="(todo, index) in allTodos"
   @click="changeStatus(todo.id)"
   :key="todo.id">

    {{ todo.title }}

    <!-- Font-Awesome Icon -->
    <i class="fas fa-trash-alt" @click.stop="deleteTodo(index)"></i>

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
flex-wrap: wrap;
}

.todo{
display: flex;
flex-direction: column;
justify-content: space-between;
background: rgb(11, 175, 134);
border-radius: 5px;
padding: 20px 10px;
margin: 7px;
flex-grow: 1;
width:15vw;
height: 19vh;
word-wrap: break-word;
cursor: pointer;
}

.fas{
margin: 5vh 8vw;
}

.completed{
background: rgb(37, 37, 37);
color: #fff;
}

/* Phones */
@media (max-width: 690px) {

.todo{
font-size: 14px;
padding: 20px 10px;
width:30vw;
}  

.fas{
margin: 3vh 8vw;
}

}

/* Ipad and other tablets*/
@media only screen and (max-width: 800px) and (min-width: 700px) {

.todo{
font-size: 17px;
padding: 20px 10px;
height: 17vh;
width:25vw;
}  

.fas{
margin: 5vh 0;
}

}  

/* Ipad Pro */
@media only screen and (max-width: 1100px) and (min-width: 1000px) {


.todo{
font-size: 1.2rem;
padding: 20px 10px;
height: 14vh;
width:18vw;
}  

.fas{
margin: 4vh 0;
} 
}  


</style>
