<script setup>
import IconTitle from './components/atoms/IconTitle/IconTitle.vue';
import TableWrapper from './components/organisms/TableWrapper/TableWrapper.vue';
import SearchbarButton from './components/molecules/SearchbarButton/SearchbarButton.vue';
import { ref, computed } from 'vue';

const todos = ref([
  { id: 1, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: false },
  { id: 2, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: false },
  { id: 3, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: false },
  { id: 4, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: true },
  { id: 5, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', check: true }
])

const doneTodo = computed(() => {
  return todos.value.filter(el => el.check).length
})

const undoneTodo = computed(() => {
  return todos.value.length
})

const deleteTodo = (id) => {
  todos.value = todos.value.filter(el => el.id !== id)
}

const addTodoById = (text) => {
  todos.value.unshift({ id: Math.floor(Math.random() * 100), text: text, check: false })
}

const editCheck = (id) => {
  todos.value = todos.value.map(el => el.id === id ? { ...el, check: !el.check } : el)
  todos.value = todos.value.sort((a, b) => Number(a.check) - Number(b.check))
}

</script>

<template>
  <div class='flex flex-col gap-16'>
    <div class='flex flex-col justify-center items-center bg-dark-black-custom h-[200px] relative'>
      <IconTitle icon='/images/rocket.svg' title1='to' title2='do' />
      <SearchbarButton class='absolute bottom-[-30px]' @send-value="addTodoById" />
    </div>
    <div class='flex flex-col px-padding-container mt-91px'>
      <TableWrapper :todos="todos" :actual-to-do="undoneTodo" :ended-to-do="doneTodo" @send-todo-id="deleteTodo"
        @check-todo="editCheck" />
    </div>
  </div>
</template>
