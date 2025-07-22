<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    console.log('Notification permission granted');
  } else {
    console.log('Notification permission denied');
  }
});

Vue.filter('currency', (value) => {
  if (!value) return 'R$ 0,00';
  return `R$ ${Number(value).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
});

export default {
  name: 'App'
}
</script>
