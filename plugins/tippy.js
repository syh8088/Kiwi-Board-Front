import Vue from "vue";
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy, {
    interactive: true,
    theme: "light",
    animateFill: false,
    arrow: true,
    arrowType: "round",
    placement: "bottom",
    trigger: "click"
});
Vue.component("tippy", TippyComponent);
