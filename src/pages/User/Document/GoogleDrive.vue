<template>
  <AutheticateLayout
    title="
     Google Drive"
  >
    <div class="container items-center flex justify-center mt-14">
      <div class="shadow-md w-full md:w-2/4 p-5">
        <div class="text-center">
          <h1 class="text-2xl text-purple-700 font-bold">Sign In</h1>
          <p class="text-lg text-purple-500">Use your Google Account</p>
        </div>
        <div class="mt-5 text-center">
          <router-link
            to="/user/documents"
            class="py-2 px-3 bg-purple-700 text-gray-100 hover:bg-purple-400 focus:bg-purple-400 duration-300 rounded-lg"
            >Continue</router-link
          >
        </div>
      </div>
    </div>
  </AutheticateLayout>
</template>
      <script setup>
import AutheticateLayout from "./../../../layouts/AutheticateUserLayout.vue";
</script>