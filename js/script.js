new Vue({
    el: '#app',
    data: {
        todos: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
        ],
        newTodo: '',
    },
    methods: {
        addTodo () {
            if (this.newTodo.trim()) {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            } 
            // il trim fa si che non puoi aggiungere gli spazi e toglie gli spazi prima e dopo le parole
        },

        deleteTodo(index) {
            this.todos.splice(index, 1);
        },
    }
});