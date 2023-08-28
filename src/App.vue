<script setup>
import IconTitle from './components/atoms/IconTitle/IconTitle.vue';
import TableWrapper from './components/organisms/TableWrapper/TableWrapper.vue';
import SearchbarButton from './components/molecules/SearchbarButton/SearchbarButton.vue';
import { ref, computed } from 'vue';

const todos = ref([
  {id: '1', text:'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: false},
  {id: '2', text:'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: false},
  {id: '3', text:'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: false},
  {id: '4', text:'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: true},
  {id: '5', text:'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: true}
])

const doneTodo = computed(() => {
  return todos.value.filter((el) => el.check)
})

const undoneTodo = computed(() => {
  return todos.value.filter((el) => !el.check)
})

const endedToDo = computed(() => doneTodo.value.length)
const actualToDo = computed(() => undoneTodo.value.length + doneTodo.value.length)

const eventHandle = (id) => {
  console.log(id)
}

</script>

<template>
  <div :class="'flex flex-col gap-16'">
    <div :class="'flex flex-col justify-center items-center bg-dark-black-custom h-[200px] relative'">
      <IconTitle :icon="'/images/rocket.svg'" :title1="'to'" :title2="'do'" />
      <SearchbarButton class='absolute bottom-[-30px]' @sendTodo="$emit(eventHandler)" />
    </div>
    <div :class="'flex flex-col px-padding-container mt-91px'">
      <TableWrapper :todos="doneTodo" :actual-To-Do="actualToDo" :ended-To-Do="endedToDo"
        @eventDelete="(msg) => deletedToDo = msg" @eventHandler="eventHandle"/>
      <TableWrapper :todos="undoneTodo" :actual-To-Do="actualToDo" :ended-To-Do="endedToDo"
        @eventDelete="(msg) => deletedToDo = msg" @eventHandler="eventHandle"/>
    </div>
  </div>
</template>


<style scoped></style>
