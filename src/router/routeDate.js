const Layout = () => import('@/views/layout/layout.vue')
// const knowledgeMap = () => import('@/views/knowledgeMap/index.vue')
// const knowledgeMap = () => import('@/views/iop/handle/cannalTable.vue')
// const knowledgeMap = () => import('@/components/t/capital.vue')
// const knowledgeMap = () => import('@/views/platform/index.vue');
// const knowledgeMap = () => import('@/views/network/index.vue')
// const knowledgeMap = () => import('@/views/controlers/index.vue')
// const knowledgeMap = () => import('@/views/iop/media/index.vue')
const knowledgeMap = () => import('@/views/control/index.vue')
// import resource from './myResource/index';
// import table from './tableIndex/index';
import controls from './controls/index';
const single = [{
  path: "index",
  name: "index",
  component: knowledgeMap,
}]
// import control from './control/index'
// import network from './newwork/index'
// console.log(...resource)
export default {
  path: "/",
  component: Layout,
  redirect: '/index',
  // redirect: "/moreMenu/workTable",
  name: "main",
  children: [
    
    ...single,
    // ...controls
    // ...table
    // ...resource,
  ]
}