<template>
  <div class="filter-todos">

      <h3>Filter Todos</h3>

      <select @change="filterTodos($event)">
          <option value="200">200</option>
          <option value="100">100</option>
          <option value="50">50</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>
      </select>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
name: 'FilterTodos',

methods: {

...mapActions(["filterTodos"]),

// Getting number of todos depending on the option value
filterTodos(event) {
this.$store.dispatch("filterTodos", event);
}

},


}
</script>

<style>

/* All Screen Sizes */
.filter-todos{
margin: 30px 0;
}

.filter-todos select{
margin: 7px 0;
width: 10vw;
height: 3vh;
position: relative;
right: 25vw
}

.filter-todos h3{
position: relative;
right: 25vw
}

/* Phones */
@media (max-width: 690px) {

.filter-todos h3{
position: relative;
right: 0;
}

.filter-todos select{
margin: 7px 0;
width: 20vw;
height: 5vh;
position: relative;
right: 0;
}

}  

/* Ipad and other tablets*/
@media only screen and (max-width: 800px) and (min-width: 700px) {

.filter-todos h3{
position: relative;
right: 0;
}

.filter-todos select{
margin: 7px 0;
width: 20vw;
height: 4vh;
position: relative;
right: 0;
}

} 

/* Ipad Pro */
@media only screen and (max-width: 1100px) and (min-width: 1000px) {

.filter-todos h3{
position: relative;
right: 0;
}

.filter-todos select{
margin: 7px 0;
width: 20vw;
height: 3vh;
position: relative;
right: 0;
}

}

</style>
