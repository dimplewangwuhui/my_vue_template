import store from '../store.js'

const app = {
    state: {
        sidebar: {
            status: !!~~store.get('sidebarStatus'),
        },
    },
    mutations: {
        EXPAND_SIDEBAR: state => {
            store.set('sidebarStatus', 0);
            state.sidebar.status = 0
        },
        COLLAPSE_SIDEBAR: state => {
            store.set('sidebarStatus', 1);
            state.sidebar.status = 1
        },
        TOGGLE_SIDEBAR: state => {
            state.sidebar.status = !state.sidebar.status;
            if (state.sidebar.status) {
                store.set('sidebarStatus', 1)
            } else {
                store.set('sidebarStatus', 0)
            }
        }
    },
    actions: {
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },
        ExpandSideBar: ({ commit }) => {
            commit('EXPAND_SIDEBAR')
        },
        CollapseSideBar: ({ commit }) => {
            commit('COLLAPSE_SIDEBAR')
        }
    }
};

export default app
