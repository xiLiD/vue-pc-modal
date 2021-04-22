// import Layout from "@/views/layout/layout.vue";
const Layout = () => import('@/views/layout/layout.vue')
// const knowledgeMap = () => import('@/views/knowledgeMap/index.vue')
// const knowledgeMap = () => import('@/views/iop/activity/index.vue')
// const knowledgeMap = () => import('@/views/iop/audit/index.vue')
const knowledgeMap = () => import('@/views/iop/crm/product.vue')
console.log(knowledgeMap)
export default {
  path: "/",
  component: Layout,
  redirect: "/index",
  name: "main",
  children: [{
    path: "index",
    component: knowledgeMap,
    name: "Index",
    meta: {
      navbar: 1
    }
  }
  ]
}