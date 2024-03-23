<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <p>Current route: {{ route.path }}</p>
  </div>
</template>
