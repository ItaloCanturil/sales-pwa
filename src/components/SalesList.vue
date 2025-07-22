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
                                    Quantidade: {{ item.quantity }} | Preço: {{ item.price | currency }}
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
        <div v-else class="text-center column items-center q-pa-md">
            <q-img src="../assets/no-venda.png" class="sales__img" :ratio="1"/>

            <div class="row">
                <q-btn rounded no-caps color="primary" label="Criar Venda"  class="q-ma-sm " to="/products"/>
            <q-btn rounded no-caps color="primary" label="Voltar para o inicio" class="q-ma-sm " to="/"/>
            </div>
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

.sales__img {
    max-width: 400px;
}

.sales__img >>> .q-img__image {
    border-radius: 10px;
}
</style>