<script setup>
import Searchbar from '../../atoms/Searchbar/Searchbar.vue';
import Button from '../../atoms/Button/Button.vue';
import { ref, watch } from 'vue';

const textGot = ref('ok')
/* const emitButton = defineEmits(['responseButton'])
emit('responseButton', textGot ) */

const evn = defineEmits(['lol'])

const showText1 = () => {
    console.log(textGot.value)
}

watch(textGot, showText1)

</script>

<template>
<div class='w-full flex justify-between gap-2 h-14 px-padding-container'>
    <Searchbar @ciao="(text) => textGot = text" />
    <Button title='Criar' icon='/images/plus.svg' @click="addToDo"/>
</div>
    
</template>

<style scoped>
</style>