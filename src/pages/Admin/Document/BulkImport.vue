<template>
  <AutheticateLayout title="Bulk Import">
    <h1 class="text-xl mb-3 text-purple-500">Select documents</h1>
    <div class="flex items-center justify-center w-full">
      <label
        for="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-300 border-dashed rounded-lg cursor-pointer bg-purple-50 dark:hover:bg-bray-800 dark:bg-purple-700 hover:bg-purple-100 dark:border-purple-600 dark:hover:border-purple-500 dark:hover:bg-purple-600"
      >
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            class="w-10 h-10 mb-3 text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          <p class="mb-2 text-sm text-purple-500 dark:text-purple-400">
            <span class="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p class="text-xs text-purple-500 dark:text-purple-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
      </label>
    </div>
    <div class="mt-5 text-center">
      <router-link
        to="/admin/documents"
        class="py-2 px-3 bg-purple-700 text-gray-100 hover:bg-purple-400 focus:bg-purple-400 duration-300 rounded-lg"
        >Continue</router-link
      >
    </div>
  </AutheticateLayout>
</template>
<script setup>
import AutheticateLayout from "./../../../layouts/AutheticateLayout.vue";
</script>