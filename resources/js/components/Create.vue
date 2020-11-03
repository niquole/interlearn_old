<template>
  <div>
    <h1 class="font-normal text-3xl leading-none">
      Create
    </h1>
<div class="choose">

  <router-link class="m-10" to="/" >Lesson</router-link>

  <router-link to="/">Quiz</router-link>
</div>


      <!--
        Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
        Read the documentation to get started: https://tailwindui.com/documentation
      -->
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
      
      
        <!-- //ADD A PAGE -->
        <div>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
              <div class="px-4 sm:px-0">
                <p class="mt-1 text-sm leading-5 text-gray-600">
                  Add a page. You can add multiple pages by clicking the add button.
                </p>
              </div>
            </div>
            <div class="mt-1 md:mt-0 md:col-span-2">
              <form action="#" method="POST" class="form-size">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                  <div class="mt-5 px-4 py-5 bg-white sm:p-6 rounded-md">
                    <div class="grid grid-cols-3 gap-6">
                      <div class="col-span-3 sm:col-span-2">
                        <label for="company_website" class="block text-sm font-medium leading-5 text-gray-700">
                          Tittle
                        </label>
                        <div class="mt-1 flex rounded-md shadow-sm">
                          <input id="company_website" class="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="">
                        </div>
                      </div>
                    </div>
        
                    <div class="mt-6">
                      <label for="about" class="block text-sm leading-5 font-medium text-gray-700">
                        Text
                      </label>
                      <div class="rounded-md shadow-sm">
                        <textarea id="about" rows="3" class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="text"></textarea>
                      </div>
                      <p class="mt-2 text-sm text-gray-500">
                        Brief description for your profile. URLs are hyperlinked.
                      </p>
                    </div>
      
                    <div class="mt-6">
                      <label class="block text-sm leading-5 font-medium text-gray-700">
                        Cover photo
                      </label>
                      <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <p class="mt-1 text-sm text-gray-600">
                            <button class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
                              Upload a file
                            </button>
                            or drag and drop
                          </p>
                          <p class="mt-1 text-xs text-gray-500">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <span class="inline-flex rounded-md shadow-sm">
                      <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                        Add page
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  </div>
  
</template>

<script>
  export default {};
</script>

<style lang="css" scoped>
  .form-size {
    margin-left: 5%;
    width: 50vw;
  }
  
  input, textarea {
    color: black;
  }

  .choose {
    margin-left: 75%;
    margin-bottom: 5%;
  }
</style>