<script setup>

const {text, size, actualToDo, endedToDo} = defineProps({
    text: String,
    size: String,
    actualToDo: Number,
    endedToDo: Number
})

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
            {{ size === 'small' ? actualToDo : endedToDo + ' de ' + actualToDo}}
        </span>
    </div>
</template>

<style scoped>
.text {
    font-family: Inter-SemiBold
}
</style>