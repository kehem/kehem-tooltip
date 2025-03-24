import Tooltip from './Tooltip.vue';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Tooltip', Tooltip);
});