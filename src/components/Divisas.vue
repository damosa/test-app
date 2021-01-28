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
                v-model="sourceValue"
                :options="options"
              ></b-form-select>
            </div>
            <h4>Moneda Objetivo</h4>
            <div>
              <b-form-select
                v-model="targetValue"
                :options="options"
              ></b-form-select>
            </div>
            <b-button variant="success" @click="convert()">Convertir</b-button>
            <b-card v-if="mountConverted > 0"
              title="Conversión"
              tag="article"
              style="width: 100%"
              class="mb-2"
            >
              <b-card-text>
                {{`${amount} ${sourceValue} = ${mountConverted} ${targetValue}`}}
              </b-card-text>
            </b-card>
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
  </div>
</template>
<script>
import DataService from "../services/DataService";
export default {
  data() {
    return {
      amount: 0,
      options: [],
      sourceValue: null,
      targetValue: null,
      mountConverted: 0,
    };
  },
  mounted() {
    this.getNameDivisas();
  },
  methods: {
    getDivisa() {
      return DataService.getListDivisas().then((response) => {
        console.log("getDivisa data", response.data);
        const { rates } = response.data;
        return rates;
      });
    },
    getNameDivisas() {
      DataService.getNamesDivisas().then((response) => {
        const { data } = response;
        const newDataParse = Object.keys(data).map((key) => ({
          value: key,
          text: `${data[key]} (${key})`,
        }));
        this.options = newDataParse;
      });
    },
    async convert() {
      const rates = await this.getDivisa();
      const sourceRate = rates[this.sourceValue];
      const targetRate = rates[this.targetValue];
      const mountConverted = (this.amount / sourceRate) * targetRate;
      this.mountConverted = mountConverted;
    },
  },
};
</script>
<style scoped></style>
