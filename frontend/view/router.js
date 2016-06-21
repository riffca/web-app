function getPath(path){
    return routerPath + path;
}
let routerPath = './router';
let profilePath = getPath('/profile');
let authPath = getPath('/auth'); 
export default {
    '/': {
        name: 'index',
        component: require(routerPath + '/index')
    },
    '/contacts': {
        name: 'contacts',
        component: require(routerPath + '/contacts')
    },
    '/profile': {
        name: 'profile',
        component: require(profilePath + '/root.profile'),
        subRoutes: {
            // '/messages': {
            //     name: 'messagesProfile',
            //     component: require(profilePath + '/messages.profile'),
            // },
            '/:username': {
                name: 'userProfile',
                component: require(profilePath + '/user.profile'),
            },
            '/:username/:album': {
                name: 'albumProfile', 
                component: require(profilePath + '/album.profile')
            }
        }
    },
    '/auth': {
        name: 'auth',
        component: require(authPath + '/root.auth'),
        subRoutes: {
            '/signin': {
                name: 'signin',
                component: require(authPath + '/login.auth')
            },
            '/signup': {
                name: 'signup',
                component: require(authPath + '/signup.auth')
            }
        }
    }
};
