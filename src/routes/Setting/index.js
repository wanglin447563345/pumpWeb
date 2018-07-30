import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/detail/setting',
    title: '设  置',
    component: dynamicWrapper(app, [import('./model')], ()=>import('./components'))
});

export default (app) => createRoute(app, routesConfig);
