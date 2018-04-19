import {createRoutes} from '@/utils/core';
import BaseLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import DetailLayout from '@/layouts/DetailLayout';
import NotFound from './Pages/404';
import Login from './Login';
import Register from './Register'
import ResetPassword from './ResetPassword'
import Home from './Home';
import UserInfo from './UserInfo';
import EditPassword from './EditPassword'
import List_Add from './List_Add'
import Status from './Status'
import Trouble from './Trouble'
import Run from './Run'
import Setting from './Setting'

const routesConfig = (app) => ([
  {
    path: '/',
    title: '登录',
    indexRoute: '/pump/user/login',
    component: UserLayout,
    childRoutes: [
        Login(app),
        Register(app),
        ResetPassword(app),
        NotFound()
    ]
  }, {
    path: '/pump/web',
    title: '系统中心',
    component: BaseLayout,
    indexRoute: '/pump/web/home',
    childRoutes: [
        Home(app),
        UserInfo(app),
        EditPassword(app),
        List_Add(app),
        NotFound()
    ]
  },{
        path: '/pump/detail',
        title: '系统中心',
        component: DetailLayout,
        indexRoute: '/pump/detail/status',
        childRoutes: [
            Status(app),
            Trouble(app),
            Run(app),
            Setting(app),
            NotFound()
        ]
    }
]);

export default app => createRoutes(app, routesConfig);