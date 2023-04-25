<template>
  <aside
    :class="[toggle ? 'ml-[0%]' : 'ml-[-100%]']"
    class="fixed z-20 transition-all top-0 pb-3 px-6 w-[60%] sm:w-[35%] md:w-[25%] flex flex-col justify-between h-screen border-r bg-slate-800 duration-500 lg:ml-0 lg:w-[20%] xl:w-[20%] 2xl:w-[15%]"
  >
    <div class="mt-3">
      <div class="flex justify-between items-center">
        <router-link
          to="/user/documents"
          class="text-purple-700 text-2xl md:text-3xl font-bold"
        >
          E-Signature
        </router-link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-purple-700 cursor-pointer"
          :class="[toggle ? '' : 'hidden']"
          @click="$emit('closeToggle')"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <ul class="mt-7 space-y-2">
        <router-link
          to="/user/documents"
          class="flex w-full justify-between text-gray-400 hover:bg-gray-500 hover:text-purple-400 focus:bg-gray-200 focus:text-purple-700 cursor-pointer items-center p-2 rounded duration-200"
        >
          <p
            class="flex items-center outline-none focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon icon-tabler icon-tabler-code"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
            <span class="text-sm ml-2 outline-none focus:outline-none"
              >Documents</span
            >
          </p>
        </router-link>

        <router-link
          to="/user/signature"
          class="flex w-full justify-between text-gray-400 hover:bg-gray-500 hover:text-purple-400 focus:bg-gray-200 focus:text-purple-700 cursor-pointer items-center p-2 rounded duration-200"
        >
          <p
            class="flex items-center outline-none focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon icon-tabler icon-tabler-code"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>

            <span class="text-sm ml-2 outline-none focus:outline-none"
              >Signature</span
            >
          </p>
        </router-link>

        <router-link
          to="/user/input"
          class="flex w-full justify-between text-gray-400 hover:bg-gray-500 hover:text-purple-400 focus:bg-gray-200 focus:text-purple-700 cursor-pointer items-center p-2 rounded duration-200"
        >
          <p
            class="flex items-center outline-none focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon icon-tabler icon-tabler-code"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              />
            </svg>
            <span class="text-sm ml-2 outline-none focus:outline-none"
              >Input</span
            >
          </p>
        </router-link>

        <router-link
          to="/user/send"
          class="flex w-full justify-between text-gray-400 hover:bg-gray-500 hover:text-purple-400 focus:bg-gray-200 focus:text-purple-700 cursor-pointer items-center p-2 rounded duration-200"
        >
          <p
            class="flex items-center outline-none focus:outline-none focus:ring-2 focus:ring-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="icon icon-tabler icon-tabler-code"
              width="20"
              height="20"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
            <span class="text-sm ml-2 outline-none focus:outline-none"
              >Send</span
            >
          </p>
        </router-link>
      </ul>
    </div>
  </aside>
</template>
  <script setup>
defineProps({
  toggle: String,
});
</script>