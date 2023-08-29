<script setup>
import Searchbar from '../../atoms/Searchbar/Searchbar.vue';
import Button from '../../atoms/Button/Button.vue';
import { ref } from 'vue';

const text = ref('')

const getText = (textReceived) => {
    return text.value = textReceived.value
}

const emitter = defineEmits(['getTodoId'])

const receiveId = () => {
    emitter('getTodoId', text.value)
}

</script>

<template>
    <div class='w-full flex justify-between gap-2 h-14 px-padding-container'>
        <Searchbar @show-text="getText" />
        <Button title='Criar' icon='/images/plus.svg' @click="receiveId" />
    </div>
</template>

<style scoped></style>