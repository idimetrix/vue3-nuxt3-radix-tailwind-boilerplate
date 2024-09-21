<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3"
  >
    <TiltEffect
      v-for="item in items"
      :key="item.src"
      class="aspect-square flex"
      :item="item"
      :settings="settings"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'TiltPage',
}
</script>

<script setup lang="ts">
import { WORDS } from '~/constants'
import type { Settings } from 'tilt-3d'

const items = ref(
  Array.from({ length: 15 }).map((_, index) => ({
    src: `/images/new york/image${(index + 1).toString().padStart(3, '0')}.jpg`,
    ...WORDS[index],
  })),
)

const settings = ref<Partial<Settings>>({
  speed: 400,
  perspective: 500,
  max: 15,
})
</script>
