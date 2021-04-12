// Disabling previous date in datepicker
let today = new Date().toISOString().split('T')[0];
document.querySelector('#new-todo-date').setAttribute('min', today)


Vue.component('todo-item', {
    template: `
      <li>
      <button v-if="!complete" @click="$emit('completed')">✔️</button>
      <button v-if="complete" @click="$emit('remove')">🗑️</button>
      {{ date }} - {{ name }}
      <button v-if="complete" @click="$emit('undo')">undo</button>
      </li>
    `,
    props: ['name', 'date', 'complete']
})

new Vue({
    el: '.grid-container',
    data: {
        todos: [
            {
                id: 1,
                name: 'Do laundry',
                date: '2021-04-20',
                complete: false,
                styling: {
                    textDecoration: 'none',
                    color: 'black'
                }
            },
            {
                id: 2,
                name: 'Walk dog',
                date: '2021-07-10',
                complete: false,
                styling: {
                    textDecoration: 'none',
                    color: 'black'
                }
            }
        ],
        newTodoName: null,
        newTodoDate: null,
        newTodoId: 3
    },
    methods: {
        addNewTodo() {
            if (!this.newTodoName || !this.newTodoDate) {
                return;
            }
            this.todos.push({
                id: this.newTodoId++,
                name: this.newTodoName,
                date: this.newTodoDate,
                complete: false,
                styling: {
                    textDecoration: 'none',
                    color: 'black'
                }
            })
            this.newTodoName = ''
            this.newTodoDate = ''
        },
        sortByDate() {
            this.todos.sort(function(a,b) {
                return new Date(a.date) - new Date(b.date);
            });
        }
    }
})