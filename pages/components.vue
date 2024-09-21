<template>
  <div class="flex w-full min-h-screen gap-3 items-center justify-center">
    <div class="flex w-full min-h-screen flex-col gap-9 items-center justify-center">
      <div class="uppercase">Button (primary)</div>
      <Button variant="primary" size="sm" class=""> Button (sm) </Button>
      <Button variant="primary" size="md" class=""> Button (md) </Button>
      <Button variant="primary" size="lg" class=""> Button (lg) </Button>
    </div>

    <div class="flex w-full min-h-screen flex-col gap-9 items-center justify-center">
      <div class="uppercase">Button (secondary)</div>
      <Button variant="secondary" size="sm" class=""> Button (sm) </Button>
      <Button variant="secondary" size="md" class=""> Button (md) </Button>
      <Button variant="secondary" size="lg" class=""> Button (lg) </Button>
    </div>

    <div class="flex w-full min-h-screen flex-col gap-9 items-center justify-center">
      <div class="uppercase">Button (tertiary)</div>
      <Button variant="tertiary" size="sm" class=""> Button (sm) </Button>
      <Button variant="tertiary" size="md" class=""> Button (md) </Button>
      <Button variant="tertiary" size="lg" class=""> Button (lg) </Button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'IndexPage',
}
</script>

<script setup lang="ts"></script>
