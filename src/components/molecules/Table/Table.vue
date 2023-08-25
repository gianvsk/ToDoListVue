<script setup>
import { watch, ref } from 'vue';
import Icon from '../../atoms/Icon/Icon.vue';


const { text, source1, source2, checked } = defineProps({
    text: String,
    source1: String,
    source2: String,
    checked: Boolean
})

const check = ref(checked)
const todoDeleted = ref(false)

const setCheck = () => {
    check.value = !check.value
}

const deleteToDo = () => {
    todoDeleted.value = true
    console.log(todoDeleted.value)
}

</script>

<template>
    <div v-if="!todoDeleted" class='p-4 flex items-start justify-center gap-3 rounded-lg bg-black-custom border border-dark-grey-custom'>
        <Icon :icon="check ? '/images/layer3.svg' : source1" class='pt-0.5' @click="setCheck"/>
        <p :class="['text text-sm text-left ', check ? 'line-through text-grey-line-through' : 'text-light-grey-custom']">
            {{ text }}
        </p>
        <Icon :icon="source2" @click="deleteToDo"/>
    </div>
</template>

<style scoped>
.text {
    font-family: Inter-Regular;
}
</style>