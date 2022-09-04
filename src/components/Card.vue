<template>
  <div
    :id="id"
    draggable="true"
    @dragstart="onDrag($event, card)"
    @dragover.stop
    class="container bg-white mb-3 border rounded text-start"
  >
    <div class="row p-3">
      <p class="m-0 nameParagraph">
        Name: {{ !!card.name ? card.name : "defaultName" }}
      </p>
      <p class="m-0 genderParagraph" v-if="!!card.gender">
        Gender: {{ card.gender }}
      </p>
      <p class="m-0 birthDateParagraph" v-if="!!card.birthDate">
        Birth Date: {{ card.birthDate }}
      </p>
      <p class="m-0 addressParagraph" v-if="!!card.address">
        Address: {{ card.address }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["card", "id"],
  methods: {
    onDrag(e, card) {
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("cardID", card.id);
    },
  },
};
</script>
