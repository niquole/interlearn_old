<template>
    <div>
        <h1 class="font-normal text-3xl leading-none">
            Create
        </h1>
        <div class="choose">
            
            <router-link class="m-10 text-xl"  active-class="font-bold text-2xl" to="/create-lesson" >Lesson</router-link>
            
            <router-link class=" text-xl"   active-class="font-bold text-2xl" to="/create-quiz">Quiz</router-link>
        </div>
        <div>
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <p class="mt-1 text-sm leading-5 text-gray-600">
                            This information is about the whole lesson that will include slides.
                        </p>
                    </div>
                </div>
                
                
                
                
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST" class="form-size">
                        <div class="shadow sm:rounded-md sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-3 gap-6">
                                    <div class="col-span-3 sm:col-span-2">
                                        <label for="company_website" class="block text-sm font-medium leading-5 text-gray-700">
                                            Tittle
                                        </label>
                                        <div class="mt-1 flex rounded-md shadow-sm">
                                            <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" >
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mt-6">
                                    <label for="about" class="block text-sm leading-5 font-medium text-gray-700">
                                        Description
                                    </label>
                                    <div class="rounded-md shadow-sm">
                                        <textarea id="about" rows="3" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder=""></textarea>
                                    </div>
                                    <p class="mt-2 text-sm text-gray-500">
                                        Brief description for your profile. URLs are hyperlinked.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        
        
        
        
        <div class="hidden sm:block">
            <div class="py-5 line">
                <div class="border-t border-gray-200"></div>
            </div>
        </div>
        
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-3 md:gap-6">
                <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                        <!-- <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3> -->
                        <p class="mt-1 text-sm leading-5 text-gray-600">
                            Decide which communications you'd like to receive and how.
                        </p>
                    </div>
                </div>
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST" class="form-size">
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <fieldset>
                                    <legend class="text-base leading-6 font-medium text-gray-900">Question</legend>
                                    <div class="mt-1 flex rounded-md shadow-sm">
                                        <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" >
                                    </div>
                                    <legend class="text-base leading-6 font-medium text-gray-900 mt-5">Multiple choice</legend>
                                    <p class="text-sm leading-5 text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                    
                                    
                                    <div class="mt-4">
                                        <div class="flex items-start">
                                            <div class="flex items-center h-5">
                                                <input id="comments" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                            </div>
                                            <div class="ml-3 text-sm leading-5">
                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                    <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" >
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="candidates" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                </div>
                                                <div class="ml-3 text-sm leading-5">
                                                    <div class="mt-1 flex rounded-md shadow-sm">
                                                        <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="offers" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                </div>
                                                <div class="ml-3 text-sm leading-5">
                                                    <div class="mt-1 flex rounded-md shadow-sm">
                                                        <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" >
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="mt-4">
                                            <div class="flex items-start">
                                                <div class="flex items-center h-5">
                                                    <input id="offers" type="checkbox" class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out">
                                                </div>
                                                <div class="ml-3 text-sm leading-5">
                                                    <div class="mt-1 flex rounded-md shadow-sm">
                                                        <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" >
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
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button class="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue focus:bg-indigo-500 active:bg-indigo-600 transition duration-150 ease-in-out">
                                    Add
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    
</style>