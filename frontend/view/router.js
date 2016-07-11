function getPath(path) {
    return routerPath + path;
}
let routerPath = './router';
let profilePath = getPath('/profile');
let authPath = getPath('/auth');
let adminPath = getPath('/admin');
export default {
    '/contacts': {
        name: 'contacts',
        component: require(routerPath + '/contacts')
    },
    '/admin': {
        name: 'admin',
        component: require(adminPath + '/root.admin'),
        subRoutes: {
            '/root': {
                name: 'root.admin',
                component: {
                    template: `1`
                }
            },
            '/content': {
                name: 'content.admin',
                component: {
                    template: `2`
                }
            },
            '/users': {
                name: 'users.admin',
                component: {
                    template: `3`
                }
            },
            '/statistic': {
                name: 'statistic.admin',
                component: {
                    template: `3`
                }
            }
        }
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
            '/login': {
                name: 'login',
                component: require(authPath + '/login.auth')
            },
            '/signup': {
                name: 'signup',
                component: require(authPath + '/signup.auth')
            }
        }
    }
};
