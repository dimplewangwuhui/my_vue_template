import store from '../store.js'
import httpServer from '@/service/auth'
import common from '@/utils/common'
const tokenkey = 'Access-Token';
const userKey = 'Auth-User';
const auth = {
    state: {
        user: common.toJS(store.get(userKey)),
        token: store.get(tokenkey),
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            store.set(tokenkey, token);
            state.token = token
        },
        SET_USER: (state, user) => {
            store.set(userKey, user);
            state.user = user
        },
    },
    actions: {
        // 登出
        Logout ({ commit }) {
            return new Promise((resolve, reject) => {
                httpServer.logout()
                    .then(() => {
                        commit('SET_USER', null);
                        let href = [window.parent.location.protocol, '//', window.parent.location.host, '/'].join('');
                        let loginurl = process.env.VUE_APP_SSO_URL + href;
                        window.location.href = loginurl;
                    }).catch(error => {
                    reject(error);
                })

            })
        },
        GetInfo ({ commit, state }) {
            return new Promise((resolve, reject) => {
                httpServer.getInfo(state.token)
                    .then(response => {
                        const data = response.data;
                        commit('SET_USER', data);
                        resolve(response);
                    }).catch(error => {
                    reject(error);
                })
            })
        }
    }
}

export default auth
