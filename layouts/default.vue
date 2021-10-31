<template>
    <div>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Careerfy</title>
        </head>

        <body>

            <!-- Wrapper -->
            <div class="careerfy-wrapper">


                <!-- Header -->
                <header id="careerfy-header" class="careerfy-header-one">
                    <div class="container">
                        <div class="row">
                            <aside class="col-md-2"> <nuxt-link to="/"><a href="javascript:void(0);" class="careerfy-logo"><img src="~/static/img/logo.png" alt=""></a></nuxt-link> </aside>
                            <aside class="col-md-6">
                                <nav class="careerfy-navigation">
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#careerfy-navbar-collapse-1" aria-expanded="false">
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div class="collapse navbar-collapse" id="careerfy-navbar-collapse-1">
                                        <ul class="navbar-nav">
                                            <li class="active"><a href="javascript:void(0);">Home</a>
                                                <ul class="sub-menu">
                                                    <nuxt-link to="/"><li><a href="javascript:void(0);">Home</a></li></nuxt-link>
                                                    <!--<li><a href="https://eyecix.com/html/careerfy-demos/hireright-demo/">Demo Hireright</a></li>
                                                    <li><a href="https://eyecix.com/html/careerfy-demos/jobshub-demo/">Demo Jobshub</a></li>
                                                    <li><a href="https://eyecix.com/html/careerfy-demos/belovedjobs/">Demo BelovedJobs</a></li>
                                                    <li><a href="index-five.html">Demo JobsOnline</a></li>
                                                    <li><a href="index-six.html">Demo JobSearch</a></li>
                                                    <li><a href="index-seven.html">Demo JobFinder</a></li>-->
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0);">Pages</a>
                                                <ul class="sub-menu">
                                                    <nuxt-link to="/board"><li><a href="javascript:void(0);">Board</a></li></nuxt-link>

                                                    <!--<li><a href="cv-packages.html">CV Packages</a></li>
                                                    <li><a href="faq.html">Faq's</a></li>
                                                    <li><a href="job-grid-full.html">Job Grid</a></li>
                                                    <li><a href="job-grid-with-filters.html">Job Grid W/filter</a></li>
                                                    <li><a href="job-listings.html">Job Listings</a></li>
                                                    <li><a href="job-detail.html">Job Detail</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="job-detail.html">Job Detail I</a></li>
                                                            <li><a href="job-detail-two.html">Job Detail II</a></li>
                                                            <li><a href="job-detail-three.html">Job Detail III</a></li>
                                                            <li><a href="job-detail-four.html">Job Detail IV</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="job-packages.html">Job Packages</a></li>-->
                                                </ul>
                                            </li>
                                            <!--<li><a href="#">For Candidates</a>
                                                <ul class="sub-menu">
                                                    <li><a href="candidate-dashboard-applied-jobs.html">Applied Jobs</a></li>
                                                    <li><a href="candidate-dashboard-changed-password.html">Changed Password</a></li>
                                                    <li><a href="candidate-dashboard-cv-manager.html">CV Manager</a></li>
                                                    <li><a href="candidate-dashboard-job-alert.html">Job Alert</a></li>
                                                    <li><a href="candidate-dashboard-profile-seting.html">Profile Setting</a></li>
                                                    <li><a href="candidate-dashboard-resume.html">Candidate Resume</a></li>
                                                    <li><a href="candidate-dashboard-saved-jobs.html">Saved Jobs</a></li>
                                                    <li><a href="candidate-listings.html">Candidate Listings</a></li>
                                                    <li><a href="candidate-grid.html">Candidate Grid</a></li>
                                                    <li><a href="candidate-detail.html">Candidate Detail</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="candidate-detail.html">Candidate Detail I</a></li>
                                                            <li><a href="candidate-detail-two.html">Candidate Detail II</a></li>
                                                            <li><a href="candidate-detail-three.html">Candidate Detail III</a></li>
                                                            <li><a href="candidate-detail-four.html">Candidate Detail IV</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="#">For Employers</a>
                                                <ul class="sub-menu">
                                                    <li><a href="employer-list.html">Employer List</a></li>
                                                    <li><a href="employer-grid.html">Employer Grid</a></li>
                                                    <li><a href="employer-detail.html">Employer Detail</a>
                                                        <ul class="sub-menu">
                                                            <li><a href="employer-detail.html">Employer Detail I</a></li>
                                                            <li><a href="employer-detail-two.html">Employer Detail II</a></li>
                                                            <li><a href="employer-detail-three.html">Employer Detail III</a></li>
                                                            <li><a href="employer-detail-four.html">Employer Detail IV</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="employer-dashboard-transactions.html">Transactions</a></li>
                                                    <li><a href="employer-dashboard-resumes.html">Employer Resumes</a></li>
                                                    <li><a href="employer-dashboard-profile-seting.html">Profile Setting</a></li>
                                                    <li><a href="employer-dashboard-pkgpayment.html">Package Payment</a></li>
                                                    <li><a href="employer-dashboard-packages.html">Packages</a></li>
                                                    <li><a href="employer-dashboard-newjob.html">Employer New Job</a></li>
                                                    <li><a href="employer-dashboard-manage-jobs.html">Menage Jobs</a></li>
                                                    <li><a href="employer-dashboard-confitmation.html">Employer Confitmation</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact-us.html">Contact</a></li>-->
                                        </ul>
                                    </div>
                                </nav>
                            </aside>
                            <aside class="col-md-4">
                                <div class="careerfy-right" >
                                    <ul class="careerfy-user-section" v-if="!IS_AUTHENTICATED">
                                        <li ><a class="careerfy-color careerfy-open-signin-tab" href="javascript:;" @click="onJobSearchModalSignupClick">Register</a></li>
                                        <li><a class="careerfy-color careerfy-open-signup-tab" href="javascript:;" @click="onJobSearchModalSigninClick">Sign in</a></li>
                                    </ul>
                                    <ul class="careerfy-user-section" v-else-if="IS_AUTHENTICATED">
                                        <li >Welcome {{ ME['id'] }}</li>
                                        <li ><a class="careerfy-color careerfy-open-signin-tab" href="javascript:;" @click="onLogoutClick">Logout</a></li>
                                    </ul>
                                    <!--<a href="#" class="careerfy-simple-btn careerfy-bgcolor"><span> <i class="careerfy-icon careerfy-arrows-2"></i> Post Job</span></a>-->
                                </div>
                            </aside>
                        </div>
                    </div>
                </header>
                <!-- Header -->

                <nuxt />

                <!-- Footer -->
                <footer id="careerfy-footer" class="careerfy-footer-one">
                    <div class="container">
                        <!-- Footer Widget -->
                        <div class="careerfy-footer-widget">
                            <div class="row">
                                <aside class="widget col-md-4 widget_contact_info">
                                    <div class="widget_contact_wrap">
                                        <a class="careerfy-footer-logo" href="index.html"><img src="~/static/img/footer-logo.png" alt=""></a>
                                        <p>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper. Sed coquat sapien faucibus quam.</p>
                                        <a href="#" class="careerfy-classic-btn careerfy-bgcolor">Learn more</a>
                                    </div>
                                </aside>
                                <aside class="widget col-md-3 widget_nav_manu">
                                    <div class="footer-widget-title"><h2>Quick Links</h2></div>
                                    <ul>
                                        <li><a href="#">Shortcodes</a></li>
                                        <li><a href="#">Job Page</a></li>
                                        <li><a href="#">Job Page Alternative</a></li>
                                        <li><a href="#">Resume Page</a></li>
                                        <li><a href="#">Blog</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                </aside>
                                <aside class="widget col-md-3 widget_nav_manu">
                                    <div class="footer-widget-title"><h2>For Candidates</h2></div>
                                    <ul>
                                        <li><a href="#">Browse Jobs</a></li>
                                        <li><a href="#">Browse Categories</a></li>
                                        <li><a href="#">Submit Resume</a></li>
                                        <li><a href="#">Candidate Dashboard</a></li>
                                        <li><a href="#">Job Alerts</a></li>
                                        <li><a href="#">My Bookmarks</a></li>
                                    </ul>
                                </aside>
                                <aside class="widget col-md-2 widget_nav_manu">
                                    <div class="footer-widget-title"><h2>For Employers</h2></div>
                                    <ul>
                                        <li><a href="#">Browse Candidates</a></li>
                                        <li><a href="#">Employer Dashboard</a></li>
                                        <li><a href="#">Add Job</a></li>
                                        <li><a href="#">Job Packages</a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                        <!-- Footer Widget -->
                        <!-- CopyRight -->
                        <div class="careerfy-copyright">
                            <p>Copyrights © 2018 All Rights Reserved by <a href="#" class="careerfy-color">EyeCix</a></p>
                            <ul class="careerfy-social-network">
                                <li><a href="#" class="careerfy-bgcolorhover fa fa-facebook"></a></li>
                                <li><a href="#" class="careerfy-bgcolorhover fa fa-twitter"></a></li>
                                <li><a href="#" class="careerfy-bgcolorhover fa fa-dribbble"></a></li>
                                <li><a href="#" class="careerfy-bgcolorhover fa fa-linkedin"></a></li>
                                <li><a href="#" class="careerfy-bgcolorhover fa fa-instagram"></a></li>
                            </ul>
                        </div>
                        <!-- CopyRight -->
                    </div>
                </footer>
                <!-- Footer -->

            </div>
            <!-- Wrapper -->

            <!-- Modal Signup Box -->
            <sign-up
                    :sign-up-fade-in="signUpFadeIn"
                    :modal="signUpModel"
                    @onJobSearchModalSignupClick="onJobSearchModalSignupClick"
                    @signUp="signUp"
            />

            <!-- ModalLogin Box -->
            <sign-in
                    :sign-in-fade-in="signInFadeIn"
                    :modal="signInModel"
                    :kakao-client-id="KAKAO_CLIENT_ID"
                    @onJobSearchModalSigninClick="onJobSearchModalSigninClick"
                    @signIn="signIn"
                    @socialLogin="socialLogin"
                    @socialLoginV2="socialLoginV2"
            />

        </body>
    </div>
</template>

<script>

    import { AUTH } from '~/data/constant/auth/';
    import { PROVIDER } from '~/data/constant/types/provider/provider';
    import SignUp from '~/components/member/SignUp';
    import SignIn from '~/components/member/SignIn';
    import {COOKIES} from '~/data/constant/keys';
    import { mapActions } from 'vuex';

    export default {
        components: {
            SignUp,
            SignIn,
        },
        created() {
        },
        async beforeMount() {

        },
        computed: {
            IS_AUTHENTICATED() {
                return this.$store.getters['member/isAuthenticated'] || false;
            },
            ME() {
                return this.$store.state.cookies[COOKIES.ME] || '';
            },
            KAKAO_CLIENT_ID() {
                return AUTH.KAKAO_CLIENT_ID.CLIENT_ID || '';
            },
        },
        data() {
            return {
                signUpFadeIn: false,
                signInFadeIn: false,
                signUpModel: {
                    email: '',
                    id: "",
                    name: "",
                    password: ""
                },
                signInModel: {
                    id: "",
                    password: ""
                },
            };
        },
        methods: {
            onJobSearchModalSignupClick() {
                this.signUpFadeIn = (!this.signUpFadeIn);
            },
            onJobSearchModalSigninClick() {
                this.signInFadeIn = (!this.signInFadeIn);
            },
            async signUp() {
                const res = await this.$store.dispatch('member/signUp', this.signUpModel);
                if (res && (res.status >= 200 && res.status <= 300)) {
                    this.signUpFadeIn = false;
                }
            },
            async signIn() {

                const data = {
                    username: this.signInModel.id,
                    password: this.signInModel.password,
                   // grant_type: 'password'
                };
                const res = await this.$store.dispatch('member/signIn', data);
                if (res && (res.status >= 200 && res.status <= 300)) {
                    await this.getMe();
                    this.signInFadeIn = false;
                }
            },
            async socialLogin() {

                const data = {
                    redirectUri: 'http://localhost:3000',
                    provider: 'kakao',
                };
                window.location = `http://localhost:8083/api/oauth/authorize/${data.provider}?redirectUri=${data.redirectUri}&callback=login`;

               // const res = await this.$store.dispatch('member/socialLogin', data);
               // console.log("res", res);
            },
            async socialLoginV2({ accessToken, refreshToken, expiresIn, provider }) {

                const now = new Date();
                const expiryDate = new Date(now.getTime() + expiresIn * 1000);

                console.log("expiryDate", expiryDate);
                const res = await this.$store.dispatch('member/socialLoginV2', {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    expiredAt: expiryDate,
                    provider: provider
                });

                console.log("res", res);

                if (res && (res.status >= 200 && res.status <= 300)) {
                    await this.getMe();
                    this.signInFadeIn = false;
                }
            },
            async getMe() {
                const resMe = await this.$store.dispatch('member/getMe', { isAuthenticated: true });
                if (resMe && resMe.status >= 200 && resMe.status <= 300) {

                }
            },
            ...mapActions({
                LOGOUT: 'fetchLogout',
            }),
            onLogoutClick() {
                this.LOGOUT();
                this.$router.push({ path: `/`});
            }

        }
    };
</script>

<style scoped>
</style>
