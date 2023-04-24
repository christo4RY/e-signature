
<template>
  <AutheticateLayout title="Department">
    <div class="p-3 shadow-md py-5 rounded">
      <div class="px-4">
        <div class="relative flex">
          <div
            class="py-1.5 cursor-pointer flex items-center gap-2 text-sm lg:text-md px-3 bg-purple-500 text-white rounded-md mb-5"
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            Add Department
          </div>
        </div>

        <!-- Main modal -->
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-hide="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="px-6 py-6 lg:px-8">
                <h3
                  class="mb-4 text-xl font-medium text-purple-900 dark:text-white"
                >
                  Add Department
                </h3>

                <form class="mt-7">
                  <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                      <label
                        for="dep_code"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Department Code</label
                      >
                      <input
                        type="text"
                        id="dep_code"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        placeholder="dept-001"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="dep_name"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >Department Name</label
                      >
                      <input
                        type="text"
                        id="dep_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                        placeholder="HR,DEV,etc..."
                        required
                      />
                    </div>
                  </div>
                  <div class="mb-6">
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Department Description</label
                    >
                    <textarea
                      id="message"
                      rows="4"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                      placeholder="Write your thoughts here..."
                    ></textarea>
                  </div>

                  <div class="flex gap-2">
                    <button
                      type="submit"
                      class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    >
                      Save
                    </button>
                    <button
                      data-modal-hide="authentication-modal"
                      class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table>
        <template #th>
          <ThCol>
            <div class="flex items-center gap-x-3">
              <input
                type="checkbox"
                class="text-purple-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
              />
              <button class="flex items-center gap-x-2">
                <span>No</span>

                <svg
                  class="h-3"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.1"
                  />
                  <path
                    d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.1"
                  />
                  <path
                    d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="0.3"
                  />
                </svg>
              </button>
            </div>
          </ThCol>
          <ThCol>Department Code</ThCol>
          <ThCol> Department Name </ThCol>
          <ThCol> Department Description </ThCol>
          <ThCol> Action </ThCol>
        </template>
        <template #td>
          <tr>
            <TdCol
              class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
            >
              <div class="inline-flex items-center gap-x-3">
                <input
                  type="checkbox"
                  class="text-purple-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                />

                <span>#0001</span>
              </div>
            </TdCol>
            <TdCol>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">DEPT-001</h2>
              </div>
            </TdCol>
            <TdCol>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">HR</h2>
              </div>
            </TdCol>
            <TdCol> Lorem ipsum dolor sit.. </TdCol>
            <TdCol>
              <div class="flex gap-2">
                <div
                  class="cursor-pointer inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-blue-500 bg-blue-100/60 dark:bg-gray-800"
                >
                  <h2 class="text-sm font-normal">Edit</h2>
                </div>
                <div
                  class="cursor-pointer inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 dark:bg-gray-800"
                >
                  <h2 class="text-sm font-normal">Delete</h2>
                </div>
              </div>
            </TdCol>
          </tr>
          <tr>
            <TdCol
              class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
            >
              <div class="inline-flex items-center gap-x-3">
                <input
                  type="checkbox"
                  class="text-purple-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                />

                <span>#0002</span>
              </div>
            </TdCol>
            <TdCol>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-purple-500 bg-purple-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">DEPT-002</h2>
              </div>
            </TdCol>
            <TdCol>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">IT</h2>
              </div>
            </TdCol>
            <TdCol> Lorem ipsum dolor sit.. </TdCol>
            <TdCol>
              <div class="flex gap-2">
                <div
                  class="cursor-pointer inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-blue-500 bg-blue-100/60 dark:bg-gray-800"
                >
                  <h2 class="text-sm font-normal">Edit</h2>
                </div>
                <div
                  class="cursor-pointer inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 dark:bg-gray-800"
                >
                  <h2 class="text-sm font-normal">Delete</h2>
                </div>
              </div>
            </TdCol>
          </tr>
        </template>
      </Table>
    </div>
  </AutheticateLayout>
</template>
<script setup>
import { initFlowbite } from "flowbite";
import AutheticateLayout from "./../../../layouts/AutheticateLayout.vue";
import Table from "../../../components/Table.vue";
import ThCol from "../../../components/ThCol.vue";
import TdCol from "../../../components/TdCol.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
onMounted(() => {
  initFlowbite();
});
</script>