<script>
import card from "../../components/ui/card/uiCard.vue"
import postCard from "./pagePostCard.vue"
export default {
    name: "pageHome",
    components : {
        card,
        postCard
    }
}
</script>

<template>
<h1>HOME PAGE</h1>
<div class="container">
    <postCard></postCard>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
    </div>
</template>

<style>

</style>