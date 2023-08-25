<script setup>
import Table from '../../molecules/Table/Table.vue';
import Counter from '../../atoms/Counter/Counter.vue';
import { ref } from 'vue';

const actualToDo = ref(5)
const endedToDo = ref(2)

const todos = [
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
]

</script>

<template>
    <div :class="'flex flex-col justify-between gap-3'">
        <div :class="'flex justify-between'">
            <Counter :text="'Tarefas criadas'" :size="'small'" :todo="{ actualToDo: actualToDo }" />
            <Counter :text="'Concluídas'" :size="'default'" :todo="{ actualToDo: actualToDo, endedToDo: endedToDo }" />
        </div>
        <div v-for="(todo, index) in todos" class="flex flex-col gap-3">
            <Table 
                :text="todo"
                :source1="'/images/layer1.svg'" :source2="'/images/layer2.svg'" 
                :checked="index > 2 ? true : false"/>
        </div>
</div></template>

<style scoped></style>