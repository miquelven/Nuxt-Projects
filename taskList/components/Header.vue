<template>
  <h1 class="text-center text-3xl font-semibold text-white">Task List</h1>
  <ul>
    <li v-for="(route, index) in routes" :key="index">
      <NuxtLink :to="route.path">
        <span
          class="transition-all duration-300 text-lg text-white/80 font-semibold hover:text-white hover:underline"
        >
          {{ route.label }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const { routes } = routesApp();
</script>
