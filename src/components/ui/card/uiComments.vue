<script>
import avatar from "../uiAvatar.vue"
    export default {
        name: "comments",
        components: {
            avatar
        }}
</script>

<template>
    <div class="d-flex">
        <div class="user d-flex align-items-center">
            <avatar></avatar>
            <div class="d-flex flex-column">
                <p class="fw-bold">Michel Georges : </p>
                <p>C'est du japonais ?</p>
            </div>
        </div>
        </div>
</template>

<style scoped>

.user{
    gap: 10px;
}
.flex-column {
    background-color: lightgrey;
    border-radius: 10px;
    width: 100%;
    padding: 5px;
    margin-top:10px;
}
.rounded-circle {
    width:50px
}
</style>