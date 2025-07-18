<template>
  <q-page class="column items-center">
    <div class="column justify-center items-center">
      <h1>Gerencie suas vendas</h1>

      <div class="row ">
        <q-btn dense rounded color="primary" label="Criar Venda"  class="q-ma-sm" to="/products"/>
        
        <q-btn dense rounded color="primary" label="Listar Vendas" class="q-ma-sm" to=""/>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
