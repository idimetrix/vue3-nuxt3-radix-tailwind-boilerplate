<template>
  <NuxtImg
    :class="['opacity-0 transition-all duration-300', dynamicClasses]"
    @load="onLoad"
    @error="onError"
  />
</template>

<script lang="ts">
export default {
  name: 'Imager',
}
</script>

<script setup lang="ts">
import type { ImgHTMLAttributes } from 'vue'

interface Props extends /** @vue-ignore */ ImgHTMLAttributes {
  effect?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  effect: true,
})

const loading = ref(true)
const loaded = ref(false)

function onLoad(event: Event) {
  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 100)
}

function onError(event: string | Event) {
  loading.value = false
  loaded.value = true
}

const dynamicClasses = computed(() => props.effect && loaded && 'opacity-100')
</script>
