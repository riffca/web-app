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
    '*': {
        component: {
            template: `<h1>Страница не найдена</h1>`
        }
    },
    '/auth': {
        auth: false,
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
    '/user': {
        auth: true,
        name: 'user',
        component: require(userPath + '/root.user'),
        subRoutes:{
            '/:userId': {
                name: 'userPage',
                component: require(userPath + '/user-page'),
                subRoutes: {
                    '/posts':{
                        name:'userPosts',
                        component: require(userPath + '/user-posts')
                    },
                    '/projects':{
                        name:'userProjects',
                        component: require(userPath + '/user-projects')
                    }
                }
            }
        }
    },
    '/profile': {
        auth: true,
        name: 'Профиль',
        component: require(profilePath + '/root.profile'),
        subRoutes: {
            '/messages': {
                name: 'Сообщения',
                component: require(profilePath + '/message/messages.profile')
            },
            '/posts': {
                name: 'Посты',
                component: require(profilePath + '/post/posts.profile')
            },
            '/projects': {
                name: 'Проекты',
                component: require(profilePath + '/project/projects.profile')
            }
        }
    },
    '/admin': {
        auth: true,
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
