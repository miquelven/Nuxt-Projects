<template>
  <header
    class="h-20 bg-purple-400 flex items-center shadow-lg shadow-gray-400"
  >
    <Container class="flex w-full justify-between items-center">
      <Header />
    </Container>
  </header>
  <main>
    <Container class="mt-20">
      <NuxtPage />
    </Container>
  </main>
</template>

<script setup>
useHead({
  title: "TaskList",
});
</script>
