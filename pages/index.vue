<template>
    <div>
        <div class="container w-full flex items-center justify-center  p-2">
            <div class="w-full h-full p-2 flex  flex-wrap gap-5 items-center justify-center ">
                <div v-for="message in msg_data" :key="message.id" class="flex flex-col gap-2 bg-white shadow-lg rounded-xl p-2 md:p-3 white:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                    <div class="top-box w-96 h-10   flex justify-between">
                        <span class="text-gray-400 font-medium text-gray-500">#{{ message.id }}</span>
                        <div class="open-box w-24   flex justify-end items-center justify-between">
                          
                          
                            <button type="button" @click="showDetails(message)" class="p-1 inline-flex items-center gap-x-2 text-sm font-semibold  border border-transparent bg-yellow-400 text-black hover:bg-white disabled:opacity-50 disabled:pointer-events-none">
                                Open
                            </button>


                            <i class="fa-solid fa-circle-check p-2 text-green-500 text-xl"></i>
                        </div>
                    </div>
                    <div class="title w-96   p-2">
                        
                        <h3 class="text-black text-lg font-semibold">{{ message.title }}</h3>
                        <p class="text-black flex gap-2"><span>{{ message.date }}</span><span>{{ message.time }}</span></p>
                    </div>
                    <div class="para w-96 h-10   p-2 bg-gray-100 rounded-md truncate">
                        <p class="text-black">{{ message.message }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="selectedMessage" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="modal bg-white w-full h-full p-4">
                <div class="flex justify-between items-center border-b pb-2 mb-2">
                    <p><strong>#</strong> {{ selectedMessage.id }}</p>
                    <button @click="closeDetails" class="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="w-full p-2 flex flex-col gap-3">
                    <div class="flex flex-col bg-white  shadow-lg rounded-xl p-4 md:p-5  dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div class="w-full p-2 flex items-center justify-between">
                           <div class="bg-blue-600 p-2 text-white flex justify-center items-center" style="width: 40px; height: 40px; border-radius: 100%;">
                            <h1>E</h1>
                           </div>
                           <p class="text-black-400 flex gap-3"><span>{{ selectedMessage.date }}</span> <span>{{ selectedMessage.time }}</span></p>
                        </div>
                        <div class="w-full p-2">
                            <h3 class="text-lg font-bold text-black-800">
                                {{ selectedMessage.title }}
                            </h3>
                          <p class="mt-2 text-black-500">
                            {{ selectedMessage.message }}
                          </p>
                        </div>
                        
                    </div>

                    <div class="flex flex-col bg-white  shadow-lg rounded-xl p-4 md:p-5  dark:border-neutral-700 dark:shadow-neutral-700/70">
                        <div class="w-full  p-1 flex items-center justify-between">
                           <div class="p-1 text-white flex justify-center items-center" style="width: 70px; height: 70px;">
                            <img src="~/assets/image/star.png" alt="star">
                           </div>
                           <p class="text-black-400 flex gap-3"><span>{{ selectedMessage.date }}</span> <span>{{ selectedMessage.time }}</span></p>
                        </div>
                        <div class="w-full p-2 ">
                          <p class="mt-2 text-black-500">
                            Your ticket has been created successfully. Our Support team will get back to you in 24-48 business hours.
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import msg_data from '~/data/data.json';

export default {
    data() {
        return {
            msg_data,
            selectedMessage: null
        };
    },
    methods: {
        showDetails(message) {
            this.selectedMessage = message;
        },
        closeDetails() {
            this.selectedMessage = null;
        }
    }
};
</script>

<style scoped>
.modal {
    width: 100%;
    height: 100%;
}


</style>
