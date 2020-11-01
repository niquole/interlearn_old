<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <title>Laravel</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
    <!-- Styles -->
    <link rel="stylesheet" href="css/app.css" >
    
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #131313;
            color: #fff;
            
        }
        
    </style>
    
</head>
<body>
    <div id="app">
        <div class="container mx-10">
            <header class="py-6 mb-8">
                    <router-link to="/">
                        <img alt="InterLearn" src="/images/logo.png" style="width: 200px;">
                    </router-link>

            </header>
            
            <main class="flex">
                <aside class="w-1/5">
                    <section class="mb-10">
                        <h4 class="uppercase my-8">
                            <router-link class=""  active-class="lesson-color font-bold" to="/lessons"> lessons </router-link>
                        </h4>
                    
                    </section>
                    
                    <section>
                        <h5 class="uppercase my-10">
                            <router-link class="" active-class="quiz-color font-bold"  to="/quizzes"> quizes </router-link>
                        </h5>
                        
                    </section>

                    
                    <section>
                    <h5 class="uppercase my-10">
                        <router-link class="" active-class="text-purple-500 font-bold"  to="/create"> Create </router-link>
                    </h5>

                    </section>
                </aside>
                
                <div class="primary flex-1">
                    <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
    
    
    <script src="/js/app.js"></script>
</body>
</html>
