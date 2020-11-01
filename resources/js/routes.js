import Home from './components/Home';
import Login from './components/Login';
import Lessons from './components/Lessons';
import Quizzes from './components/Quizzes';
import Create from './components/Create';



export default {
    mode: 'history',

    // linkActiveClass: "font-bold",

    routes: [
        {
            
            path: '/',

            component: Home

        },
        
        {
            
            path: '/login',

            component: Login
            
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
            
            path: '/create',

            component: Create
            
        }
    ]
};