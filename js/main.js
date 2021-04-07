// Disabling previous date in datepicker
let today = new Date().toISOString().split('T')[0];
document.querySelector('#new-todo-date').setAttribute('min', today)


Vue.component('todo-item', {
    template: `
        <li>
        <button v-if="!complete" @click="$emit('completed')">✔️</button>
        <button v-if="complete" @click="$emit('remove')">🗑️</button>
         {{ date }} - {{ name }}
        </li>
        `,
    props: ['name', 'date', 'complete']
})

new Vue ({
    el: '.grid-container',
    data: {
        todos: [
            {
                id: 1,
                name: 'Do laundry',
                date: '2021-07-14',
                complete: false
            },
            {
                id: 2,
                name: 'Walk dog',
                date: '2021-04-10',
                complete: false
            }
        ],
        newTodoName: null,
        newTodoDate: null,
        newTodoId: 3

    },
    methods: {
        addNewTodo() {
            if(!this.newTodoName || !this.newTodoDate) {
                return;
            }
            this.todos.push({
                id: this.newTodoId++,
                name: this.newTodoName,
                date: this.newTodoDate,
                complete: false
            })
            this.newTodoName = ''
            this.newTodoDate = ''
        }
    }
})