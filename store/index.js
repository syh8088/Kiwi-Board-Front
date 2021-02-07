import Vue from 'vue';
export const strict = false;
import {COOKIES} from '~/data/constant/keys';

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
    fetchInit(state) {
        const cookies = this.$cookies.getAll();
        Vue.set(state, 'cookies', cookies || {});

        const meInfo = state.cookies[COOKIES.ME] || '';
        if (meInfo) {
            Vue.set(state.cookies, COOKIES.ME, meInfo);
        }

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
        commit('fetchInit');
    },
    nuxtClientInit({ commit, state, dispatch }, { req })  {
        console.log('#######################nuxtClientInit#######################');
    },
    fetchLogout({ rootState, state, dispatch, commit })  {

        commit('removeCookie', {
            key: COOKIES.ACCESS_TOKEN
        });
        commit('removeCookie', {
            key: COOKIES.ME
        });
    },
};
