<template>
  <div class="app-container">
    <CardForm @add-card="addCard" />
    <CardTable :cards="cards" />
  </div>
</template>

<script>
import CardForm from './components/CardForm.vue';
import CardTable from './components/CardTable.vue';

export default {
  components: {
    CardForm,
    CardTable
  },
  data() {
    return {
      cards: []
    };
  },
  methods: {
    addCard(cardData) {
      this.cards.push(cardData);
    }
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
}
</style>
