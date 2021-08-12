const routes = [{
    path: '/serviceView/:id/:type',
    name: 'serviceView',
    component: () => import('@/views/myResource/serviceView/index.vue'),
},{
    path: '/marketView/:id/:type',
    name: 'marketView',
    component: () => import('@/views/myResource/marketView/index.vue'),
},{
    path: '/resourceView/:id/:type',
    name: 'resourceView',
    component: () => import('@/views/myResource/resourceView/index.vue'),
}]
export default routes;