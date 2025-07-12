<script setup>
const { navLinks } = useNavLinks()
</script>

<template>
  <header class="bg-dark p-3">
    <ul class="nav container">
      <li v-for="link in navLinks" :key="link.path" class="nav-item">
        <NuxtLink :to="link.path" class="nav-link text-white">
          {{ link.name }}
        </NuxtLink>
      </li>
    </ul>
  </header>

  <div class="container py-5">
    <slot/>
  </div>

  <div id="overlay">
      <img src="data:image/gif;base64,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" alt="Загрузка..." />
  </div>

</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui"; 

header a:not(.router-link-exact-active):hover {
  text-decoration: underline;
}
header a.router-link-exact-active {
  color: #ffb636 !important;
  font-weight: 500;
}
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark semi-transparent background */
  z-index: 9999;
  display: none; /* Hidden by default */
  justify-content: center;
  align-items: center;
}

#overlay img {
  max-width: 60px;
  max-height: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
}
</style>

