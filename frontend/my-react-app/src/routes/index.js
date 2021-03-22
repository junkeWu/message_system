import Login from "../pages/login/index";
import Index from "../pages/admin/dashboard/index";
import ListMessage from "../pages/admin/message/ListMessage";
import EditMessage from "../pages/admin/message/EditMessage";
import PageNotFound from "../pages/PageNotFound";


export const mainRouter = [
    {
        path: '/login',
        component: Login
    }, 
    {
         path: '/404',
        component: PageNotFound
    }
];

export const adminRouter = [
{
    path: '/admin/dashboard',
    component: Index,
    isShow: true,
    title: "首页",
    icon: "PieChartFilled"
},
{
    path: '/admin/messages',
    component: ListMessage,
    exact: true,
    isShow: true,
    title: "留言管理",
    icon: "AliwangwangFilled"
},
{
    path: '/admin/message/editMessage/:id?',
    component: EditMessage,
    isShow: false,
    title: "messageEdit"
}
];  
