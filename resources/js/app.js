require('./bootstrap');

window.Vue = require('vue');

Vue.component('my-thought-component', require('./components/MyThoughtComponent.vue').default);
Vue.component('thought-component', require('./components/ThoughtComponent.vue').default);
Vue.component('form-component', require('./components/FormComponent.vue').default);

const app = new Vue({
    el: '#app',
});
