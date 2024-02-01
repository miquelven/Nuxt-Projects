<template>
  <button
    :type="props.type"
    :disabled="props.disabled"
    @click="handleClick"
    class="shadow-md shadow-purple-300 transition-all duration-300 ease-in-out px-10 py-2 bg-purple-200 rounded-md font-semibold text-purple-800 cursor-pointer hover:opacity-60 hover:shadow-purple-950 hover:scale-105 disabled:bg-black"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const emits = defineEmits(["click"]);

const props = defineProps({
  type: { type: String, default: "button" },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const handleClick = () => emits("click");
</script>

<style lang="scss" scoped></style>
