<template>
  <q-page class="column items-center">
    <div class="column justify-center items-center">
      <h2>Gerencie suas vendas</h2>

      <div class="row">
        <q-btn rounded color="primary" label="Criar Venda"  class="q-ma-sm " to="/products"/>
        
        <q-btn rounded label="Listar Vendas" class="q-ma-sm" to="/history"/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
