<template>
  <div>
    <h4><strong>Fecha de consulta: {{ currentDate }}</strong></h4>
    <div>
      <b-table striped hover :items="historical" :fields="fields"></b-table>
    </div>
  </div>
</template>
<script>
import DataService from "../services/DataService";

export default {
  name: "Historial",
  data() {
    return {
      currentDate: "",
      historical: [],
      fields: [
        { key: "name", label: "Nombre" },
        { key: "abbreviation", label: "Abreviatura" },
        { key: "price", label: "Precio" },
      ],
    };
  },
  mounted() {
    this.currentDate = this.getDate();
    this.getHistorical();
  },
  methods: {
    getDate() {
      let date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      const dateFormat =
        month < 10 ? `${year}-0${month}-${day}` : `${day}-${month}-${year}`;
      return dateFormat;
    },
    async getHistorical() {
      const { data: listNamesDivisas } = await DataService.getNamesDivisas();
      const {
        data: { rates: historical },
      } = await DataService.getHistorical(this.currentDate);
      console.log(listNamesDivisas, historical);
      this.historical = Object.keys(historical).map((key) => {
        return {
          name: listNamesDivisas[key],
          abbreviation: key,
          price: historical[key],
        };
      });
    },
  },
};
</script>
<style lang="stylus" scoped></style>
