<template>
  <div class="mb-10 flex flex-col gap-5 m-auto max-w-screen-sm">
    <ListItem v-for="task in taskList" :key="task.id" v-if="taskList">
      <p class="font-semibold">{{ task.task }}</p>
      <template #buttons>
        <button
          @click="handleEditTask(task.id)"
          class="font-semibold text-white transition-all duration-300 shadow-md shadow-transparent bg-purple-300 py-2 px-3 rounded-xl hover:bg-purple-400 hover:shadow-gray-700"
        >
          Editar
        </button>
        <button
          @click="handleRemoveTask(task.id)"
          class="font-semibold text-white transition-all duration-300 shadow-md shadow-transparent bg-red-300 py-2 px-3 rounded-xl hover:bg-red-400 hover:shadow-gray-700"
        >
          Remover
        </button>
      </template>
    </ListItem>
  </div>

  <div class="w-full flex justify-center">
    <UIButton @click="addTask"> Adicionar Tarefa </UIButton>
  </div>
</template>
<script setup>
const router = useRouter();
const addTask = () => router.push("/form");

const useTask = useTasks();

const { taskList, removeTask } = useTask;

const handleEditTask = (id) => {
  router.push(`/form/${id}`);
};

const handleRemoveTask = (id) => {
  removeTask(id);
};
</script>
