<template>
  <form class="max-w-screen-sm m-auto" @submit.prevent="handleEditTask">
    <UIInput label="task" v-model="label" />
    <div class="w-full flex justify-around mt-7">
      <UIButtonCancel />

      <UIButton type="submit" class="w-1/3">Editar</UIButton>
    </div>
  </form>
</template>

<script setup>
const useTask = useTasks();

const { getTask, editTask } = useTask;

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const label = ref("");

onMounted(() => {
  label.value = getTask(id);
  label.value = label.value[0].task;
});

const handleEditTask = () => {
  if (!label.value.trim()) return;
  editTask(id, label);
  router.push("/");
};
</script>

<style lang="scss" scoped></style>
