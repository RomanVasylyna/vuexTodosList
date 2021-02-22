
const state = {

todos : [],

};


const getters = {

allTodos(state) {
return state.todos;
}

};


const mutations = {

GET_TODOS(state, todos) {
state.todos = todos;
},

ADD_TODO(state, newTodo) {
state.todos.unshift(newTodo);
},

REMOVE_TODO(state, index) {
state.todos.splice(index, 1);
},

TODO_STATUS(state, id) {
let current = state.todos.find(todo => todo.id === id);    
if(current) {
current.completed = !current.completed;   
}      
}


};

// ${limit}

const actions = {

// Get All Todos By Default
async fetchTodos({ commit }) {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    commit('GET_TODOS', data);
    console.log(data);
},

// Filter Todos depending on the select value
async filterTodos({ commit }, limit) {
    limit = parseInt(event.target[event.target.selectedIndex].innerText);
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
    const data = await response.json();
    commit('GET_TODOS', data);
},

// Remove Single Todo
removeTodo({ commit }, index) {
commit('REMOVE_TODO', index);
},

addTodo({ commit }, newTodo) {
commit('ADD_TODO', newTodo);
},

todoStatus({ commit }, id) {   
commit('TODO_STATUS', id);
}

// Fetch Todos with a promise
// fetchTodos({ commit }) {
// fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
// .then(res => res.json())
// .then(response => {
// commit('GET_TODOS', response)
// })
// .catch(err => console.log(err))
// }

};


export default {
    state,
    getters,
    actions,
    mutations
    }
