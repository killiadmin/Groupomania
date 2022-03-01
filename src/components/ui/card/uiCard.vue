<script>
import comments from "./uiComments.vue"
import avatar from "../uiAvatar.vue"
export default {
    name: "card",
    components: {
        avatar,
        comments
    }
}
</script>

<template>
<div class="container">
    <div class="card w-50 m-auto">
        <div class="card-header d-flex fw-bold">Jean Dupont
            <avatar></avatar>
        </div>
      <img src="https://picsum.photos/400/200" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Ma citation du jour</h5>
        <p class="card-text border-bottom">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque vel eius maxime, voluptatem ut voluptate amet sequi pariatur minus ab corporis ipsa minima nam praesentium voluptatibus molestias velit. Ipsum, iste.</p>
        <div class="container">
            <comments></comments>
            <comments></comments>
        </div>
        <div class="d-flex">
            <avatar></avatar>
            <input type="text" class="form-control" placeholder="Commentaire"/>
        <a href="#" class="btn btn-warning">Envoyer</a>
        </div>
      </div>
    </div>
</div>
</template>

<style scoped>

input{
    margin-left: 5px;
}

.container {
    margin-top: 20px;
}



.d-flex{
    align-items: center;
    justify-content: space-between;
}
</style>