import { defineStore } from "pinia";

export const useCardStateStore = defineStore("cardState", {
  state: () => ({
    cards: [],
  }),
  getters: {
    getList1: (state) => state.cards.filter((card) => card.belongsTo === 1),
    getList2: (state) => state.cards.filter((card) => card.belongsTo === 2),
  },
  actions: {
    async fetchInitialListData() {
      const respond = await fetch(
        "https://build.fhir.org/patient-example.json"
      );
      const data = await respond.json();
      this.cards = [
        {
          id: 0,
          belongsTo: 1,
          name: data.name[1].given[0],
          gender: data.gender,
        },
        {
          id: 1,
          belongsTo: 1,
          name: data.name[1].given[0],
          birthDate: data.birthDate,
        },
        {
          id: 2,
          belongsTo: 2,
          name: data.name[1].given[0],
          address: data.address[0].text,
        },
      ];
    },
  },
});
