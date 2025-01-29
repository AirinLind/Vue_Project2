<template>
  <div class="table_wrapper">
    <table class="table_content">
      <thead>
        <tr>
          <th class="table_header">NAME</th>
          <th class="table_header">CARD NUMBER</th>
          <th class="table_header">DATE EXPIRE</th>
          <th class="table_header">CODE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(card, index) in cards" :key="index">
          <td class="cardholder_cell">{{ card.name }}</td>
          <td>{{ formatCardNumber(card.number) }}</td>
          <td>{{ card.Month }}/{{ card.Year }}</td>
          <td>**{{ card.cvc.slice(-1) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    cards: Array
  },
  methods: {
    formatCardNumber(number) {
      return number.replace(/\d{4}(?=.)/g, '$& ');
    }
  }
};
</script>

<style scoped>
.table_wrapper {
  margin-top: 40px;
  padding: 20px;
  background-color: #95B0D8;
  border-radius: 26px;
}

.table_content {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

.table_content thead {
  background-color: #E5E5E5;
  font-size: 14px;
}

.table_header {
  text-align: center;
  min-width: 170px;
  padding: 10px;
  padding-bottom: 12px;
}

.table_content td {
  padding: 10px;
  padding-bottom: 12px;
  font-size: 14px;
  text-align: center;
}

.table_content td.cardholder_cell {
  text-align: left;
}

.table_content td, 
.table_content th {
  border: 1px solid #828282;
}

</style>
