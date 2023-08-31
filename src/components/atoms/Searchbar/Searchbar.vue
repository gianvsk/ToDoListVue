<script setup>
import { ref, watch } from 'vue';

const text = ref('')

const emitter = defineEmits(['showText'])

const sendText = () => {
    emitter('showText', text)
}

watch(text, sendText)

</script>

<template>
        <input id='searchbar' name='searchbar' type='text' class='w-full p-4 rounded-lg text text-base text-white'
            placeholder='Adicione uma nova tarefa' v-model="text" />
</template>

<style scoped>
.text {
    font-family: Inter-Regular;
}
</style>