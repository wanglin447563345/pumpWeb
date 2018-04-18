import {dynamicWrapper, createRoute} from '@/utils/core';

const routesConfig = (app) => ({
    path: '/pump/detail/trouble',
    title: '历史故障记录',
    component: dynamicWrapper(app, [import('./model')], import('./components'))
});

export default (app) => createRoute(app, routesConfig);
