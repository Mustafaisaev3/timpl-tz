<template>
  <div class="togle">
    <div class="togle__content">
      <p class="togle__title">I want Mark to receive <br> the full amount</p>
      <p class="togle__subtitle">You compensate service fee of 0.00€,<br> which will be applied to your payment.</p>
    </div>
    <Switch />
  </div>
</template>

<script setup lang="ts">
import Switch from '@/components/ui/Switch.vue'
</script>
<style lang="scss" scoped>
.togle {
  width: auto;
  height: auto;
  border-radius: 12px;
  margin-top: 12px;
  margin-inline: 20px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__title {
    font-size: 14px;
  }
  &__subtitle {
    font-size: 12px;
    color: #808191;
  }
}
</style>