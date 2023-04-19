import App from './App.vue'

// new Vue({
//     render: h => h(App)
// }).$mount('#app')

const { createApp } = new Vue

const Article = {
    data() {
        return {
            message: 'Hello'
        }
    }
}

createApp(Article).mount('#app')