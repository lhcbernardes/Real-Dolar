<template>
<Toolbar>
    <template #left>
    <h3>Reais para Dólares</h3>
    </template>

    <template #right>
    </template>
</Toolbar>
 <h1 class="label-title">$</h1>
 <div class="container">
  <div class="div-imc">
    <span class="p-float-label">
     <InputText id="input-weight" type="text" v-model="reais"/>
        <label for="inputtext">Quantidade em Reais</label>
    </span>
  </div>

  <div class="div-imc">
    <span class="p-float-label">
      <InputText id="input-height" type="text" v-model="dolar"/>
      <label for="input-height">Cotação do Dólar</label>
    </span>
  </div>
 </div>
  <div class="div-imc">
    <Button label="Limpar" @click="clear()"/>
    <Button class="button-calculate" label="Calcular" @click="calculate()"/>
  </div>

  <div v-if="resultado" class="container">
    <p class="label-result">Com {{reais}} reais é possível comprar {{resultado}} dólares a {{dolar}} cada.</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      reais: null,
      dolar: null,
      resultado: null
    }
  },
  methods: {
    calculate: function() {
      this.resultado = (this.reais/this.dolar).toFixed(2);
    },
    clear() {
      this.reais = null;
      this.dolar = null;
      this.resultado = null;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.div-imc {
margin-top: 2rem;
}

.label-title {
  font-size: 3rem;
}

.label-subtitle {
  font-size: 1.5rem;
}

.label-result{
font-size: 2rem;
}

.button-calculate{
margin-left: 1rem !important;
}

.container{
  margin-left: auto;
    margin-right: auto;
    width: 20rem;
}

.p-inputtext{
  width: 20rem;
}
</style>
