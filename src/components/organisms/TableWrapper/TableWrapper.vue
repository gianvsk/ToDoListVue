<script setup>

import Table from '../../molecules/Table/Table.vue';
import Counter from '../../atoms/Counter/Counter.vue';

const { todos, actualToDo, endedToDo } = defineProps({
    todos: Array,
    actualToDo: Number,
    endedToDo: Number
})

const emitter = defineEmits(['sendTodoId', 'checkTodo'])

const getId = (id) => {
    emitter('sendTodoId', id)
}

const getCheck = (id) => {
    emitter('checkTodo', id)
}

</script>

<template>
    <div class='flex flex-col justify-between gap-3'>
        <div class='flex justify-between'>
            <Counter text='Tarefas criadas' size='small' :actualToDo="actualToDo" />
            <Counter text='Concluídas' size='default' :actualToDo="actualToDo" :endedToDo="endedToDo" />
        </div>
        <div v-for="todo in todos" class="flex flex-col gap-3">
            <Table :key="todo.id" 
                   :text="todo.text" 
                   :idTodo="todo.id"
                   :source1="'/images/layer1.svg'"
                   :source2="'/images/layer2.svg'"
                   :checked="todo.check" 
                    @delete-todo="getId"
                    @check-todo="getCheck" />
        </div>
    </div>
</template>
