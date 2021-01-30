import Vue from 'vue';
import {AUTH} from '~/data/constant/auth';
import {COOKIES} from '~/data/constant/keys';
import throttle from 'lodash.throttle';

const getMyClosetState = () => {
    return {

        totalPages: 0,
        totalElements: 0,
        number: 0,
        size: 0,

        boardLimit: 10,

        closetViewerCount: 0,
        mainClosets: [],
        hasMoreBoard: true,
        mainCloset: {},
    };
};

export const state = () => {
    return getMyClosetState();
};

export const mutations = {
    loadBoards(state, { mainClosetsResponse, reset }) {
        if (reset) {
            Vue.set(state, 'mainClosets', mainClosetsResponse.wardrobeResponses);
            Vue.set(state, 'hasMoreCloset', true);
        } else {
            Vue.set(state, 'mainClosets', state.mainClosets.concat(mainClosetsResponse.wardrobeResponses));
            Vue.set(state, 'hasMoreCloset', (mainClosetsResponse.wardrobeResponses.length >= state.closetLimit));
        }

        Vue.set(state, 'currentPage', mainClosetsResponse.number);
        Vue.set(state, 'totalPages', mainClosetsResponse.totalPages);
        Vue.set(state, 'totalCount', mainClosetsResponse.totalElements);
    },
    loadBoard(state, { mainClosetResponse }) {

        const {
            id,
            name,
            image,
            subCategoryId,
            subCategoryName,
            registerType,
            sizeOptionName,
            wardrobeScmmValueResponses,
            measureItemResponses,
            subCategoryResponses,
            dmodelResponse
        } = mainClosetResponse;
        Vue.set(state, 'mainCloset', {
            id: id,
            name: name,
            image: image,
            subCategoryId: subCategoryId,
            subCategoryName: subCategoryName,
            registerType: registerType,
            sizeOptionName: sizeOptionName,
            wardrobeScmmValueResponses: wardrobeScmmValueResponses,
        });
        /* Vue.set(state, 'measureItems', measureItemResponses);
         Vue.set(state, 'categories', subCategoryResponses);
         Vue.set(state, 'dmodel', dmodelResponse);*/
    },
};

export const actions = {
    getBoards: throttle(async function ({ commit, state, rootState }, payload) {
        try {
            let data;
            if (payload && payload.reset) {
                data = {
                    offset: 1,
                    limit: state.boardLimit,
                };
            } else {
                //const lastPost = state.mainClosets[state.mainClosets.length - 1];
                data = {
                    offset: payload.page || 1,
                    limit: state.boardLimit,
                };
            }

            const res = await this.$axios.get(`/boards`, { params: data });
console.log(res.data)
         /*   commit('loadBoards', {
                mainClosetsResponse: res.data,
                reset: payload.reset,
            });*/
        } catch (error) {
            console.error("error.response >> getClosets", error);
        }
    }, 2000),

};
