<template>
  <div class="marquee">
    <div class="marquee__content">
      <span v-for="(text, index) in texts" :key="index" class="marquee__item">
        {{ text }}
        <span v-if="index < texts.length - 1" class="marquee__icon">
          <img src="@/assets/swen-icon.svg" alt="swen-icon">
        </span>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted } from 'vue';

interface MarqueeProps {
  texts: string[];
}

const props = defineProps<MarqueeProps>();
</script>

<style lang="scss" scoped>
.marquee {
  background-image: url('@/assets/marquee-bg.svg');
  background-size: cover;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;

  &__content {
    display: flex;
    align-items: center;
    animation: marquee 10s linear infinite;
  }

  &__item {
    height: 100%;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: #0F0A2F;
    font-size: 12px;
    font-weight: 700;
  }

  &__icon {
    margin-right: 10px;
    margin-left: 10px;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
  