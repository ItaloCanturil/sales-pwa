<template>
    <q-page class="row q-pa-md">
  <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in products" :key="product.id">
    <product-card :product="product" />
  </div>
</q-page>
</template>

<script>
import ProductCard from 'src/components/ProductCard.vue'
export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 10.99,
        },
        {
          id: 2,
          name: 'Product 2',
          price: 19.99,
        },
        {
          id: 3,
          name: 'Product 3',
          price: 29.99,
        },
        {
          id: 4,
          name: 'Product 4',
          price: 39.99,
        },
        {
          id: 5,
          name: 'Product 5',
          price: 49.99,
        },
        {
          id: 6,
          name: 'Product 6',
          price: 59.99,
        },
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>