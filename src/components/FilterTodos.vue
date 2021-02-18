<template>
  <div class="filter-todos">
      
      <h3>Filter Todos</h3>

      <select>
          <option value="200">200</option>
      </select>
      
  </div>
</template>

<script>
export default {
name: 'FilterTodos'
}
</script>

<style>
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

</style>
