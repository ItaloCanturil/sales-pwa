const savedState = JSON.parse(localStorage.getItem('vuex_state'));

export const localStoragePlugin = store => {
    if (savedState) {
        store.replaceState(savedState);
    }

    store.subscribe((mutation, state) => {
        localStorage.setItem('vuex_state', JSON.stringify(state));
    })
}