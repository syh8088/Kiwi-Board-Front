import Vue from 'vue';
import throttle from 'lodash.throttle';
import {COOKIES} from '~/data/constant/keys';
import BoardsModel from "../../data/models/board/Boards";
import BoardModel from "../../data/models/board/Board";

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
        const boardsResponse = boardsModel.toView();

        console.log(boardsResponse);
        console.log(mainBoardsResponse);


        if (reset) {
            Vue.set(state, 'mainBoards', mainBoardsResponse.boardResponses);
            Vue.set(state, 'hasMoreBoard', true);
        } else {
            //Vue.set(state, 'mainBoards', state.mainClosets.concat(mainBoardsResponse.boardResponses));
            Vue.set(state, 'mainBoards', mainBoardsResponse.boardResponses);
            Vue.set(state, 'hasMoreBoard', (mainBoardsResponse.boardResponses.length >= state.boardLimit));
        }

        Vue.set(state, 'number', mainBoardsResponse.number);
        Vue.set(state, 'size', mainBoardsResponse.size);
        Vue.set(state, 'totalPages', mainBoardsResponse.totalPages);
        Vue.set(state, 'totalElements', mainBoardsResponse.totalElements);
    },
    loadBoard(state, { mainBoardResponse }) {
        const boardModel = new BoardModel();
        boardModel.setView(mainBoardResponse );
        const boardResponse = boardModel.toView();

        Vue.set(state, 'mainBoard', boardResponse);
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
                    title: payload.title || ''
                };
            } else {
                //const lastPost = state.mainBoards[state.mainBoards.length - 1];
                data = {
                    offset: payload.page || 1,
                    limit: state.boardLimit,
                    title: payload.title || ''
                };
            }

            const res = await this.$axios.get(`/api/boards`, { params: data });

            commit('loadBoards', {
                mainBoardsResponse: res.data,
                reset: payload.reset,
            });
        } catch (error) {
            console.error("error.response >> getBoards", error);
        }
    }, 2000),

    async getBoard({ commit, rootState }, payload) {
        try {
            this.$axios.defaults.headers['Content-Type'] = `application/json`;
            const res = await this.$axios.get(`/api/boards/${payload}`);

            commit('loadBoard', {
                mainBoardResponse: res.data
            });
        } catch (error) {
            console.error("error.response >> getBoard", error.response);
        }
    },

    async saveBoard({ commit, rootState }, payload) {
       // try {
console.log(rootState.cookies[COOKIES.ACCESS_TOKEN]);
            this.$axios.defaults.headers.Authorization = `Bearer ${rootState.cookies[COOKIES.ACCESS_TOKEN]}`;
            this.$axios.defaults.headers['Content-Type'] = `application/json`;
            await this.$axios.post(`/api/boards`, payload);
       // } catch (error) {
          //  console.error("error.response >> saveBoard", error.response);
       // }
    },

    async updateBoard({ commit, rootState }, payload) {
        try {

            const data = {
                title: payload.title,
                content: payload.content
            };

            this.$axios.defaults.headers.Authorization = `Bearer ${rootState.cookies[COOKIES.ACCESS_TOKEN]}`;
            this.$axios.defaults.headers['Content-Type'] = `application/json`;
            const res = await this.$axios.patch(`/api/boards/${payload.boardNo}`, data);

        } catch (error) {
            console.error("error.response >> updateBoard", error.response);
        }
    },

    async deleteBoard({ commit, rootState }, payload) {
        try {

            this.$axios.defaults.headers.Authorization = `Bearer ${rootState.cookies[COOKIES.ACCESS_TOKEN]}`;
            this.$axios.defaults.headers['Content-Type'] = `application/json`;
            const res = await this.$axios.delete(`/api/boards/${payload.boardNo}`);

        } catch (error) {
            console.error("error.response >> updateBoard", error.response);
        }
    },
};
