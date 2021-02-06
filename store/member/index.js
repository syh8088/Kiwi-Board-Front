import {AUTH} from '~/data/constant/auth';
import {COOKIES} from '~/data/constant/keys';


/*
const storageAccessToken = (() => {
    let storageData;
    try {
        storageData = localStorage.getItem('zeyo_accessToken');
        console.log("storageData", storageData)
        if (storageData) {
            storageData = JSON.parse(decodeURIComponent(atob(storageData)));
        }
    } catch (error) {
        console.log("에러??");
        console.error('storageAccessToken error', error);
    }
    return storageData;
})();*/

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
            const res = await this.$axios.post(`/members`, payload);
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
            console.error("login >> error", error);
        }
    },
};

export const getters = {

    isAuthenticated(state, getters, rootState) {
        //return !!(rootState.cookies[COOKIES] && rootState.cookies[COOKIES]);
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
