import {createRoutes} from '@/utils/core';
import ListLayout from '@/layouts/ListLayout';
import NotFound from '../Pages/404';
import List from './List'
import Add1 from './Add1'
import Add2 from './Add2'

const routesConfig = (app) => ([
    {
        path: '/pump/web/control',
        title: '控制器中心',
        component: ListLayout,
        indexRoute: '/pump/web/control/list',
        childRoutes: [
            List(app),
            Add1(app),
            Add2(app),
            NotFound()
        ]
    }
]);

export default app => createRoutes(app, routesConfig);