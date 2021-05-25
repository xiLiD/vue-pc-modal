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
  redirect: "/moreMenu/workTable",
  name: "main",
  children: [
    // {
    //   path: "worker",
    //   name: "worker",
    //   component: resolve => import('@/views/controlers/workTable/index.vue'),
    // },
    // 多栏 主页
    {
      path: "moreMenu",
      name: "moreMenu",
      component: resolve => import('@/views/controlers/index.vue'),
      children: [
        // 工作台
        {
          path: "workTable",
          name: "workTable",
          component: resolve => import('@/views/controlers/workTable/index.vue'),
        },
        // 帮助中心
        {
          path: 'help',
          name: 'help',
          component: resolve => import('@/views/controlers/help/index.vue')
        },
        // 新增公告
        {
          path: 'announceAdd',
          name: 'announceAdd',
          component: resolve => import('@/views/controlers/announce/add.vue')
        },
        // 更多公告
        {
          path: 'announceList',
          name: 'announceList',
          component: resolve => import('@/views/controlers/announce/list.vue')
        },
        // 快捷管理
        {
          path: 'administration',
          name: 'administration',
          component: resolve => import('@/views/controlers/administration/index.vue')
        },
        // 快捷导航
        {
          path: 'navagation',
          name: 'navagation',
          component: resolve => import('@/views/controlers/navagation/index.vue')
        },
        // 更多待办
        {
          path: 'auditList',
          name: 'auditList',
          component: resolve => import('@/views/controlers/audit/index.vue')
        },
        // 更多申请
        {
          path: 'activity',
          name: 'activity',
          component: resolve => import('@/views/controlers/activity/index.vue')
        },
        // 预警列表
        {
          path: 'warnList',
          name: 'warnList',
          component: resolve => import('@/views/controlers/warn/index.vue')
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