<script setup>

const { text, size, todo } = defineProps({
    text: String,
    size: 'small' | 'default',
    todo: {
        actualToDo: Number,
        endedToDo: Number
    }
})

const { actualToDo = 0, endedToDo = 0 } = todo

</script>

<template>
    <div class='inline-flex gap-2'>
        <span :class="{
            'text text-sm': size,
            'text-light-blue-custom': size === 'small',
            'text-purple-custom': size === 'default'
        }">
            {{ text }}
        </span>
        <span class='py-0.5 px-2 rounded-full bg-dark-grey-custom text text-xs text-grey-custom'>
            {{ size === 'small' ? actualToDo.toString() : endedToDo.toString() + ' de ' + actualToDo.toString() }}
        </span>
    </div>
</template>

<style scoped>
.text {
    font-family: Inter-SemiBold
}
</style>