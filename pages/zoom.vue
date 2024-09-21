<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3"
  >
    <ZoomEffect v-for="item in items" :key="item.src" class="aspect-square flex" :item="item" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ZoomPage',
}
</script>

<script setup lang="ts">
import { WORDS } from '~/constants'

const items = ref(
  Array.from({ length: 15 }).map((_, index) => ({
    src: `/images/new york/image${(index + 1).toString().padStart(3, '0')}.jpg`,
    ...WORDS[index],
  })),
)
</script>
