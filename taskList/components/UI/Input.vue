<template>
  <div class="max-w-screen-sm m-auto">
    <fieldset
      class="border-4 border-purple-400 rounded-md flex flex-col gap-2 p-10 shadow-md shadow-purple-950/60"
    >
      <label :for="props.label" class="text-lg text-purple-400 font-semibold"
        >Tarefa:</label
      >
      <input
        type="text"
        autofocus
        :id="props.label"
        :value="props.modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="transition-all duration-300 ease-in-out border-2 shadow-md shadow-purple-950/50 border-transparent bg-purple-100 rounded-md px-4 py-3 outline-none mb-10 text-purple-800 font-bold focus:scale-105 focus:border-purple-600"
      />
    </fieldset>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
</script>
