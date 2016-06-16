let routePath = './view/router';
export default {
    '/': {
        name: 'index',
        component: require(routePath + '/index')
    },
    '/contacts': {
        name: 'contacts',
        component: require(routePath + '/contacts')
    },
    '/auth': {
        name: 'auth',
        component: require(routePath + '/auth'),
        subRoutes: {
            '/': {
                name: 'authIndex',
                component: {
                    template: `
						authIndex
    				`
                }
            },
            '/signin': {
                name: 'signin',
                component: {
                    template: `
						signin
    				`
                }
            },
            '/signup': {
                name: 'signup',
                component: {
                    template: `
						signup
    				`
                }
            }
        }
    }
};
