<script setup>
import { ref, watch } from 'vue';

const text = ref('')

const event = defineEmits(['ciao'])

const showText = () => {
    event('ciao', text.value)
}

watch(text, showText)

</script>

<template>
    <form id='form' for='form' class='w-full'>
        <input id='searchbar' name='searchbar' type='text' class='w-full p-4 rounded-lg text text-base text-white'
            placeholder='Adicione uma nova tarefa' v-model="text" />
    </form>
</template>

<style scoped>
.text {
    font-family: Inter-Regular;
    color: rgba(128, 128, 128, 1)
}
</style>