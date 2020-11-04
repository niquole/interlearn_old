import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Lessons from './components/Lessons';
import Quizzes from './components/Quizzes';
import CreateLesson from './components/CreateLesson';
import CreateQuiz from './components/CreateQuiz';
import SingleLesson from  './components/SingleLesson';
import SingleQuiz from  './components/SingleQuiz';

import NotFound from './components/NotFound';




export default {
    mode: 'history',

    // linkActiveClass: "font-bold",

    routes: [
        {
            
            path: '*',

            component: NotFound

        },

        {
            
            path: '/',

            component: Home

        },
        
        {
            
            path: '/login',

            component: Login
            
        },

        {
            
            path: '/signup',

            component: SignUp
            
        },

        {
            
            path: '/lessons',

            component: Lessons
            
        },

        {
            
            path: '/quizzes',

            component: Quizzes
            
        },

        {
            
            path: '/create-lesson',

            component: CreateLesson
            
        },
        
        {
            
            path: '/create-quiz',

            component: CreateQuiz
            
        },

        {
            
            path: '/single-lesson',

            component: SingleLesson
            
        },

        {
            
            path: '/single-quiz',

            component: SingleQuiz
            
        }
    ]
};