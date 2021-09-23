import {AUTH} from '~/data/constant/auth';
import {COOKIES} from '~/data/constant/keys';

const getMemberState = () => {
    return {
        findMemberId: '',
        mainPop: '',
        initImagePop: '',
        bodyStep: false,
        closePopupName: [],
        comparedResultText: '',
        bodies: {}
    };
};

export const state = () => {
    return getMemberState();
};

export const mutations = {

};

export const actions = {
    async fetchAuthorization({ state }) {
        console.log("state.accessToken", state.accessToken)
        // TODO accessToken 갱신 처리
        return {
          //  accessToken: state.accessToken || null
        }
    },
    async signUp({ commit }, payload) {
        try {
            const res = await this.$axios.post(`/api/members`, payload);
            return res;
        } catch (error) {
            console.error("error.response", error.response);
        }
    },
    async signIn({ commit, rootState }, payload) {
        try {
            this.$axios.defaults.headers.Authorization = `Basic ${AUTH.LOGIN_AUTHORIZATION_KEY}`;
            const res = await this.$axios.post(`http://localhost:8083/oauth/token`, jsonToForm(payload));
            const { access_token } = res.data;
            console.log("access_token = " + access_token)
            commit('setCookie', {
                key: COOKIES.ACCESS_TOKEN,
                value: access_token,
                expires: 365,
                secure: true
            }, { root: true });

            return res;
        } catch (error) {
            console.error("signIn >> error", error);
        }
    },
    async socialLogin({ commit, rootState }, payload) {
        try {
            this.$axios.defaults.headers.Authorization = `Basic ${AUTH.LOGIN_AUTHORIZATION_KEY}`;
            const res = await this.$axios.get(`http://localhost:8083/oauth2/authorize/${payload.provider}?redirect_uri=${payload.redirectUri}&callback=login`);
            const { access_token } = res.data;
            console.log("access_token = " + access_token)
            commit('setCookie', {
                key: COOKIES.ACCESS_TOKEN,
                value: access_token,
                expires: 365,
                secure: true
            }, { root: true });

            return res;
        } catch (error) {
            console.error("socialLogin >> error", error);
        }
    },
    async getMe({ commit, rootState }, payload) {
        try {
            this.$axios.defaults.headers.Authorization = `Bearer ${rootState.cookies[COOKIES.ACCESS_TOKEN]}`;
            const res = await this.$axios.get(`/api/members/me`);
            commit('setCookie', {
                key: COOKIES.ME,
                value: res.data,
                expires: 365,
                secure: true
            }, { root: true });

            return res;
        } catch (error) {
            console.error("error.response >>> getMe", error.response);
        }
    },
};

export const getters = {

    isAuthenticated(state, getters, rootState) {

        console.log("rootState.cookies[COOKIES.ME]", rootState.cookies)
        return !!(rootState.cookies[COOKIES.ME] && rootState.cookies[COOKIES.ME]);
    },
    getMe(state) {
      //  return JSON.parse(localStorage.me || '') || '';
    },
};

function jsonToForm(data) {
    const form = new FormData();
    for (var key in data) {
        form.append(key, data[key]);
    }
    return form;
}
