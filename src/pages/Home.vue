<template>
  <div class="min-h-screen w-full hero">
    <div class="container mx-auto pt-3 px-3 md:px-0 sm:pt-5">
      <div
        class="sticky z-10 top-0 py-3 h-14 border-b shadow-lg bg-white rounded-xl lg:py-2.5"
      >
        <div
          class="px-3 sm:px-6 flex items-center justify-between space-x-4 2xl:container"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7 sm:w-8 sm:h-8 text-purple-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>

            <h5
              class="text-xl sm:text-2xl text-purple-600 font-medium lg:block"
            >
              E-Signature
            </h5>
          </div>

          <div class="flex space-x-2">
            <router-link
              to="/login"
              class="py-1.5 text-sm sm:text-md px-2 sm:py-1.5 sm:px-2.5 rounded bg-purple-600 text-white"
              >Sign In</router-link
            >
            <router-link
              to="/register"
              class="py-1.5 text-sm sm:text-md px-2 sm:py-1.5 sm:px-2.5 rounded bg-purple-600 text-white"
              >Sign Up</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  background-image: url("./../assets/hero2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  position: relative;
}
/* .hero::before {
  content: "";
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.318);
  z-index: 999;
} */
</style>