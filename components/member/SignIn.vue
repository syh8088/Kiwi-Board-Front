<template>

    <!-- fade fade-in -->
    <div class="careerfy-modal fade careerfy-typo-wrap" v-bind:class="MODAL_SWITCH_CLASS" id="JobSearchModalSignin">
        <div class="modal-inner-area">&nbsp;</div>
        <div class="modal-content-area">
            <div class="modal-box-area">

                <div class="careerfy-modal-title-box">
                    <h2>Login to your account</h2>
                    <span class="modal-close" @click="modalClose"><i class="fa fa-times"></i></span>
                </div>
                <!--<form>-->
<!--                    <div class="careerfy-box-title">
                        <span>Choose your Account Type</span>
                    </div>
                    <div class="careerfy-user-options">
                        <ul>
                            <li class="active">
                                <a href="#">
                                    <i class="careerfy-icon careerfy-user"></i>
                                    <span>Candidate</span>
                                    <small>I want to discover awesome companies.</small>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="careerfy-icon careerfy-building"></i>
                                    <span>Employer</span>
                                    <small>I want to attract the best talent.</small>
                                </a>
                            </li>
                        </ul>
                    </div>-->
                    <div class="careerfy-user-form">
                        <ul>
                            <li>
                                <label>Id:</label>
                                <input value="Enter Your Id" v-model="MODAL['id']" type="text">
                                <i class="careerfy-icon careerfy-mail"></i>
                            </li>
                            <li>
                                <label>Password:</label>
                                <input value="Enter Password" v-model="MODAL['password']" type="password" style="width: 100%;">
                                <i class="careerfy-icon careerfy-multimedia"></i>
                            </li>
                            <li>
                                <input type="submit" @click="signIn" value="Sign In">
                            </li>
                        </ul>
                        <div class="clearfix"></div>
                        <div class="careerfy-user-form-info">
                            <p>Forgot Password? | <a href="javascript:void(0);">Sign Up</a></p>
                            <!--<div class="careerfy-checkbox">
                                <input type="checkbox" id="r10" name="rr" />
                                <label for="r10"><span></span> Remember Password</label>
                            </div>-->
                        </div>
                    </div>
                    <div class="careerfy-box-title careerfy-box-title-sub">
                        <span>Or Sign In With</span>
                    </div>
                    <div class="clearfix"></div>
                    <ul class="careerfy-login-media">


                        <li style="cursor: pointer;">
                            <KakaoLogin
                                    :api-key="kakaoClientId"
                                    image="kakao_account_login_btn_large_wide"
                                    :on-success="socialLoginV2"
                                    :on-failure="onKaKaoFailure"
                            />
                        </li>

<!--                      <div style="cursor: pointer;" @click="onclickKaKaoLogin">-->
<!--                        <img src="~/static/img/social/kakao_login_medium_narrow.png">-->
<!--                      </div>-->

                        <!--<li @click="socialLogin"><a href="javascript:void(0);"><i class="fa fa-kakao"></i> Sign In with KaKao</a></li>-->


<!--                        <li><a href="javascript:void(0);"><i class="fa fa-facebook"></i> Sign In with Facebook</a></li>
                        <li><a href="javascript:void(0);" data-original-title="google"><i class="fa fa-google"></i> Sign In with Google</a></li>
                        <li><a href="javascript:void(0);" data-original-title="twitter"><i class="fa fa-twitter"></i> Sign In with Twitter</a></li>
                        <li><a href="javascript:void(0);" data-original-title="linkedin"><i class="fa fa-linkedin"></i> Sign In with LinkedIn</a></li>-->
                    </ul>
               <!-- </form>-->

            </div>
        </div>
    </div>
</template>

<script>

    import KakaoLogin from 'vue-kakao-login'
    import { PROVIDER } from '~/data/constant/types/provider/provider';

    export default {
        components: {
            KakaoLogin,
        },
        name: 'Sign-In',
        inject: ['$validator'],
        props: {
            signInFadeIn: {
                type: Boolean,
                default: () => ''
            },
            modal: {
                type: Object,
                default: () => {}
            },
            kakaoClientId: {
                type: String,
                default: () => ''
            },
        },
        computed: {
            MODAL() {
                return this.modal || {};
            },
            MODAL_SWITCH_CLASS() {
                // return () => {
                let modalClassName = '';

                if (this.signInFadeIn) {
                    modalClassName = `fade-in`;
                } else {
                    modalClassName = `fade`;
                }
                return {
                    [modalClassName]: true
                }
                //};
            },


        },
        methods: {
            modalClose() {
                this.$emit('onJobSearchModalSigninClick');
            },
            signIn() {
                this.$emit('signIn');
            },
            socialLogin() {
                this.$emit('socialLogin');
            },
            socialLoginV2(data) {
                this.$emit('socialLoginV2', {
                    accessToken: data.access_token,
                    refreshToken: data.refresh_token,
                    expiresIn: data.expires_in,
                    provider: PROVIDER.KAKAO
                });
            },
            onKaKaoFailure(data) {
            },
        },
    }
</script>

<style>

</style>
