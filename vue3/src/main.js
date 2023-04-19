import App from './App.vue'


const { createApp } = Vue;


const Article = {
    data() {
        return {
            message: 'Hello World'
        }
    }
}


createApp(Article).mount('#app')


