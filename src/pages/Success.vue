<template>
    <q-page class="column justify-center items-center">
        <div class="success column items-center">
            <h2 class="text-center">Compra finalizada com sucesso!</h2>
            <q-img 
              src="../assets/undraw_confirmation_31jc.svg"
              class="success__image"
              :ratio="1"
            />

            <div class="success__actions">
                <q-btn rounded no-caps color="primary" label="Realizar outra compra" to="/products"/>
                <q-btn rounded no-caps color="primary" label="Voltar para o inicio" to="/"/>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {

}
</script>

<style scoped>
.success__actions {
    display: flex;
    max-width: 350px;
    width: 100%;
    justify-content: space-between;
    margin-top: 50px;
}

.success__image {
    max-width: 250px;
    height: auto;
}
</style>