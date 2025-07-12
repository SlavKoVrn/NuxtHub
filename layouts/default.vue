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
</style>

