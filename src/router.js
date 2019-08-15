import Vue from  'vue';
import Router from 'vue-router';
import Layout from '@/layouts/layout';
import redirect from '@/layouts/redirect';
import store from '@/store';

const mvvm = () => import('@/views/mvvm');

Vue.use(Router);  //如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            component: Layout,
            children: [
                {
                    path: '/',
                    name: 'template',
                    component: redirect,
                    children: [
                        { path: '/', name: 'template', component: mvvm,  meta: {path: '/'}},
                    ]
                },
            ]
        }

    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

// function GetToken () {
//     var strUrl = window.location.href;
//     var token = null;
//     var index = strUrl.indexOf('token=');
//     if (index > 0) {
//         token = strUrl.substr(index + 6).split('&')[0];
//     }
//
//     if (token && token.indexOf('#/') > 0) {
//         token = token.substr(0, token.indexOf('#/'));
//     }
//     return token;
// }
// router.beforeEach((to, from, next) => {
//     let token = GetToken();
//     if (token) {
//         token = decodeURIComponent(decodeURI(token));
//         store.commit('SET_TOKEN', token);
//         next();
//     } else {
//         next();
//     }
//
// });
export default router;
