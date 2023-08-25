<script setup>
import IconTitle from './components/atoms/IconTitle/IconTitle.vue';
import TableWrapper from './components/organisms/TableWrapper/TableWrapper.vue';
import SearchbarButton from './components/molecules/SearchbarButton/SearchbarButton.vue';
import { ref } from 'vue';

const addedToDo = ref('')

</script>

<template>
  <div :class="'flex flex-col gap-16'">
    <div :class="'flex flex-col justify-center items-center bg-dark-black-custom h-[200px] relative'">
      <IconTitle :icon="'/images/rocket.svg'" :title1="'to'" :title2="'do'" />
      <SearchbarButton :class="'absolute bottom-[-30px]'"/>
    </div>
    <div :class="'flex flex-col px-padding-container mt-91px'">
      <TableWrapper />
    </div>
  </div>
</template>


<style scoped></style>
