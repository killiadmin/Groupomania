<script>
import avatar from "../components/ui/uiAvatar.vue"
export default{
    name: "pageProfil",
    components: {
        avatar
    }
    }
</script>

<template>
<div>
    <main class="form-signin">
    <form class="bloc_form">
      <div class="container d-flex align-items-center flex-column gap-3 position">
          <h1 class="h3 mb-3 fw-normal text-center">Votre profil</h1>
              <avatar></avatar>
          <div class="form-floating">
            <h4 class="mb-0">Dupont</h4>
          </div>
          <div class="form-floating">
            <h4 class="mb-0">Jean</h4>
          </div>
          <div class="form-floating">
            <h6 class="mb-0">jean.dupont@groupomania.fr</h6>
          </div>
      </div>
          <button class="w-100 btn btn-lg btn-warning" type="submit">Modifier le profil</button>
          <button class="w-100 btn btn-lg btn-danger" type="submit">Supprimer le profil</button>
    </form>
    </main>
</div>
</template>

<style scoped>
.bloc_form{
    background-color:rgb(246, 246, 246);
    padding:25px;
    border-radius: 10px;
}
.btn{
    margin-top: 50px;
}
.rounded-circle{
    width: 150px;
}
</style>