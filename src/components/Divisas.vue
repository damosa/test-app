<template>
  <div class="container">
    <div>
      <h1>Aplicación de divisas</h1>
      {{sourceRate}}
    </div>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Conversion" active>
            <b-card-text>Conversion</b-card-text>
            <h4>Monto</h4>
            <b-input v-model="amount" /><br />
            <h4>Moneda Origen</h4>
            <div>
              <b-form-select v-model="sourceRate"></b-form-select>
            </div>
            <h4>Moneda Objetivo</h4>
            <div>
              <b-form-select v-model="targetRate"></b-form-select>
            </div>
          </b-tab>
          <b-tab title="Historial">
            <b-card-text>Historial</b-card-text>
            <h4>Fecha consulta:</h4>
            <div>
              <b-table></b-table>
            </div>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
    <b-button variant="success">Convertir</b-button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      amount: null,
      sourceRate: null,
      targetRate: null,
      mountConverted: null,
    };
  },
  mounted(){
      this.getDivisa();
  },

  methods: {
    getDivisa() {
      axios
        .get(
          "https://openexchangerates.org/api/latest.json?app_id=07709e2749b04939ac020f82d6da06d3",
        )
        .then((response) => (console.log(response.data.rates)));
    },

    getNameDivisas() {
      axios
        .get(
          "https://openexchangerates.org/api/currencies.json?ba2aec586c2e4bc9a56a970dd9f781c3"
        )
        .then((response) => (this.targetRate = response.rates));
    },
  },
};
</script>
<style scoped>
</style>