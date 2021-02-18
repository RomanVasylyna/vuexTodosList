<template>

 <div class="todos">

   <div class="todo" 
   v-for="todo in allTodos" 
   :key="todo.id">

    {{ todo.title }}

    <!-- Font-Awesome Icon -->
    <i class="fas fa-trash-alt"></i>

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

...mapActions(["fetchTodos"]),


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
background: gold;
}

.todo{
background: rgb(11, 175, 134);
border-radius: 5px;    
padding: 30px 40px;
margin: 10px;
}

.todo:hover{
background: rgb(37, 37, 37);
color: #fff;
cursor: pointer;
}

.fas{
margin-left: 20px;
}

</style>
