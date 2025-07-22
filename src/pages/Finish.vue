<template>
    <q-page class="q-pa-md column justify-center items-center">
        <h3 class="text-center">Abaixo está a sua lista de produtos</h3>

        <q-list class="list">
            <q-item v-for="item in items" :key="item.id" class="finish__item">
                <q-item-section avatar>
                    <q-img 
                        :src="item.image" 
                        class="finish__img"
                        @error="(err) => item.image = 'https://cdn.quasar.dev/img/avatar.png'"
                    />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{item.name}}</q-item-label>
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{item.price | currency}}</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        <q-separator spaced />

        <div class="finish__info">
            <div>Total: {{total | currency}}</div>
        </div>

        <div class="finish__actions">
            <q-btn color="primary" rounded label="Efetuar compra" @click="finishThePurchase"/>
            <q-btn color="primary" flat size="xs" label="Comprar mais" to="/products"/>
        </div>
    </q-page>
</template>

<script>
import { pushNotify } from 'src/utils/notify'
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('cart',['items', 'total'])
    },
    methods: {
        async finishThePurchase() {
            this.$router.push('/success')
            
            console.log('finish', this.items, this.total)
            this.$store.dispatch('sales/createSale', { items: this.items, total: this.total })
            await pushNotify('Nova venda', `Venda no valor de R$ ${this.total}, foi registrada`);
            this.$store.commit('cart/CLEAR_CART')
        }
    }
}
</script>

<style scoped>
.list {
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
}

.finish__info {
    display: flex;
    justify-content: space-between;
}

.finish__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 250px;
}

.finish__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.finish__actions {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 16px;
}
</style>