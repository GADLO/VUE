<script >
import { RouterLink, RouterView } from 'vue-router';
import HomeView from "@/views/HomeView.vue"

export default {
  components: {
    HomeView
  },
  setup() {

  }
}

</script>

<template>
  <header>标题</header>
  <RouterView></RouterView>
</template>

<style scoped>
header {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #1a1a1a;
  border-bottom: .1px solid #6b6868;
  color: #EBEBEB99;
  padding: 5px;
}
</style>
