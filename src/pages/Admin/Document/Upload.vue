<template>
  <AutheticateLayout
    title="
   Document Upload"
  >
    <div class="flex justify-center">
      <div class="w-[65%] md:w-[75%]">
        <div>
          <div class="sticky top-0 h-12 border-b bg-slate-200 lg:py-2.5"></div>
          <canvas
            id="canvas"
            data-modal-target="openSignature"
            data-modal-toggle="openSignature"
            class="cursor-pointer"
          ></canvas>
        </div>
        <div class="flex gap-2 px-3">
          <router-link
            to="/admin/document/send"
            class="px-3 py-1.5 bg-purple-600 text-slate-100 rounded"
            >Send</router-link
          >
          <router-link
            to="/admin/documents"
            class="px-3 py-1.5 bg-purple-600 text-slate-100 rounded"
            >Cancel</router-link
          >
        </div>
        <!-- Main modal -->
        <div
          id="openSignature"
          tabindex="-1"
          aria-hidden="true"
          class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div class="relative w-full max-w-2xl max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div
                class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600"
              >
                <h3
                  class="text-xl font-semibold text-purple-900 dark:text-white"
                >
                  Add Signauture
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="openSignature"
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
              </div>
              <!-- Modal body -->
              <div class="p-6 space-y-6">
                <VueSignaturePad
                  width="500px"
                  height="500px"
                  ref="signaturePad"
                  class="bg-slate-300 mx-auto z-10"
                />
              </div>
              <!-- Modal footer -->
              <div
                class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600"
              >
                <button
                  data-modal-hide="openSignature"
                  type="button"
                  @click="save"
                  class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  Save
                </button>
                <button
                  type="button"
                  @click="undo"
                  class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  Undo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-[35%] md:w-[25%] bg-slate-200 px-4 py-3">
        <div class="flex flex-wrap gap-2 mt-8">
          <router-link
            to=""
            class="px-2 w-full md:w-auto py-1.5 hover:bg-purple-400 duration-300 bg-purple-300 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
              />
            </svg>

            <h1 class="text-md">Print</h1>
          </router-link>
          <router-link
            to="/admin/document/send"
            class="px-2 w-full md:w-auto py-1.5 hover:bg-purple-400 duration-300 bg-purple-300 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
              />
            </svg>

            <h1 class="text-md">Import</h1>
          </router-link>
          <router-link
            to="/admin/document/google-drive"
            class="px-2 w-full md:w-auto py-1.5 hover:bg-purple-400 duration-300 bg-purple-300 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 text-center"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>

            <h1 class="text-md">Export</h1>
          </router-link>
        </div>
        <div class="flex gap-3 justify-center flex-wrap mt-6">
          <div class="p-5 w-full md:w-auto border-2 rounded border-slate-400">
            <h1 class="text-slate-400">Text</h1>
          </div>
          <div class="p-5 w-full md:w-auto border-2 rounded border-slate-400">
            <h1 class="text-slate-400">Signature</h1>
          </div>
          <div class="p-5 w-full md:w-auto border-2 rounded border-slate-400">
            <h1 class="text-slate-400">Date</h1>
          </div>
          <div class="p-5 w-full md:w-auto border-2 rounded border-slate-400">
            <h1 class="text-slate-400">Image</h1>
          </div>
        </div>
      </div>
    </div>
  </AutheticateLayout>
</template>
<script setup>
import { onMounted, ref } from "vue";
import AutheticateLayout from "./../../../layouts/AutheticateLayout.vue";
import { VueSignaturePad } from "vue-signature-pad";
const signaturePad = ref(null);
const signature = ref(null);
const undo = () => {
  signaturePad.value.undoSignature();
};
const save = () => {
  const { isEmpty, data } = signaturePad.value.saveSignature();
  console.log(isEmpty);
  console.log(data);
  signature.value = data;
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0, 160, 143);
  };
  img.src = signature.value;
};
onMounted(() => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#E2E8F0";
  ctx.fillRect(10, 10, 180, 100);
});
</script>