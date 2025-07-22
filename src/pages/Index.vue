<template>
  <q-page class="column items-center">
    <div class="column justify-center items-center">
      <h2 class="text-center">Gerencie suas vendas</h2>

      <q-img
        src="../assets/boas-vindas.jpg"
        class="index__image"
        :ratio="1"
      />

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

<style scoped>
.index__image {
  max-width: 400px;
}

.index__image >>> .q-img__image {
  border-radius: 10px;
}
</style>
