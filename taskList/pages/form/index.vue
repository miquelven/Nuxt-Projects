<template>
  <form class="max-w-screen-sm m-auto" @submit.prevent="handleAddTask">
    <UIInput label="task" v-model="task.task" />
    <div class="w-full flex justify-around mt-10">
      <UIButtonCancel />
      <UIButton type="submit" class="w-1/3">Adicionar</UIButton>
    </div>
  </form>
</template>

<script setup>
const task = reactive({
  id: "",
  task: "",
});

const useTask = useTasks();

const disabled = ref(false);

const { addTask } = useTask;

const router = useRouter();

const handleAddTask = () => {
  if (!task.task) return;
  addTask(task.task);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
