<template>
  <AutheticateLayout
    title="
     PDF Detail"
  >
    <div class="container items-center flex justify-center mt-5">
      <div class="shadow-md w-full p-5">
        <div class="flex gap-5 items-center">
          <img
            class="object-cover w-36 h-32 self-start"
            data-dropdown-toggle="dropdown"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt=""
          />
          <div>
            <div class="flex gap-3 items-center mb-2">
              <h1 class="text-slate-500 text-sm">Created</h1>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">Apr 25,2023 1:43 AM +06:30</h2>
              </div>
            </div>
            <div class="flex gap-3 items-center mb-2">
              <h1 class="text-slate-500 text-sm">Updated</h1>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">Apr 25,2023 1:43 AM +06:30</h2>
              </div>
            </div>
            <div class="flex gap-3 items-center mb-2">
              <h1 class="text-slate-500 text-sm">Owner</h1>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">Arkar</h2>
              </div>
            </div>
            <div class="flex gap-3 items-center mb-2">
              <h1 class="text-slate-500 text-sm">Department</h1>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">IT</h2>
              </div>
            </div>
            <div class="flex gap-3 items-center mb-2">
              <h1 class="text-slate-500 text-sm">To User</h1>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">AungAung</h2>
              </div>
            </div>
            <div class="flex gap-3 items-center mb-2">
              <h1 class="text-slate-500 text-sm">PDF Count</h1>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">1</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AutheticateLayout>
</template>
      <script setup>
import AutheticateLayout from "./../../../layouts/AutheticateLayout.vue";
</script>