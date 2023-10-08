<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <search-input :placeholder="placeholder" :maxlength="maxLength"></search-input>
    <router-view />
    <my-tab></my-tab>
  </div>
</template>

<script>
import MyHeader from '@/components/Header';
import MyTab from '@/components/Tab';
import SearchInput from '@/components/SearchInput'

import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyTab,
    SearchInput
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();

    // router.push('/day');


    watch(() => {
      return router.currentRoute.value.name;
    }, (value) => {
      store.commit('setHeaderTitle', value);
      store.commit('setPlaceholder', value);

      // console.log(state);
    })


    return computed(() => state).value;

  }
}
</script>

<style lang="scss">
#app {
  padding-top: 30px;
  height: 87vh;
  overflow: auto;
  margin: 0 auto;


}

::-webkit-scrollbar {
  display: none;
  /* Chrome Safari */
}
</style>
