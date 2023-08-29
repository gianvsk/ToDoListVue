<script setup>
import { ref } from 'vue';
import Icon from '../../atoms/Icon/Icon.vue';


const { text, source1, source2, checked, idTodo } = defineProps({
    text: String,
    idTodo: Number,
    source1: String,
    source2: String,
    checked: Boolean
})

const emitter = defineEmits(['deleteTodo', 'checkTodo']) 

const sendTodoToDelete = () => {
    emitter('deleteTodo', idTodo)
}

const setCheck = () => {
    emitter('checkTodo', idTodo)
}

</script>

<template>
    <div class='p-4 flex items-start justify-start gap-3 rounded-lg bg-black-custom border border-dark-grey-custom'>
        <Icon :icon="checked ? '/images/layer3.svg' : source1" @click="setCheck" class='pt-0.5 shrink-0'/>
        <p :class="['text text-sm text-left me-auto break-all', checked ? 'line-through text-grey-line-through' : 'text-light-grey-custom']">
            {{ text }}
        </p>
        <Icon :icon="source2" @click="sendTodoToDelete" class='shrink-0'/>
    </div>
</template>

<style scoped>
.text {
    font-family: Inter-Regular;
}
</style>