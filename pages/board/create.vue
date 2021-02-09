<template>
    <div>

        <!-- SubHeader -->
        <div class="careerfy-subheader careerfy-subheader-without-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="careerfy-page-title">
                            <h1>Board</h1>
                            <!--<p>Thousands of prestigious employers for you, search for a recruiter right now.</p>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="careerfy-breadcrumb">
                <ul>
                    <li><nuxt-link to="/"><a href="javascript:void(0);">Home</a></nuxt-link></li>
                    <li><a href="javascript:void(0);">Pages</a></li>
                    <li><nuxt-link to="/board">Board</nuxt-link></li>
                </ul>
            </div>
        </div>
        <!-- SubHeader -->

        <!-- Main Content -->
        <div class="careerfy-main-content">

            <!-- Main Section -->
            <div class="careerfy-main-section careerfy-dashboard-fulltwo">
                <div class="container">
                    <div class="row">

                        <div class="careerfy-column-9" style="width: 100%;">
                            <div class="careerfy-typo-wrap">
                                <!--<form class="careerfy-employer-dasboard">-->

                                    <div class="careerfy-employer-box-section">
                                        <div class="careerfy-profile-title"><h2>Welcome</h2></div>
                                        <ul class="careerfy-row careerfy-employer-profile-form">
                                            <li class="careerfy-column-6" style="width: 100%;">
                                                <label>title *</label>
                                                <input v-model="MAIN_BOARD['title']" type="text">
                                            </li>

                                            <li class="careerfy-column-12">
                                                <label>Content *</label>
                                                <textarea v-model="MAIN_BOARD['content']"></textarea>
                                            </li>
                                        </ul>
                                    </div>

                                    <input type="submit" class="careerfy-employer-profile-submit" value="Save" @click="MAIN_BOARD['boardNo'] ? updateBoard() : saveBoard()">
                                <!--</form>-->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- Main Section -->

        </div>
        <!-- Main Content -->

    </div>
</template>

<script>
    import {COOKIES} from '~/data/constant/keys';

    export default {
        name: 'board-create',
        middleware: [

        ],
        components: {
        },
        props: {
        },

        data() {
            return {
                model: {
                    title: '',
                    content: "",
                },
            };
        },

        computed: {
            ME() {
                return this.$store.state.cookies[COOKIES.ME] || '';
            },
            MAIN_BOARD() {
                return this.$store.state.board.mainBoard || {};
            }
        },
        async fetch({ store, route }) {
            if (route.query && route.query['boardNo']) {
                await store.dispatch('board/getBoard', route.query['boardNo']);
            } else {
                store.state.board.mainBoard = {};
            }
        },
        beforeMount() {

        },
        methods: {
            async saveBoard() {

                const data = {
                    title: this.MAIN_BOARD['title'],
                    content: this.MAIN_BOARD['content']
                };
                await this.$store.dispatch(`board/saveBoard`, data);
                this.$router.push({ path: `/board` });
            },
            async updateBoard() {

                const data = {
                    boardNo: this.MAIN_BOARD['boardNo'],
                    title: this.MAIN_BOARD['title'],
                    content: this.MAIN_BOARD['content'],
                };

                const res = await this.$store.dispatch('board/updateBoard', data);
                this.$router.push({ path: `/board` });
            },
        }
    };
</script>

<style scoped>
</style>
