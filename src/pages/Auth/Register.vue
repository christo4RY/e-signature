<template>
  <GuestLayout>
    <template #sub-label>Get your account now. </template>
    <template #loginOrRegister>
      <h4 class="text-center mb-4">
        Already have an account?
        <router-link to="/login" class="text-purple-700 font-medium"
          >Signin</router-link
        >
      </h4>
    </template>
    <form @submit.prevent="submit">
      <div>
        <InputLabel for="name" value="Name" />

        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-slate-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <TextInput
            id="name"
            type="text"
            class="mt-2 block w-full"
            v-model="form.name"
            required
            placeholder="your name"
          />
        </div>
      </div>

      <div class="mt-4">
        <InputLabel for="department" value="Choose Department" />

        <div class="relative mb-6 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-slate-500 absolute top-[27%] left-0 mx-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>

          <select
            id="department"
            class="bg-gray-50 border-gray-300 pl-10 text-gray-500 text-sm p-2.5 w-full rounded-lg border peer-focus:border-0 focus:ring-blue-500 focus:border-blue-500"
          >
            <option selected>Choose a Department</option>
            <option value="HR">HR</option>
            <option value="IT">IT</option>
          </select>
        </div>
      </div>

      <div class="mt-4">
        <InputLabel for="Email" value="Email" />

        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-slate-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <TextInput
            id="email"
            type="email"
            class="mt-2 block w-full"
            v-model="form.email"
            required
            placeholder="example@gmail.com"
          />
        </div>
      </div>

      <div class="mt-4">
        <InputLabel for="Password" value="Password" />

        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-shield-lock w-5 h-5 text-slate-500"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
              />
              <path
                d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"
              />
            </svg>
          </div>
          <TextInput
            id="password"
            type="password"
            class="mt-2 block w-full"
            v-model="form.password"
            required
            placeholder="•••••••••"
          />
        </div>
      </div>

      <div class="mt-4">
        <InputLabel for="password_confirmation" value="Confirm Password" />

        <div class="relative mb-6">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-shield-lock w-5 h-5 text-slate-500"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
              />
              <path
                d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"
              />
            </svg>
          </div>
          <TextInput
            id="password_confirmation"
            type="password"
            class="mt-2 block w-full"
            v-model="form.password_confirmation"
            required
            placeholder="•••••••••"
          />
        </div>
      </div>

      <div class="flex items-center justify-end mt-4">
        <AuthButton
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing"
        >
          Sign Up
        </AuthButton>
      </div>
    </form>
  </GuestLayout>
</template>
<script setup>
import GuestLayout from "../../layouts/GuestLayout.vue";
import InputLabel from "../../components/InputLabel.vue";
import TextInput from "../../components/TextInput.vue";
import AuthButton from "../../components/AuthButton.vue";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";

const form = reactive({
  name: "",
  department: "",
  email: "",
  password: "",
  password_confirmation: "",
  terms: false,
});

const router = useRouter();

const submit = () => {
  if (form.email == "admin@signature.com") {
    Cookies.remove("name");
    Cookies.set("name", "admin");
    router.push("/admin/dashboard");
  } else if (form.email == "user@signature.com") {
    Cookies.remove("name");
    Cookies.set("name", "user");
    router.push("/user/documents");
  }
};
</script>
