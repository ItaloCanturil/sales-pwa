<template>
  <q-card class="my-card q-ma-sm">
    <q-img
      :src="product.image"
      class="product-image"
      :ratio="1"
    />

    <q-card-section class="text-left q-pa-md">
      <div class="text-h6 ellipsis">{{ product.name }}</div>
      <div class="text-subtitle2 text-weight-light q-mt-sm" @click="addProduct">
        {{ product.price }}
      </div>
    </q-card-section>

    <q-card-action>
        <q-btn class="full-width" color="primary" label="Adicionar ao Carrinho"/>
    </q-card-action>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('cart', ['addProduct']),
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 300px;
  transition: transform 0.3s;
}

.my-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  object-fit: cover;
}
</style>