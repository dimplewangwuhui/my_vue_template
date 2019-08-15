import Cookie from 'js-cookie';
const isCookie = true;
export default {
    set (k, v) {
        if (!v && v !== 0) return this.remove(k);
        if (!isCookie && !!window.sessionStorage && typeof window.sessionStorage.setItem === 'function') {
            window.sessionStorage.setItem(k, v);
        } else {
            if (k === 'Access-Token') {
                let expires = new Date();
                expires.setTime(expires.getTime() + 30 * 60 * 1000); // 过期时间30分钟
                Cookie.set(k, v, {expires: expires});
            } else {
                Cookie.set(k, v);
            }
        }
    },
    get (k) {
        if (!isCookie && !!window.sessionStorage && typeof window.sessionStorage.getItem === 'function') {
            return window.sessionStorage.getItem(k);
        } else {
            return Cookie.get(k);
        }
    },
    remove (k) {
        if (!isCookie && !!window.sessionStorage && typeof window.sessionStorage.removeItem === 'function') {
            window.sessionStorage.removeItem(k);
        } else {
            Cookie.remove(k);
        }
    }
}
