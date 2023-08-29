<script setup>

const { title, icon } = defineProps({
    title: String,
    icon: String
})

</script>

<template>
    <button class='flex justify-center items-center gap-2 w-24 h-full p-4 rounded-lg bg-dark-blue-custom'>
        <h5 class='text text-sm text-light-grey-custom'>{{ title }}</h5>
        <img v-if="icon" :src="icon" class='max-w-none' />
    </button>
</template>

<style scoped>
.text {
    font-family: Inter-SemiBold;
}
</style>