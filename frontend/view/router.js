function getPath
(path) 
{
    return routerPath + path;
}
let routerPath = './router';
let profilePath = getPath('/profile');
let authPath = getPath('/auth');
let adminPath = getPath('/admin');
export default {
    '/auth': {
        name: 'Регистрация',
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
    },
    '/profile': {
        name: 'Профиль',
        component: require(profilePath + '/root.profile'),
        subRoutes: {
            '/messages': {
                name: 'messages',
                component: {
                    template: '<h2>Сообщения</h2>'
                }
            },
            '/posts': {
                name: 'posts',
                component: {
                    template: '<h2>Посты</h2>'
                }
            },
            '/projects': {
                name: 'projects',
                component: {
                    template: `<h2>Проекты</h2>`
                }
            }
        }
    },
    '/admin': {
        name: 'Админка',
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
};
