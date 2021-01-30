import Vue from 'vue';
export const strict = false;

const getDefaultState = () => {
    return {
        NODE_ENV: process.env.NODE_ENV,
        apiURI: process.env.apiURI,
        wwwURI: process.env.wwwURI,
        accessToken: null,
        cookies: {},
    };
};

export const state = () => {
    return getDefaultState();
};

export const mutations = {
    fetchInit(state, {  }) {

    },
    setCookie(state, { key, value, expires, secure = false }) {
        this.$cookies.set(key, value, Object.assign({}, {
            path: '/',
            //domain: document.domain, // state.cookieDomain,
            secure: state.NODE_ENV === 'production' && secure,
        }, expires ? { maxAge: 60 * 60 * 24 * expires } : {}));

        //if (!state.cookies[key])
        Vue.set(state.cookies, key, value);
    },
    removeCookie(state, { key }) {
        this.$cookies.remove(key);
        Vue.delete(state.cookies, key);
    },
};

export const actions  =  {
    async nuxtServerInit({ commit, state, dispatch }, context) {
        console.log("#######################nuxtServerInit#######################");

    },
    nuxtClientInit({ commit, state, dispatch }, { req })  {
        console.log('#######################nuxtClientInit#######################');
    },
};
