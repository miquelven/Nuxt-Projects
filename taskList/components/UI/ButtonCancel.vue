<template>
  <UIButton
    type="button"
    @click="handleCancel"
    class="w-1/3 bg-red-300 text-white"
    >Cancelar</UIButton
  >
</template>

<script setup>
const router = useRouter();

const handleCancel = () => {
  router.push("/");
};
</script>
