<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../../public/favicon.ico"
          alt=""
          width="32"
          height="32"
          class="d-inline-block align-text-top me-2"
        />
        Vue Assignment
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              @click="() => (this.atHomePage = true)"
              id="homeBtn"
              class="nav-link"
              :class="{ active: atHomePage }"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              @click="() => (this.atHomePage = false)"
              id="dragAndDropBtn"
              class="nav-link"
              :class="{ active: !atHomePage }"
              to="/dragdrop"
              >Drag & Drop</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      atHomePage: true,
    };
  },
  computed: {
    isAtHomePage() {
      return this.$route.name === "HomeView";
    },
  },
  mounted() {
    this.atHomePage = this.isAtHomePage;
  },
};
</script>
