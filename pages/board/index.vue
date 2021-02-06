<template>
    <div>

        <!-- SubHeader -->
        <div class="careerfy-subheader careerfy-subheader-without-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="careerfy-page-title">
                            <h1>Companies</h1>
                            <p>Thousands of prestigious employers for you, search for a recruiter right now.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="careerfy-breadcrumb">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pages</a></li>
                    <li>Candidates</li>
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
                                <div class="careerfy-employer-dasboard">
                                    <div class="careerfy-employer-box-section">
                                        <!-- Profile Title -->
                                        <div class="careerfy-profile-title">
                                            <h2>Transactions</h2>
                                            <form class="careerfy-employer-search">
                                                <input value="Search orders" onblur="if(this.value == '') { this.value ='Search orders'; }" onfocus="if(this.value =='Search orders') { this.value = ''; }" type="text">
                                                <input type="submit" value="">
                                                <i class="careerfy-icon careerfy-search"></i>
                                            </form>
                                        </div>

                                        <!-- Transactions -->
                                        <div class="careerfy-employer-transactions-wrap">
                                            <div class="careerfy-employer-transactions">

                                                <div class="careerfy-table-layer careerfy-transactions-thead">
                                                    <div class="careerfy-table-row">
                                                        <div class="careerfy-table-cell">Board Number</div>
                                                        <div class="careerfy-table-cell">title</div>
                                                        <div class="careerfy-table-cell">Writer</div>
                                                        <div class="careerfy-table-cell">CreatedAt</div>
<!--                                                        <div class="careerfy-table-cell">Payment Mode</div>
                                                        <div class="careerfy-table-cell">Satus</div>-->
                                                    </div>
                                                </div>
                                                <div class="careerfy-table-layer careerfy-transactions-tbody" v-for="(data, index) in MAIN_BOARDS" :key="index">
                                                    <div class="careerfy-table-row">
                                                        <div class="careerfy-table-cell">#{{ data['boardNo'] }}</div>
                                                        <div class="careerfy-table-cell" @click="toBoardDetail({ data: data })"><span>{{ data['title'] }}</span></div>
                                                        <div class="careerfy-table-cell"><small>{{ data['memberResponse']['id'] }}</small></div>
                                                        <div class="careerfy-table-cell">{{ data['createdAt'] }}</div>
<!--                                                        <div class="careerfy-table-cell">Bank Transfer</div>
                                                        <div class="careerfy-table-cell"><i class="fa fa-circle"></i> Successfull</div>-->
                                                    </div>
                                                </div>

                                            </div>
                                        </div>


                                        <!-- Pagination -->
                                        <div class="careerfy-pagination-blog">
                                            <ul class="page-numbers">
                                                <li><a class="prev page-numbers" href="#"><span><i class="careerfy-icon careerfy-arrows4"></i></span></a></li>
                                                <li><span class="page-numbers current">01</span></li>
                                                <li><a class="page-numbers" href="#">02</a></li>
                                                <li><a class="page-numbers" href="#">03</a></li>
                                                <li><a class="page-numbers" href="#">04</a></li>
                                                <li><a class="next page-numbers" href="#"><span><i class="careerfy-icon careerfy-arrows4"></i></span></a></li>
                                            </ul>
                                        </div>

                                        <input type="submit" class="careerfy-employer-profile-submit" value="Writing" @click="createBoard">
                                    </div>
                                </div>
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

    export default {
        name: 'board-list',
        middleware: [

        ],
        components: {
        },
        props: {
        },

        data: () => ({
        }),

        computed: {
            MAIN_BOARDS() {
                return this.$store.state.board.mainBoards || [];
            }
        },
        async fetch({ store }) {
            await store.dispatch('board/getBoards', { reset: true });
        },
        beforeMount() {

        },
        methods: {
            toBoardDetail({ data }) {
                this.$router.push({ path: `/board/` + data['boardNo'] });
            },
            createBoard() {
                this.$router.push({ path: `/board/create` });
            }
        }
    };
</script>

<style scoped>
</style>
