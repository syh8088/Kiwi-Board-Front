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
            console.log(commit)
            console.log(payload)
            const res = await this.$axios.post(`/members`, payload);
            console.log(res )
            return res;
        } catch (error) {
            console.error("error.response", error.response);
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
