<template>
  <button
    :class="['button', `button--${variant}`]"
    @click="handleClick"
  >
  <span class="button__text">{{ text }}</span>
  <img v-if="icon" :src="icon" alt="icon" class="button__icon" />
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

interface ButtonProps {
  text: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
}

const { text, icon, variant } = defineProps<ButtonProps>();
const emit = defineEmits(['click']);

const handleClick = () => {
  emit('click');
};
</script>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 44px;
  padding: 10px 20px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &__icon {
    margin-right: 8px;
  }

  &__text {
    white-space: nowrap;
  }

  &--primary {
    background-color: #0F0A2F;
    color: #fff;

    &:hover {
      background-color: #0f0a2ff8;
    }
  }

  &--secondary {
    background-color: #9771FD;
    color: #fff;

    &:hover {
      background-color: #8d63ff;
    }
  }

  &--success {
    background-color: #28a745;
    color: #fff;

    &:hover {
      background-color: #218838;
    }
  }

  &--danger {
    background-color: #dc3545;
    color: #fff;

    &:hover {
      background-color: #c82333;
    }
  }
}
</style>
  