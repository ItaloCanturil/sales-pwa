<template>
  <q-page class="row q-pa-md">
    <div class="col-12 q-mb-md row items-center">
      <q-btn
        icon="arrow_back"
        flat
        round
        dense
        color="primary"
        class="q-mr-sm"
        to="/"
      />
      <q-input
        v-model="searchQuery"
        outlined
        placeholder="Procure os produtos"
        rounded
        dense
        :dark="false"
        @input="onSearch"
        class="col"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <div 
      class="col-12 col-sm-6 col-md-4 col-lg-3" 
      v-for="product in filteredProducts" 
      :key="product.id"
    >
      <product-card :product="product" />
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ProductCard from 'src/components/ProductCard.vue'

export default {
  components: { ProductCard },
  data() {
    return {
      searchQuery: ''
    }
  },
  computed: {
    ...mapGetters('products', ['filteredProducts', 'loading', 'error']),
  },
  methods: {
    ...mapActions('products', ['setSearchQuery', 'fetchProducts']),
    onSearch() {
      this.setSearchQuery(this.searchQuery)
    }
  },
  async mounted() {
    await this.fetchProducts();
  }
}
</script>

<style scoped>

</style>