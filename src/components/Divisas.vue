<template>
<div class="container">
    <div>
        <h1> Aplicación de divisas</h1>
    </div>
    <div>
  <b-card no-body>
    <b-tabs card>
      <b-tab title="Conversion" active>
        <b-card-text>Conversion</b-card-text>
        <h4>Monto</h4>
            <b-input v-model="amount"/><br>
        <h4> Moneda Origen</h4>
            <div>
                <b-form-select v-model="sourceRate"></b-form-select>
            </div>
            <h4> Moneda Objetivo</h4>
            <div>
                <b-form-select v-model="targetRate"></b-form-select>
            </div>
            </b-tab>
            <b-tab title="Historial">
                <b-card-text>Historial</b-card-text>
            </b-tab>
            </b-tabs>
        </b-card>
        </div>
            <b-button variant="success">Convertir</b-button>
        </div>  
    
</template>
<script>

export default {
    data() {
      return {
        amount: null,
        sourceRate : null,
        targetRate: null,
        mountConverted: null 
        
       
      }
    }
  }
</script>
<style scoped>
 
</style>