<script>
export default{
    name: "signup"
    }
</script>

<template>
<div>
  <main class="form-signin">
  <form>
    <img class="d-block mx-auto" src="../../assets/icon-left-font-monochrome-black.png" alt="" width="300" height="300">
    <h1 class="h3 mb-3 fw-normal text-center">Créer votre compte</h1>

    <div class="form-floating">
      <input class="form-control" id="floatingInput" placeholder="name">
      <label for="floatingInput">Nom</label>
    </div>
    <div class="form-floating">
      <input class="form-control" id="floatingInput" placeholder="username">
      <label for="floatingInput">Prenom</label>
    </div>
    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Adresse mail</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Mot de passe</label>
    </div>

    <button class="w-100 btn btn-lg btn-warning" type="submit">S'inscrire</button>
  </form>
</main>
</div>
</template>

<style></style>