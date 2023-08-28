<script setup>
import { ref } from 'vue';
import Icon from '../../atoms/Icon/Icon.vue';


const { text, source1, source2, checked, idTodo } = defineProps({
    text: String,
    idTodo: String,
    source1: String,
    source2: String,
    checked: Boolean
})

const check = ref(checked)
const todoDeleted = ref(false)

const emitter = defineEmits(['deleteTodo']) 

const sendTodoToDelete = () => {
    emitter('deleteTodo', idTodo)
}

const setCheck = () => {
    check.value = !check.value
}
</script>

<template>
    <div v-if="!todoDeleted" class='p-4 flex items-start justify-start gap-3 rounded-lg bg-black-custom border border-dark-grey-custom'>
        <Icon :icon="check ? '/images/layer3.svg' : source1" class='pt-0.5' @click="setCheck"/>
        <p :class="['text text-sm text-left me-auto', check ? 'line-through text-grey-line-through' : 'text-light-grey-custom']">
            {{ text }}
        </p>
        <Icon :icon="source2" @click="sendTodoToDelete"/>
    </div>
</template>

<style scoped>
.text {
    font-family: Inter-Regular;
}
</style>