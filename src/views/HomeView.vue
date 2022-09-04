<template>
  <div class="container-fluid text-center">
    <div class="row py-5">
      <p class="display-6">Hello, this is the onboarding assignment!</p>
      <p class="lead">Current Time: {{ time }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    const date = new Date();
    this.time = date.toLocaleString();
  },
};
</script>

<style scoped></style>
