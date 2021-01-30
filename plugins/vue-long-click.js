import Vue from 'vue'
import { longClickDirective } from 'vue-long-click'

const longClickInstance = longClickDirective({delay: 400, interval: 200});
Vue.directive('longClick', longClickInstance);
