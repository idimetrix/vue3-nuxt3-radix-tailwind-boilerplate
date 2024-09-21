<template>
  <div
    v-tilt-3d="settings"
    class="overflow-hidden flex relative cursor-pointer justify-center items-center group"
  >
    <Imager
      class="aspect-square object-center object-cover flex group-hover:scale-105 relative w-full h-full transition-all duration-300"
      :src="item.src"
    />
    <div
      class="absolute inset-0 bg-gradient-to-b transition-all duration-300 from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"
    />
    <div
      class="text-3xl font-bold absolute px-9 bottom-9 group-hover:opacity-0 duration-300 w-full flex text-center justify-center items-center text-white"
      v-text="item.title"
    />
    <div
      class="absolute inset-0 flex translate-y-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
    >
      <div class="text-3xl font-bold text-white" v-text="item.title" />
      <div
        class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        v-text="item.description"
      />
      <button
        class="rounded-full bg-neutral-900 transition-all duration-300 hover:bg-sassy hover:text-black py-2 px-3.5 text-sm capitalize text-white"
      >
        See More
      </button>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'TiltEffect',
}
</script>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { Settings } from 'tilt-3d'

interface Props extends /** @vue-ignore */ HTMLAttributes {
  item: {
    src: string
    title: string
    description: string
  }
  settings?: Partial<Settings>
}

withDefaults(defineProps<Props>(), {})
</script>
