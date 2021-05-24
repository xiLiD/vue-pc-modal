// import Layout from "@/views/layout/layout.vue";
const Layout = () => import('@/views/layout/layout.vue')
// const knowledgeMap = () => import('@/views/knowledgeMap/index.vue')
// const knowledgeMap = () => import('@/views/iop/activity/index.vue')
// const knowledgeMap = () => import('@/views/control/index.vue')
// const knowledgeMap = () => import('@/views/network/components/answer/answer.vue')
// const knowledgeMap = () => import('@/views/controlers/announcement/index.vue')
const knowledgeMap = () => import('@/views/controlers/index.vue')
// console.log(knowledgeMap)
export default {
  path: "/",
  component: Layout,
  redirect: "/worker",
  name: "main",
  children: [
    {
      path: "worker",
      name: "worker",
      component: resolve => import('@/views/controlers/workTable/index.vue'),
      children: [{
        path: 'home',
        name: 'home',
        component: resolve => import('@/views/controlers/help/index.vue')
      },
      {
        path: 'help',
        name: 'help',
        component: resolve => import('@/views/controlers/help/index.vue')
      },
      {
        path: 'announcement',
        name: 'announcement',
        component: resolve => import('@/views/controlers/announcement/index.vue')
      },
      {
        path: 'administration',
        name: 'administration',
        component: resolve => import('@/views/controlers/administration/index.vue')
      },
      {
        path: 'navagation',
        name: 'navagation',
        component: resolve => import('@/views/controlers/navagation/index.vue')
      },
      {
        path: 'iframe',
        name: 'iframe',
        component: resolve => import('@/views/controlers/iframe/index.vue')
      },
      ]
    }
  ]
}