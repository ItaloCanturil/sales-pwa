<template>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn round color="primary" icon="shopping_cart" class="cart-button" :class="{ 'bounce': isAnimating }">
            <q-badge color="red" floating>{{ cartItemsCount }}</q-badge>
            <q-menu>
                <q-list style="min-width: 250px">
                    <q-item v-if="!items.length" class="text-center">
                        <q-item-section>Seu carrinho está vazio :(</q-item-section>
                    </q-item>
                    <template v-else>
                        <q-item v-for="item in items" :key="item.id">
                            <q-item-section>
                                <q-item-label>{{ item.name }}</q-item-label>
                                <q-item-label caption>Quantity: {{ item.quantity }}</q-item-label>
                            </q-item-section>
                            <q-item-section side>
                                ${{ (item.price * item.quantity).toFixed(2) }}
                            </q-item-section>
                        </q-item>
                        <q-separator />
                        <q-item>
                            <q-item-section>Total:</q-item-section>
                            <q-item-section side>${{ total.toFixed(2) }}</q-item-section>
                        </q-item>
                        <q-item class="row justify-center">
                            <q-btn label="Finalizar compra" to="/finish" rounded size="md"/>
                        </q-item>
                    </template>
                </q-list>
            </q-menu>
        </q-btn>
    </q-page-sticky>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            isAnimating: false
        }
    },
    computed: {
        ...mapGetters('cart', ['items', 'total', 'cartItemsCount'])
    },
    watch: {
        cartItemsCount(newCount, oldCount) {
            if (newCount > oldCount) {
                this.animateCart()
            }
        }
    },
    methods: {
        animateCart() {
            this.isAnimating = true
            setTimeout(() => {
                this.isAnimating = false
            }, 500)
        }
    }
}
</script>

<style scoped>
.cart-button {
    transition: transform 0.2s;
}

.bounce {
    animation: bounce 0.5s cubic-bezier(0.36, 0, 0.66, -0.56) both;
}

@keyframes bounce {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}
</style>