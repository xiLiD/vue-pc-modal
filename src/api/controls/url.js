export default {
    // 公告
    addData: "/notice/addData", // 新增数据
    editData :'/notice/editData', // 修改数据
    deleteData: '/notice/deleteData', // 删除或者批量删除 
    findSatisfatChnlInfo: '/notice/editData', // 受理渠道信息
    effectiveData: '/notice/effectiveData', // 获取实时通知渲染列表
    noticePage: '/notice/page',// 通知分页加模糊查询
    getNoticeType : '/notice/getNoticeType', // 获取活动状态
    // 帮助中心相关接口
    helpImport: '/helpCenter/add', // 帮助导入接口    
    getIndexinfo: '/helpCenter/getIndexinfo', // 获取首页前6条帮助介绍
    helpPage: '/helpCenter/page', // 查询帮助中心列表
    //快捷导航接口
    quickDelete : '/quickfunction/deleteData', // 删除快捷导航数据
    quickAdd: '/quickfunction/add', // 增加快捷导航数据
    quickList: '/quickfunction/list', // 获取快捷导航列表数据
    quickUpdate: '/quickfunction/update', // 修改快捷导航数据
    // 我的客群接口
    guestsPage: '/guests/page', // 我的客群查询接口
    // 标签相关接口
    labelGetTop: '/labeluser/gettop', // 获取标签使用top10   
    // 活动接口
    activityPage: '/activity/page', // 活动查询接口
    // 用户信息接口
    getUserinfo: '/system/getUserinfo', // 获取登录的个人信息
    // 用户画像接口
    systemPage: '/system/page', // 画像列表



    // 申请相关接口
    applicationMy: '/application/My', // 申请-我的申请查询接口
    NotApproval: '/application/NotApproval', // 申请-待审批查询接口    
    // 评论和留言相关接口
    questionAdd: '/question/add', // 留言或者评论请求接口
    questionPage: '/question/page', // 评论列表


};
