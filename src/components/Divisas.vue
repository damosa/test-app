<template>
  <div class="container">
    <div>
      <h1>Aplicación de divisas</h1>
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
              <b-form-select
                v-model="sourceRate"
                :options="sourceOptions"
              ></b-form-select>
            </div>
            <h4>Moneda Objetivo</h4>
            <div>
              <b-form-select
                v-model="targetRate"
                :options="sourceOptions"
              ></b-form-select>
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
import DataService from '../services/DataService';
export default {
  data() {
    return {
      amount: 0,
      sourceRate: null,
      sourceOptions: [],
      targetRate: null,
      mountConverted: null,
    };
  },
  mounted(){
      this.getNameDivisas();
  },
  methods: {
    getDivisa() {
      
    },
    getNameDivisas() {
      DataService.getNamesDivisas()
        .then((response) => {
          console.log('response', response);
          this.sourceOptions = response.data;
        });
    },
  },
};
</script>
<style scoped></style>
