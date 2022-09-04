<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { useCardStateStore } from "./stores/cardState.js";

export default {
  components: {
    Navbar,
  },
  setup() {
    const store = useCardStateStore();
    store.fetchInitialListData();
    return { store };
  },
};
</script>

<style></style>
