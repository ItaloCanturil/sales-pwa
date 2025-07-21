<template>
    <q-page class="q-pa-md column justify-center items-center">
        <q-list class="list">
            <q-item v-for="item in items" :key="item.id">
                <q-item-section avatar>
                    <!-- <q-img :src="item.image" /> -->
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{item.name}}</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
        <q-separator spaced />

        <div class="finish__info">
            <div>Total: R$ {{total}}</div>
        </div>

        <q-btn color="primary" rounded label="Efetuar compra" @click="finishThePurchase"/>
    </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('cart',['items', 'total'])
    },
    methods: {
        finishThePurchase() {
            this.$store.commit('cart/CLEAR_CART')
            this.$router.push('/success')
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
</style>