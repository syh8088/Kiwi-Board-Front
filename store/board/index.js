import Vue from 'vue';
import {AUTH} from '~/data/constant/auth';
import {COOKIES} from '~/data/constant/keys';
import throttle from 'lodash.throttle';
import BoardsModel from "../../data/models/board/Boards";

const getMyClosetState = () => {
    return {

        totalPages: 0,
        totalElements: 0,
        number: 0,
        size: 0,
        mainBoards: [],
        mainBoard: {},

        boardLimit: 10,
        boardViewerCount: 0,
        hasMoreBoard: true,
    };
};

export const state = () => {
    return getMyClosetState();
};

export const mutations = {
    loadBoards(state, { mainBoardsResponse, reset }) {

        const boardsModel = new BoardsModel();
        boardsModel.setView({ ...mainBoardsResponse.boardResponses });
        console.log(boardsModel.toView());

        //console.log(mainBoardsResponse);
        if (reset) {
            Vue.set(state, 'mainBoards', mainBoardsResponse.boardResponses);
            Vue.set(state, 'hasMoreBoard', true);
        } else {
            Vue.set(state, 'mainBoards', state.mainClosets.concat(mainBoardsResponse.boardResponses));
            Vue.set(state, 'hasMoreBoard', (mainBoardsResponse.boardResponses.length >= state.boardLimit));
        }

        Vue.set(state, 'number', mainBoardsResponse.number);
        Vue.set(state, 'size', mainBoardsResponse.size);
        Vue.set(state, 'totalPages', mainBoardsResponse.totalPages);
        Vue.set(state, 'totalElements', mainBoardsResponse.totalElements);
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

            commit('loadBoards', {
                mainBoardsResponse: res.data,
                reset: payload.reset,
            });
        } catch (error) {
            console.error("error.response >> getClosets", error);
        }
    }, 2000),

};
