<script setup lang="ts">
import Todos from "./components/Todos.vue";
// Access Vite env in script; templates can't use import.meta directly
const appTitle = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <main>
    <h1>{{ appTitle }}</h1>
    <Todos />
  </main>
</template>
