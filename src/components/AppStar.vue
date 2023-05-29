<script>
export default {
    name: "AppStar",
    props: {
        itemRating: Number
    }
}
</script>

<template>
    <div v-if="Math.ceil(itemRating / 2) === 0" class="raitStar">
        <p>Voto: not classified</p>
    </div>
    <div v-else class="d-flex align-items-center raitStar pt-1">
        <h5 class="pe-2">Voto:</h5>
        <img src=" src/assets/Gold_Star.svg.png" v-for="star in Math.ceil(itemRating / 2)">
        <img src=" src/assets/starGrey.png" v-for="starGrey in (5 - (Math.ceil(itemRating / 2)))">
    </div>
</template>

<style lang="scss" scoped>
.raitStar {
    img {
        background-color: #222;
        height: 25px;
    }
}
</style>