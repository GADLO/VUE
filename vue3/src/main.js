
// import App from './App.vue'


const { createApp } = Vue;


//组件逻辑对象模拟，组件的逻辑本质是一个对象
const Article = {
    data() {
        return {
            title: '组件逻辑',
            author: 'darren',
            dateTime: '2023-04-19',
            content: '组件逻辑的本质是对象',
            like: 0,
            isLogin: false,
            isFollow: false,
            myComment: '',
            commentList: []
        }
    },
    methods: {
        likeThisArticle() {
            this.like++;
        },

        followAction() {
            this.isFollow = true
        },

        submitComment() {
            if (this.myComment.length > 0) {
                this.commentList.push({
                    id: new Date().getTime(),
                    dateTime: new Date(),
                    content: this.myComment
                })
            }
            this.myComment = ''
        }
    }
}

// app.component('article', {
//     template: `
//     <div class="article">
//             <h1>{{title}}</h1>
//             <p>
//                 <span>{{author}} {{dateTime}}</span>
//             </p>
//             <p>
//                 <span>Like: {{like}}</span>

//                 <!-- v-on -> onclick/addEventListener 绑定事件处理函数-->
//                 <!-- <button v-on:click="likeThisArticle">Like</button> -->
//                 <!-- v-* 都是vue指令 -->
//                 <button v-if="isLogin" @click="likeThisArticle">Like</button>
//                 <button v-else disabled>Please Login First</button>
//             </p>
//             <p>
//                 <button v-if="!isFollow" @click="followAction">Follow</button>
//                 <button v-else disabled>isFollowed</button>
//             </p>
//             <!-- v-bind绑定属性 引号内部看作变量，vue会对它解析-->
//             <!-- <p v-bind:title="content" >{{content}} </p>-->
//             <p :title="content">{{content}} </p>
//             <div class="form">
//                 <!-- v-model ->oninput -> value -> myComment -->
//                 <input type="text" placeholder="please comment" v-model="myComment">
//                 <button @click="submitComment">Comment</button>
//             </div>
//             <div class="comment">
//                 <ul>
//                     <!-- 
//                         key in object 对象
//                         (key, index) in arr  数组
//                      -->
//                     <li v-for="item in commentList" :key="item.id">
//                         <p>
//                             <span>{{item.dateTime}}</span>
//                         </p>
//                         <p>
//                             <span>{{item.content}}</span>
//                         </p>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     `
// })

// createApp(Article).mount('#app')

// 全局注册组件
const ToDoList = {
    data() {
        return {
            todolist: [
                {
                    id: 1,
                    content: '123',
                    completed: false
                },
                {
                    id: 2,
                    content: '123',
                    completed: false
                },
                {
                    id: 3,
                    content: '123',
                    completed: false
                },
            ]
        }

    },
    methods: {
        removeTodo(id) {
            this.todolist = this.todolist.filter(item => item.id !== id)
        },

        addTodo(value) {
            console.log(this.todolist);
            this.todolist.push(
                {
                    id: new Date().getTime(),
                    content: value,
                    completed: false
                }
            )
        },

        changeCompleted(id) {
            this.todolist = this.todolist.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            })
        }
    }

}

// todolist组件化
// const app = createApp(ToDoList);
// app.component('todo-item', {
//     props: ['todo'],
//     template: `
//     <li>
//         <input 
//         type="checkbox" 
//       :checked="todo.completed"
//       @click="changeCompleted(todo.id)"
//         >
//         <span :style="
//         {
//             textDecoration:todo.completed ?'line-through':'none'
//         }
//         ">
//         {{todo.content}}
//         </span>
//         <button @click="removeTodo(todo.id)">remove</button>
//     </li>
//     `,
//     methods: {
//         changeCompleted(id) {
//             this.$emit('change-completed', id)
//         },

//         removeTodo(id) {
//             this.$emit('remove-todo', id)
//         },

//     }
// })
// app.component('todo-form', {
//     data() {
//         return {
//             inputValue: ''
//         }
//     },
//     template: `
//     <div class="form">
//         <input type="text" placeholder="type" v-model="inputValue">
//         <button @click="addTodo">add</button>
//     </div>
//     `,
//     methods: {
//         addTodo() {
//             console.log(123);
//             this.$emit('add-todo', this.inputValue)
//         }

//     }
// })

const MyTitle = {
    template: `
    <h1>
      <slot></slot>
    </h1>
      `
}

const MyAuthor = {
    template: `
    <p>
      <slot></slot>
    </p>
      `
}

const MyContent = {
    template: `
    <p>
      <slot></slot>
    <p>
      `
}

const App = {
    components: {
        MyTitle, MyAuthor, MyContent
    },

    data() {
        return {
            title: 'this is a title',
            author: 'xiaoye',
            content: 'this is content'
        }
    },
    template: `
        <div>
            <my-title>{{title}}</my-title>
            <my-author>{{author}}</my-title>
            <my-content>{{content}}</my-title>
        </div>

    `
}

const app = createApp(App);

app.mount('#app')


