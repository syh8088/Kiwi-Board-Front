import Vue from 'vue'
import * as VeeValidate from 'vee-validate';

import { extend } from "vee-validate";
import ko from 'vee-validate/dist/locale/ko.js'
import { getRequiredErrorMassege, josa } from '../lib/util/common';

ko.attributes.email = '이메일'
ko.attributes.title = '제목'
ko.attributes.phone = '연락처'
ko.attributes.content = '내용'
ko.messages.email = (field) => `올바른 이메일 형식이어야 합니다.`
ko.messages.numeric = (field) => `숫자만 입력이 가능합니다!`
ko.messages.url = (field) => `유효한 url이 아닙니다!`
ko.messages.included = (field) => `${field}를 선택해주세요!`
ko.messages.max = (field, e) => `${field}은/는 ${e[0]}자 이내로 입력 할수 있습니다!`
ko.messages.between = (field, e) => `${field} 입력 가능범위:${e[0]}~${e[1]}`

ko.messages.required = (field) => `${getRequiredErrorMassege(field)}`
ko.messages.decimal = (field) => `${getRequiredErrorMassege(field)}`

const config = {
    locale: 'ko',
    dictionary: {
        ko
    },
    inject: true
};

Vue.use(VeeValidate, config);

new Vue({
    created() {

        this.$validator.extend('privacyPolicyCheckBoxRequired', {
            getMessage(field, val) {
                return '이용약관과 개인정보 취급방침에 동의 해야 합니다.'
            },
            validate(value, field) {

                console.log("this", this)
                console.log("value", value)
                console.log("field", field)
                return false;
            }
        });

        this.$validator.extend('isNumber', {
            getMessage(field, val) {
                return '숫자만 입력해주세요!'
            },
            validate(value, field) {
                value = String(value).replace(/^\s+|\s+$/g, "");

                let regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;

                if( regex.test(value) ){
                    return !isNaN(value);
                }else{ return false;  }
            }
        });

        this.$validator.extend('oneDecimal', {
            getMessage(field, val) {
                return '소수점 한자리만 입력해주세요!'
            },
            validate(value, field) {
                if (value.indexOf('.') !== -1) {
                    let tLength = value.substring(value.indexOf('.') + 1);
                    return (tLength.length <= 1);
                } else {
                    return true;
                }
            }
        });

        this.$validator.extend('hangeulOrEnglish', {
            getMessage(field, val) {
                return '이름은 한글 또는 영문만 입력이 가능합니다.(특수문자, 공백 불가)'
            },
            validate(value, field) {
                let regexEnglish = /^[a-z|A-Z|\*]+$/;
                let regexHangul = /^[ㄱ-ㅎ|가-힣|\*]+$/;
                return regexEnglish.test(value) || regexHangul.test(value);
            }
        });

        this.$validator.extend('test_validation_rule', {
            validate(value, [args]) {
                console.log('validate', args, value)
                var p = document.createElement('p'),
                    node = document.createTextNode('validate ' + args + ' ' + value)
                p.appendChild(node)
                document.getElementById('validations').appendChild(p)
                return Number(value) !== -1 && value !== '' && value != null
            },
            getMessage(field) {
                return 'Validation failed'
            }
        })
    },
});

