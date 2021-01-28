<template>
  <div class="container">
    <div>
      <h1><strong>Aplicación de divisas</strong></h1>
    </div>
    <div>
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Conversion" active>
            <h5>Monto</h5>
            <b-input v-model="amount"/><br />
            <h5>Moneda Origen</h5>
            <div>
              <b-form-select
                v-model="sourceValue"
                :options="options"
              ></b-form-select>
            </div><br>
            <h5>Moneda Objetivo</h5>
            <div>
              <b-form-select
                v-model="targetValue"
                :options="options"
              ></b-form-select>
            </div><br>
            <b-button variant="success" @click="convert()">Convertir</b-button>
            <b-card
              v-if="mountConverted"
              title="Conversión"
              tag="article"
              style="width: 100%"
              class="mb-2"
            >
              <b-card-text>
                {{
                  `${amount} ${sourceValue} = ${mountConverted} ${targetValue}`
                }}
              </b-card-text>
            </b-card>
          </b-tab>
          <b-tab title="Historial">
            <Historial />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import DataService from "../services/DataService";
import Historial from "./Historial.vue";

export default {
  name: "Divisas",
  components: {
    Historial,
  },
  data() {
    return {
      amount: 0,
      options: [],
      sourceValue: null,
      targetValue: null,
      mountConverted: 0,
      errors: [],
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
      if(this.amount=== 0 ){
        alert('Este campo no debe ser cero')
        return false;
      }
       if(this.amount < 0 ){
        alert('Este campo no debe ser negativo')
        return false;
      }
      if(this.amount==="a"){
         alert('Este campo no puede ser una letra')
         return false;
      }
      if(!this.amount){
        alert('Este campo debe ser requerido')
      }
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
