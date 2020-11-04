<template>
    <div>
        <h1 class="font-normal text-3xl leading-none">
            Tittle
        </h1>
        
        <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <p class="mt-1 text-sm leading-5 text-gray-600">
                            Description about this lesson blablah
                        </p>
                    </div>
                </div>
                
                
                <!-- //ADD A PAGE -->
                <div>
                    <div class="md:grid md:grid-cols-3 md:gap-6">
                        <div class="md:col-span-1">
                        </div>
                        <div class="mt-1 md:mt-0 md:col-span-2">
                            <form action="#" method="POST" class="form-size">
                                <div class="shadow sm:rounded-md sm:overflow-hidden">
                                    <div class=" px-4 py-5 bg-white sm:p-6 rounded-md">
                                        <div class="grid text-xs gap-6">
                                            
                                        </div>
                                        <legend class="text-base leading-6 text-xl text-gray-900 mt-2 font-black text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex.?</legend>
                                        
                                        <!-- <div class="mt-6">
                                            <img src="https://picsum.photos/900/100" alt="">
                                        </div> -->
                                        
                                        
                                        <fieldset>
                                            
                                            <legend class="text-base leading-6 font-medium text-gray-900 mt-5">Multiple choice</legend>
                                            <p class="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                            
                                            
                                            <div class="mt-4">
                                                <div class="flex items-start">
                                                    <div class="flex items-center h-5">
                                                        <input id="comments" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                    </div>
                                                    <div class="ml-3 text-sm leading-5">
                                                        <div class="mt-1 flex rounded-md shadow-sm">
                                                            <label for="option1" class="ml-3">
                                                                <span class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="mt-4">
                                                     <div class="flex items-start">
                                                        <div class="flex items-center h-5">
                                                            <input id="comments" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                        </div>
                                                        <div class="ml-3 text-sm leading-5">
                                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                                <label for="option1" class="ml-3">
                                                                    <span class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div class="mt-4">
                                                    <div class="flex items-start">
                                                    <div class="flex items-center h-5">
                                                        <input id="comments" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                    </div>
                                                    <div class="ml-3 text-sm leading-5">
                                                        <div class="mt-1 flex rounded-md shadow-sm">
                                                            <label for="option1" class="ml-3">
                                                                <span class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                
                                                <div class="mt-4">
                                                    <div class="flex items-start">
                                                        <div class="flex items-center h-5">
                                                            <input id="comments" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                        </div>
                                                        <div class="ml-3 text-sm leading-5">
                                                            <div class="mt-1 flex rounded-md shadow-sm">
                                                                <label for="option1" class="ml-3">
                                                                    <span class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset class="mt-6">
                                            <legend class="text-base leading-6 font-medium text-gray-900">Single choice</legend>
                                            <p class="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                            <div class="mt-4">
                                                <div class="flex items-center">
                                                    <input id="push_everything" name="push_notifications" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                    <label for="push_everything" class="ml-3">
                                                        <span class="block text-sm leading-5 font-medium text-gray-700">Everything</span>
                                                    </label>
                                                </div>
                                                <div class="mt-4 flex items-center">
                                                    <input id="push_email" name="push_notifications" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                    <label for="push_email" class="ml-3">
                                                        <span class="block text-sm leading-5 font-medium text-gray-700">Same as email</span>
                                                    </label>
                                                </div>
                                                <div class="mt-4 flex items-center">
                                                    <input id="push_nothing" name="push_notifications" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                    <label for="push_nothing" class="ml-3">
                                                        <span class="block text-sm leading-5 font-medium text-gray-700">No push notifications</span>
                                                    </label>
                                                </div>
                                                <div class="mt-4 flex items-center">
                                                    <input id="push_nothing" name="push_notifications" type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                    <label for="push_nothing" class="ml-3">
                                                        <span class="block text-sm leading-5 font-medium text-gray-700">No push notifications</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div> 
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                    <span class="inline-flex rounded-md shadow-sm">
                                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                            Next
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script>
    export default {};
</script>

<style lang="css">
    .form-size {
        /* margin-right: -50%; */
        width: 50vw;
    }
    
    p {
        color: black;
    }
    
    .choose {
        margin-left: 70%;
        margin-bottom: 5%;
    }
    
    .line {
        width: 138%;
    }
    
    .text-green-500 {
        color: #599FA5;
    }
    
    
</style>