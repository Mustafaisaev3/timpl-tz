<template>
  <div class="modal-view">
    <img src="@/assets/images/carbon-neutral-challenger.svg" alt="carbon-neutral-challenge">
    <div class="modal-view__info">
        <div class="modal-view__title">Profit goes to SWEN</div>
        <div class="modal-view__subtitle">By leaving a tip, you take care <br> of nature</div>
    </div>
    <Button
      text="Learn more about SWEN"
      variant="primary"
    />
  </div>
</template>

<script lang="ts" setup>
import Button from '@/components/ui/Button.vue'
</script>

<style lang="scss" scoped>
.modal-view {
  display: flex;
  flex-direction: column;

  &__info {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 8px;
    margin: 16px 0px;
  }

  &__title {
    color: #262D35;
    font-size: 18px;
  }

  &__subtitle {
    color: #808191;
    font-size: 17px;
  }
}
</style>