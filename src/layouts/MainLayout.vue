<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-primary row" bordered>
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
        <!-- <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" /> -->

      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

    <ShoppingCartBubble v-if="$route.path !== '/finish'" />
  </q-layout>
</template>

<script>
import ShoppingCartBubble from 'src/components/ShoppingCartBubble.vue';

export default {
  name: 'MainLayout',
  components: {
    // EssentialLink,
    ShoppingCartBubble
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
