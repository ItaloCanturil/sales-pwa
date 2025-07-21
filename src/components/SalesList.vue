<template>
    <div class="sales-list">
        <q-list v-if="sales.length > 0">
            <q-item v-for="sale in sales" :key="sale.id" class="q-mb-sm">
                <q-item-section>
                    <q-item-label class="text-weight-bold">Venda #{{ sale.id }}</q-item-label>
                    <q-item-label caption>
                        Data: {{ new Date(sale.date).toLocaleDateString() }}
                    </q-item-label>
                    <q-list dense>
                        <q-item v-for="item in sale.items" :key="item.id">
                            <q-item-section>
                                <q-item-label>{{ item.name }}</q-item-label>
                                <q-item-label caption>
                                    Quantidade: {{ item.quantity }} | Preço: R$ {{ item.price.toFixed(2) }}
                                </q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                    <q-item-label class="text-weight-bold text-right">
                        Total: R$ {{ sale.total.toFixed(2) }}
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        <div v-else class="text-center q-pa-md">
            Nenhuma venda registrada.
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'SalesList',
    props: {
        sales: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style scoped>
.sales-list {
    width: 100%;
}
</style>