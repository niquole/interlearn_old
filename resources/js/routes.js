import Home from './components/Home';
import Login from './components/Login';


export default {
    mode: 'history',

    routes: [
        {
            
            path: '/',

            component: Home

        },
        
        {
            
            path: '/login',

            component: Login
            
        }
    ]
}