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
            <b-input/><br>
        <h4> Moneda Origen</h4>
            <div>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <div class="mt-3"><strong>{{ selected }}</strong></div>
            </div>
            <h4> Moneda Objetivo</h4>
            <div>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <div class="mt-3"><strong>{{ selected }}</strong></div>
            </div>
            </b-tab>
            <b-tab title="Historial">
                <b-card-text>Historial</b-card-text>
            </b-tab>
            </b-tabs>
        </b-card>
        </div>
        <button>Convertir</button>
        </div>  
    
</template>
<script>

export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  }
</script>
<style scoped>
 
</style>