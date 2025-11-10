<script setup lang="ts">
import Todos from "./components/Todos.vue";
</script>

<template>
  <main>
    <h1>{{ import.meta.env.VITE_APP_TITLE }}</h1>
    <Todos />
  </main>
</template>
