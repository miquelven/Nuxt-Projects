<template>
  <div
    class="flex items-center justify-between px-5 py-3 border-4 border-purple-300 rounded-md"
  >
    <span>
      <slot></slot>
    </span>

    <div class="flex gap-7">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
