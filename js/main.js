Vue.component('todo-item', {
    template: `
        <li>{{ name }}
        <button @click="$emit('remove')">Done!</button>
        </li>
        `,
    props: ['name']
})

new Vue ({
    el: '.grid-container',
    data: {
        todos: [
            {
                id: 1,
                name: 'Do laundry'
            },
            {
                id: 2,
                name: 'Walk dog'
            }
        ],
        newTodoName: '',
        newTodoId: 3

    },
    methods: {
        addNewTodo() {
            this.todos.push({
                id: this.newTodoId++,
                name: this.newTodoName
            })
            this.newGroceryItem = ''
        }
    }
})