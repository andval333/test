<script setup lang="ts">
import AppHeader from 'components/AppHeader.vue';
import AppFooter from 'components/AppFooter.vue';
</script>

<template>
  <div class="default-layout">
    <app-header />
    <slot />
    <app-footer />
  </div>
</template>
