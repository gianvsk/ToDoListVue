<script setup>
import Searchbar from '../../atoms/Searchbar/Searchbar.vue';
import Button from '../../atoms/Button/Button.vue';
import { ref } from 'vue';

const textGot = ref('')
const emitter = defineEmits(['lol', 'sendTodo'])

const eventHandler = () => {
    emitter('sendTodo', textGot.value)
}

</script>

<template>
<div class='w-full flex justify-between gap-2 h-14 px-padding-container'>
    <Searchbar @showText="(text) => textGot = text" />
    <Button title='Criar' icon='/images/plus.svg' @click="eventHandler"/>
</div>
    
</template>

<style scoped>
</style>