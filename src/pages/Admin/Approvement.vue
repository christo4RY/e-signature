
import AutheticateLayout from '../../layouts/AutheticateLayout.vue';

<template>
  <AutheticateLayout title="Approvement">
    <div class="p-3 shadow-md py-5 rounded">
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
          <ThCol>Avator</ThCol>
          <ThCol> Name </ThCol>
          <ThCol> Email </ThCol>
          <ThCol> Department </ThCol>
          <ThCol> Date </ThCol>
          <ThCol> Approvement </ThCol>
        </template>
        <template #td>
          <tr>
            <td
              class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
            >
              <div class="inline-flex items-center gap-x-3">
                <input
                  type="checkbox"
                  class="text-purple-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                />

                <span>#0001</span>
              </div>
            </td>
            <TdCol>
              <div class="flex items-center gap-x-2">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
            </TdCol>
            <TdCol> Arkar </TdCol>
            <TdCol> arkar@gmail.com </TdCol>
            <TdCol>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">Development</h2>
              </div>
            </TdCol>

            <TdCol> 24 Apr,2023 </TdCol>
            <TdCol>
              <label
                class="relative inline-flex items-center mr-5 cursor-pointer"
              >
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
                ></div>
              </label>
            </TdCol>
          </tr>
          <tr>
            <td
              class="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap"
            >
              <div class="inline-flex items-center gap-x-3">
                <input
                  type="checkbox"
                  class="text-purple-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                />

                <span>#0002</span>
              </div>
            </td>
            <TdCol>
              <div class="flex items-center gap-x-2">
                <img
                  class="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
            </TdCol>
            <TdCol> Aryie </TdCol>
            <TdCol> aryie@gmail.com </TdCol>
            <TdCol>
              <div
                class="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800"
              >
                <h2 class="text-sm font-normal">Development</h2>
              </div>
            </TdCol>

            <TdCol> 25 Apr,2023 </TdCol>
            <TdCol>
              <label
                class="relative inline-flex items-center mr-5 cursor-pointer"
              >
                <input type="checkbox" value="" class="sr-only peer" checked />
                <div
                  class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"
                ></div>
              </label>
            </TdCol>
          </tr>
        </template>
      </Table>
    </div>
  </AutheticateLayout>
</template>
<script setup>
import AutheticateLayout from "./../../layouts/AutheticateLayout.vue";
import Table from "../../components/Table.vue";
import ThCol from "../../components/ThCol.vue";
import TdCol from "../../components/TdCol.vue";
</script>