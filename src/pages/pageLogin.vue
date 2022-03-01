<script>
export default {
    name: "pageLogin",
}
</script>

<template>
<div>
  <main class="form-signin">
  <form>
    <img class="d-block mx-auto" src="../../assets/icon-left-font-monochrome-black.png" alt="" width="300" height="300">
    <h1 class="h3 mb-3 fw-normal text-center">Accéder à mon espace</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
      <label for="floatingInput">Adresse mail</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
      <label for="floatingPassword">Mot de passe</label>
    </div>

    <button class="w-100 btn btn-lg btn-warning" type="submit">Connexion</button>
  </form>
</main>
</div>
</template>

<style>
html,
body {
  height: 100%;
}

body {
  align-items: center;
  padding-bottom: 40px;
  background-color: #f4d4d3!important;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
  
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
  </style>