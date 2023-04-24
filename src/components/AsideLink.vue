<template>
  <li
    class="flex w-full justify-between text-gray-400 hover:bg-gray-500 hover:text-purple-400 focus:bg-gray-200 focus:text-purple-700 cursor-pointer items-center p-2 rounded duration-200"
  >
    <router-link
      to=""
      class="flex items-center outline-none focus:outline-none focus:ring-2 focus:ring-white"
    >
      <slot name="icon" />
      <span class="text-sm ml-2 outline-none focus:outline-none">{{
        title
      }}</span>
    </router-link>
  </li>
</template>
<script setup>
defineProps({
  title: String,
  route: String,
});
</script>
