<template>
  <div class="cursor-pointer box-content cover rounded-4px relative w-full">
    <div class="flex gap-2 bg-white text-text">
      <a v-if="cover" target="_blank " :href="cover.original">
        <img class="w-full h-full" :src="preview" :alt="cover.name" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Cover } from "~/interfaces";

const props = defineProps<{
  cover?: Cover;
}>();

const preview = computed(() => {
  if (props.cover?.preview) return props.cover?.preview;
  else return props.cover?.original;
});
</script>
