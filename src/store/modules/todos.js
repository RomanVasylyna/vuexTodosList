
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


};

// ${limit}

const actions = {

fetchTodos({ commit }) {

fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')

.then(res => res.json())

.then(response => {
commit('GET_TODOS', response)    
})

.catch(err => console.log(err))

}    
};


export default {
    state,
    getters,
    actions,
    mutations
    }
