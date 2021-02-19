<template>
  <div>
      <h2>Add Todo</h2>

      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Add Todo..." v-model="title">
        <button type="submit">Submit</button>
      </form>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
name: 'AddTodo',

data() {
return {
title: ''
}
},

computed: mapGetters(["allTodos"]),

methods: {

...mapActions(["addTodo"]),

addTodo() {

// Creating a new todo object  
const newTodo = {
completed: false,
id: this.allTodos.length + 1,
title : this.title
};

this.$store.dispatch('addTodo', newTodo);
this.title = '';
},

}

}
</script>

<style>

form{
margin-top: 20px;
}

input[type="text"]{
width: 45vw;
height: 5.1vh;
padding: 0px 5px;
border: 1px solid #ccc;
outline: none;
}

button[type="submit"]{
height: 5.1vh;
width: 15vw;
background: rgb(11, 175, 134);
color: #fff;
border: none;
outline: none;
cursor: pointer;
}

button[type="submit"]:hover{
background: rgb(37, 37, 37);
color: #fff;
}

</style>
