<script >
export default {
    name: "AppTitle"
}
</script>

<template>
    <div class="container-fluid bg-black heightHeader d-grid">
        <div class="d-flex justify-content-around align-items-center">
            <div>
                <h2 class="text-danger">BOOFLIX</h2>
            </div>
            <div>
                <input type="text" placeholder="Inserisci un Film">
                <button><i class="fa-solid fa-magnifying-glass" style="color: #000000;"></i></button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.heightHeader {
    height: 80px;
}
</style>
