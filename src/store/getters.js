const getters = {
    sidebar: state => state.app.sidebar,
    user: state => state.auth.user,
    token: state => state.auth.token,
};

export default getters
