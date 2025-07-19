<template>
  <q-page class="row q-pa-md">
    <div class="col-12 q-mb-md">
      <q-input
        v-model="searchQuery"
        outlined
        placeholder="Search products"
        @input="onSearch"
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
    ...mapGetters('products', ['filteredProducts'])
  },
  methods: {
    ...mapActions('products', ['setSearchQuery']),
    onSearch() {
      this.setSearchQuery(this.searchQuery)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>