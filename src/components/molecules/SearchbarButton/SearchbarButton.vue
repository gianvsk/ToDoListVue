<script setup>
import Searchbar from '../../atoms/Searchbar/Searchbar.vue';
import Button from '../../atoms/Button/Button.vue';
import { ref } from 'vue';

const text = ref('')

const getText = (textReceived) => {
    return text.value = textReceived.value
}

const emitter = defineEmits(['sendValue'])

const receiveId = () => {
    emitter('sendValue', text.value)
}

</script>

<template>
        <form class='w-full flex justify-between gap-2 h-14 px-padding-container' @submit.prevent="receiveId">
            <Searchbar @show-text="getText" />
            <Button type='button' title='Criar' icon='/images/plus.svg' @click="receiveId" />
        </form>
</template>