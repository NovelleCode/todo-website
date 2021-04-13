// Disabling previous date in datepicker
let todayDatepicker = new Date().toISOString().split('T')[0];
document.querySelector('#new-todo-date').setAttribute('min', todayDatepicker)


Vue.component('todo-item', {
    template: `
      <li>
      <button v-if="!complete" @click="$emit('completed')">✔️</button>
      <button v-if="complete" @click="$emit('remove')">🗑️</button>
      {{ title }}
      <button v-if="complete" @click="$emit('undo')">undo</button>
      </li>
    `,
    props: ['title', 'complete', 'today']
})

new Vue({
    el: '.grid-container',
    data: {
        todos: [
            {
                id: 1,
                name: 'Hand in labb2',
                date: new Date().toISOString().split('T')[0],
                today: true,
                complete: false,
                styling: {
                    textDecoration: 'none'
                }
            },
            {
                id: 2,
                name: 'Do laundry',
                date: '2021-07-18',
                today: false,
                complete: false,
                styling: {
                    textDecoration: 'none'
                }
            }
        ],
        newTodoName: null,
        newTodoDate: null,
        newTodoId: 3,
        name: 'Karen',
        newName: '',
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
                today: this.isItToday(this.newTodoDate),
                complete: false,
                styling: {
                    textDecoration: 'none'
                }
            })
            this.newTodoName = ''
            this.newTodoDate = ''
        },
        sortByDate() {
            this.todos.sort((a,b) => new Date(a.date) - new Date(b.date));
        },
        isItToday(date) {
            let today = new Date().toISOString().split('T')[0];
            return date === today;
        },
        addNewName() {
            if(!this.newName) {
                return;
            }
            this.name = this.newName;
        },
    }
})