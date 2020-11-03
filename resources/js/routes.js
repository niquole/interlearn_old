import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Lessons from './components/Lessons';
import Quizzes from './components/Quizzes';
import Create from './components/Create';
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
            
            path: '/create',

            component: Create
            
        }
    ]
};