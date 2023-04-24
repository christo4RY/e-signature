<template>
  <button
    :type="type"
    class="inline-flex w-full items-center px-4 py-2 bg-purple-700 rounded-sm text-white tracking-widest hover:bg-purple-500 focus:bg-purple-500 active:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 justify-center"
  >
    <slot />
  </button>
</template>
<script setup>
defineProps({
  type: {
    type: String,
    default: "submit",
  },
});
</script>