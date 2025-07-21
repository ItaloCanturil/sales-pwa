<template>
    <div>
        <q-toggle
            v-model="isDark"
            color="yellow"
            checked-icon="dark_mode"
            unchecked-icon="light_mode"
            @update:model-value="toggleDarkMode"
        />
    </div>
</template>

<script>
import { Dark } from 'quasar'

export default {
    name: 'ThemeToggle',
    data() {
        return {
            isDark: Dark.isActive
        }
    },
    methods: {
        toggleDarkMode(value) {
            Dark.set(value)
        }
    },
    mounted() {
        this.isDark = Dark.isActive
    }
}
</script>