<template>
  <div class="container-fluid text-center">
    <div class="row p-5 justify-content-center">
      <div
        id="container1"
        @drop="onDrop($event, 1)"
        @dragover.prevent
        @dragenter.prevent
        class="col-md-5 col-xl-4"
      >
        <CardContainer title="List 1" :cards="this.store.getList1" />
      </div>
      <div
        id="container2"
        @drop="onDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent
        class="col-md-5 col-xl-4"
      >
        <CardContainer title="List 2" :cards="this.store.getList2" />
      </div>
    </div>
  </div>
</template>

<script>
import { useCardStateStore } from "../stores/cardState.js";
import CardContainer from "../components/CardContainer.vue";

export default {
  name: "DragDropView",
  components: { CardContainer },
  setup() {
    const store = useCardStateStore();
    return { store };
  },
  methods: {
    onDrop(e, belongsTo) {
      const cardID = e.dataTransfer.getData("cardID");
      const card = this.store.cards.find((card) => card.id == cardID);
      card.belongsTo = belongsTo;
    },
  },
};
</script>
