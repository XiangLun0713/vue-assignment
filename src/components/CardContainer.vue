<template>
  <div class="container">
    <div class="bg-light border mb-5 px-4 rounded">
      <h5 class="py-2">{{ title }}</h5>
      <div :key="index" v-for="(card, index) in cards">
        <Card :card="card" :id="card.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "CardContainer",
  props: ["title", "cards"],
  components: {
    Card,
  },
};
</script>
