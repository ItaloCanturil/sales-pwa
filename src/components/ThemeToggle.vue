<template>
    <div>
        <q-toggle v-model="$q.dark.isActive" color="yellow" checked-icon="dark_mode" unchecked-icon="light_mode" />
    </div>
</template>

<script>
export default {
    name: 'ThemeToggle',
}
</script>