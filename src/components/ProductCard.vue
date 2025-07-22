<template>
  <q-card class="my-card q-ma-sm">
    <q-img
      :src="product.image"
      class="product-image"
      :ratio="1"
    />

    <q-card-section class="text-left q-pa-md">
      <div class="text-h6 ellipsis">{{ product.name }}</div>
      <div class="text-subtitle2 text-weight-light q-mt-sm">
        {{ product.price | currency }}
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row items-center justify-between">
        <div>Quantidade: </div>
        <q-input
          v-model.number="quantity"
          type="number"
          style="width: 80px"
          filled
          dense
          min="1"
          :rules="[val => val > 0 || 'Please enter a valid quantity']"
        />
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn 
        class="full-width" 
        color="primary" 
        label="Adicionar ao Carrinho"
        rounded
        @click="addToCart"
        :disable="quantity < 1"
      />
    </q-card-actions>
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
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions('cart', ['addItem']),
    addToCart() {
      const itemWithQuantity = {
        ...this.product,
        quantity: this.quantity
      }
      this.addItem(itemWithQuantity)
      this.quantity = 1 // Reset quantity after adding to cart
    }
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