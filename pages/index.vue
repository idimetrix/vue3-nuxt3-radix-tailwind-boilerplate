<template>
  <div class="flex w-full min-h-screen gap-3 items-center justify-center">
    <Button as-child variant="secondary" size="lg">
      <NuxtLink to="/tilt"> Tilt Effect</NuxtLink>
    </Button>
    <Button as-child variant="secondary" size="lg">
      <NuxtLink to="/zoom"> Zoom Effect</NuxtLink>
    </Button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<script setup lang="ts"></script>
