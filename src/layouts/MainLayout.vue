<template>
  <q-layout view="lHh Lpr lFf">
    <q-header :class="{
      'bg-white text-primary': !$q.dark.isActive,
      'bg-dark text-white': $q.dark.isActive
    }" bordered>
      <q-toolbar>
        <q-space/>

        <q-toolbar-title class="row justify-center">
          <q-btn
            flat
            no-caps
            no-ripple
            label="Canturil's Sale"
            to="/"
          />
        </q-toolbar-title>

        <q-space/>

        <theme-toggle/>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <ShoppingCartBubble v-if="showCart" />
  </q-layout>
</template>

<script>
import ShoppingCartBubble from 'src/components/ShoppingCartBubble.vue';
import ThemeToggle from 'src/components/ThemeToggle.vue';

export default {
  name: 'MainLayout',
  components: {
    ShoppingCartBubble,
    ThemeToggle
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },
  computed: {
    showCart() {
      return !['/finish', '/success'].includes(this.$route.path)
    }
  }
}
</script>
