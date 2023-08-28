<script setup>

import Table from '../../molecules/Table/Table.vue';
import Counter from '../../atoms/Counter/Counter.vue';
import { ref } from 'vue';

const { todos, actualToDo, endedToDo, check } = defineProps({
    todos: Array,
    actualToDo: Number,
    endedToDo: Number,
    check: Boolean
})

const emitter = defineEmits(['eventDelete', 'eventHandler'])
const deleteHandler = () => {
    emitter('eventDelete', idDeletedTodo)
}

const eventHandler = (id) => {
    emitter('eventHandler', id)
    console.log('id 2 - ', id)
}

</script>

<template>
    <div :class="'flex flex-col justify-between gap-3'">
        <div :class="'flex justify-between'">
            <Counter :text="'Tarefas criadas'" :size="'small'" :actualToDo="actualToDo" />
            <Counter :text="'Concluídas'" :size="'default'" :actualToDo="actualToDo" :endedToDo="endedToDo" />
        </div>
        <div v-for="(todo, index) in todos" class="flex flex-col gap-3">
            <Table :key="index" 
                   :text="todo.text" 
                   :idTodo="todo.id"
                   :check="todo.check" 
                   :source1="'/images/layer1.svg'"
                   :source2="'/images/layer2.svg'"
                   :checked="todo.check" 
                    @deleteTodo="eventHandler" />
        </div>
    </div>
</template>
