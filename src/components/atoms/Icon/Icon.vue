<script setup>

    const {icon} = defineProps({
        icon: String
    })

</script>

<template>
    <a class="w-6 flex justify-center items-center">
        <img :src="icon"/>
    </a>
</template>

<style scoped>

</style>