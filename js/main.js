// Disabling previous date in datepicker
let todayDatepicker = new Date().toISOString().split('T')[0];
document.querySelector('#new-todo-date').setAttribute('min', todayDatepicker)


Vue.component('todo-item-today', {
    template: `
      <li v-if="today">
      <button v-if="!complete" @click="$emit('completed')">✔️</button>
      <button v-if="complete" @click="$emit('remove')">🗑️</button>
      {{ date }} - {{ name }}
      <button v-if="complete" @click="$emit('undo')">undo</button>
      </li>
    `,
    props: ['name', 'date', 'complete', 'today']
})

Vue.component('todo-item-later', {
    template: `
      <li v-if="!today">
      <button v-if="!complete" @click="$emit('completed')">✔️</button>
      <button v-if="complete" @click="$emit('remove')">🗑️</button>
      {{ date }} - {{ name }}
      <button v-if="complete" @click="$emit('undo')">undo</button>
      </li>
    `,
    props: ['name', 'date', 'complete', 'today']
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
                    textDecoration: 'none',
                    color: 'black'
                }
            },
            {
                id: 2,
                name: 'Do laundry',
                date: '2021-07-18',
                today: false,
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
                today: this.isItToday(this.newTodoDate),
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
            this.todos.sort((a,b) => new Date(a.date) - new Date(b.date));
        },
        isItToday(date) {
            let today = new Date().toISOString().split('T')[0];
            return date === today;
        }
    }
})