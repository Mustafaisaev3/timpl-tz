<template>
  <div class="home">
    <Header />
    <Marquee :texts="['Part of the profit goes to sWen', 'By leaving a tip, you take care of nature', 'Part of the profit goes to sWen', 'By leaving a tip, you take care of nature']" />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import Marquee from '@/components/shared/Marquee.vue';
</script>
