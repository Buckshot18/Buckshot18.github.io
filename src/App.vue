<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app class="d-flex flex-column fill-height">
    <v-main class="d-flex flex-column flex-grow-1">
      <RouterView class="flex-grow-1" />
    </v-main>
  </v-app>
</template>
