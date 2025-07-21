<template>
    <q-page class="column items-center q-pa-md">
        <h2>Historico de vendas</h2>
        <div class="history__wrap">
            <sales-list :sales="this.$store.state.sales.history"/>
        </div>
    </q-page>
</template>

<script>
import SalesList from 'src/components/SalesList.vue'

export default {
    name: 'History',
    components: {
        SalesList
    },
}
</script>

<style scoped>
.history__wrap {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 100%;
    padding: 16px;
}
</style>