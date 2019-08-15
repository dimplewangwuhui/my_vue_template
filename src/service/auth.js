import Fetch from './http';
export default {
    logout (data) {
        return Fetch({
            method: 'post',
            url: '/bms/v1/user/bg/logout',
            data: data
        })
    },
    getInfo (data) {
        return Fetch({
            method: 'get',
            url: '/bms/v1/user/bg?Access-Token=' + data
        })
    }
}
